import type { FormItemProps, ComponentType, FormConfig } from './type'
import type {
  FieldValues,
  ControllerProps,
  UseFormReturn,
  UseControllerProps,
} from 'react-hook-form'

import React from 'react'
import { cn } from '@/lib/utils'
import {
  FormProvider,
  Controller,
  useFormContext,
  useWatch,
  useController,
  useFormState,
} from 'react-hook-form'
import { Field, FieldLabel, FieldError } from '@/components/ui/field'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select'

// 组件映射表
const componentMap = {
  Input,
  Select: (props: UseControllerProps<any>) => {
    const { field } = useController(props)

    return (
      <Select value={field.value} onValueChange={field.onChange}>
        <SelectTrigger className="flex-1">
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  },
}

const renderField = ({
  component,
  componentProps,
}: {
  component: ComponentType
  componentProps?: Record<string, any>
}) => {
  const renderFn: ControllerProps<FieldValues>['render'] = ({ field, formState }) => {
    const Component = componentMap[component]

    if (!Component) {
      throw new Error(`组件${component}不存在`)
    }

    return (
      <Component {...field} {...componentProps} aria-invalid={!!formState?.errors?.[field.name]} />
    )
  }

  return renderFn
}

const FormItem: React.FC<FormItemProps> = ({
  field,
  component,
  orientation,
  labelWidth,
  hideLabel,
  hidden,
  componentProps,
  label,
  render = renderField({
    component,
    componentProps,
  }),
}) => {
  const { control } = useFormContext()
  const { errors } = useFormState()
  const formValues = useWatch({ control })

  const isHidden = React.useMemo(() => {
    if (typeof hidden === 'function') {
      return hidden(formValues)
    }
    return hidden || false
  }, [hidden, formValues])

  return (
    !isHidden && (
      <Field orientation={orientation} data-invalid={!!errors?.[field]} className="relative">
        {(!hideLabel || orientation !== 'horizontal') && (
          <FieldLabel
            htmlFor={field}
            className={cn('ml-2 flex-none!', {
              'ml-0 justify-end': orientation === 'horizontal',
              'opacity-0': hideLabel && orientation !== 'horizontal',
            })}
            style={{ width: `${labelWidth}px` }}
          >
            {label}
          </FieldLabel>
        )}
        <Controller name={field} control={control} render={render} />
        {errors?.[field]?.message && (
          <FieldError
            className={cn('absolute top-full', {
              'ml-2': !hideLabel,
            })}
            style={{ left: `${hideLabel || orientation !== 'horizontal' ? 0 : labelWidth}px` }}
          >
            {String(errors[field]?.message)}
          </FieldError>
        )}
      </Field>
    )
  )
}

const LForm: React.FC<FormConfig & UseFormReturn<any>> = ({
  labelWidth,
  wrapperClass = 'grid-cols-2 gap-5',
  orientation = 'vertical',
  schema,
  ...methods
}) => {
  console.log(1)
  return (
    <FormProvider {...methods}>
      <form className={cn('grid', wrapperClass)}>
        {schema.map((item) => (
          <FormItem key={item.field} orientation={orientation} labelWidth={labelWidth} {...item} />
        ))}
      </form>
    </FormProvider>
  )
}

export default LForm
