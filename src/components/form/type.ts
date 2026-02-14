import type { FieldValues, ControllerProps } from 'react-hook-form'

export type ComponentType = 'Input' | 'Select'

export type FormItemProps = {
  field: string
  label: string
  component: ComponentType
  hidden?: boolean | ((values: FieldValues) => boolean)
  hideLabel?: boolean
  labelWidth?: number
  orientation?: 'horizontal' | 'vertical'
  render?: ControllerProps<FieldValues>['render']
}

export type FormConfig = {
  labelWidth?: number
  orientation?: 'horizontal' | 'vertical'
  wrapperClass?: string
  schema: FormItemProps[]
}
