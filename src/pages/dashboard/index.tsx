import { zodResolver } from '@hookform/resolvers/zod'
import LForm from '@/components/form'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import * as z from 'zod'

type aaa = {
  a: string
  b: string
  c: string
  d: string
}

const schema = z.object({
  a: z.string().min(1, '请输入项目名称1'),
  b: z.string().min(1, '请输入项目名称2'),
  c: z.string().min(1, '请输入项目名称3'),
  d: z.string(),
})

export default function Dashboard() {
  const methods = useForm<aaa>({
    resolver: zodResolver(schema),
    defaultValues: {
      a: '',
      b: '',
      c: '3',
      d: '4',
    },
  })

  const onSubmit = (data: aaa) => {
    console.log(data, methods, '111')
  }

  return (
    <div className="bg-sidebar space-y-8 rounded-lg p-4 shadow-sm">
      <LForm
        {...methods}
        labelWidth={180}
        schema={[
          {
            field: 'a',
            component: 'Input',
            label: '项目名称1',
            componentProps: {
              placeholder: '请输入项目名称1',
            },
          },
          {
            field: 'b',
            component: 'Select',
            labelWidth: 90,
            label: '项目名称2',
          },
          {
            field: 'c',
            component: 'Input',
            hideLabel: true,
            label: '项目名称3',
          },
          {
            field: 'd',
            component: 'Input',
            label: '项目名称4',
            hidden: (values) => {
              return values.b === 'banana'
            },
          },
        ]}
      />

      <Button onClick={methods.handleSubmit(onSubmit)}>提交</Button>
    </div>
  )
}
