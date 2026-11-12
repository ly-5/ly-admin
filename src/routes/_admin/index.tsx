import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/')({
  component: Home,
})

function Home() {
  return <div>Hello "/_admin/"!</div>
}
