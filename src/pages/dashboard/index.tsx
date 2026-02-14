import LForm from '@/components/form'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  const methods = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="bg-sidebar space-y-8 p-4">
      <LForm
        {...methods}
        labelWidth={90}
        schema={[
          {
            field: 'a',
            component: 'Input',
            label: '项目名称1',
          },
          {
            field: 'b',
            component: 'Select',
            label: '项目名称2',
          },
          {
            field: 'c',
            component: 'Input',
            hideLabel: true,
            label: '项目名称3',
          },
        ]}
      />

      <Button onClick={methods.handleSubmit(onSubmit)}>提交</Button>
    </div>
  )
}
