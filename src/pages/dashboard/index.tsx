import { useGetMenusQuery } from '@/api/core'

export default function Dashboard() {
  const { data } = useGetMenusQuery(undefined)
  console.log(data, '2')

  return <div>11121212121212121</div>
}
