import type { FormItemProps, ComponentType, FormConfig } from './type'
import type { FieldValues, ControllerProps, UseFormReturn } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { FormProvider, Controller, useFormContext } from 'react-hook-form'
import { Field, FieldLabel } from '@/components/ui/field'

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
  Select: () => (
    <Select defaultValue="banana">
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
  ),
}

const renderField = (component: ComponentType) => {
  const renderFn: ControllerProps<FieldValues>['render'] = ({ field }) => {
    const Component = componentMap[component]

    if (!Component) {
      throw new Error(`组件${component}不存在`)
    }

    return <Component {...field} />
  }

  return renderFn
}

const FormItem: React.FC<FormItemProps> = ({
  field,
  component,
  orientation,
  labelWidth,
  hideLabel,
  label,
  render = renderField(component),
}) => {
  const { control } = useFormContext()
  console.log(2)
  return (
    <Field orientation={orientation}>
      {!hideLabel && (
        <FieldLabel
          htmlFor={field}
          className="flex-none! justify-end"
          style={{ width: `${labelWidth}px` }}
        >
          {label}
        </FieldLabel>
      )}
      <Controller name={field} control={control} render={render} />
    </Field>
  )
}

const LForm: React.FC<FormConfig & UseFormReturn<FieldValues, any, FieldValues>> = ({
  labelWidth,
  wrapperClass = 'grid-cols-2 gap-4',
  orientation = 'horizontal',
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
