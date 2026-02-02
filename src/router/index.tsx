import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from '@/App.tsx'

import { useGetMenusQuery, type MenuItem } from '@/api/core'

function useAppRouter() {
  const { data } = useGetMenusQuery()

  const transformMenus: (items: MenuItem[], parentPath?: string) => any = (
    items,
    parentPath = ''
  ) => {
    return items.map((item) => ({
      ...item,
      path: `${parentPath}${item.path}`,
      lazy: async () => {
        if (item.menuType === 2) {
          const { default: Component } = await import(`@/pages${parentPath}${item.path}/index.tsx`)
          return { Component }
        }
        return {}
      },

      children: transformMenus(item.children || [], item.path),
    }))
  }

  return transformMenus(data || [])
}

export function RouterPage() {
  const menus = useAppRouter()
  const router = createBrowserRouter([
    {
      path: '/',
      Component: App,
      loader: async () => menus,
      children: menus,
    },
  ])

  return <RouterProvider router={router} />
}
