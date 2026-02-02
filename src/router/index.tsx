import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from '@/App.tsx'

import { useGetMenusQuery, type MenuItem } from '@/api/core'

const pages = import.meta.glob('@/pages/**/index.tsx')

function useAppRouter() {
  const { data } = useGetMenusQuery()

  const a = [
    {
      id: 1,
      name: '首页',
      path: '/',
      menuType: 1,
      icon: 'SquareTerminal',
      children: [
        {
          id: 2,
          menuType: 2,
          name: '工作台',
          path: 'dashboard',
        },
      ],
    },
  ]

  const transformMenus = ({
    items,
    parentPath = '',
  }: {
    items: MenuItem[]
    parentPath?: string | undefined
  }): any => {
    return items.map((item) => {
      return {
        ...item,
        path: `${parentPath}${item.path}`,
        lazy:
          item.menuType === 2
            ? async () => {
                const module = await pages[`/src/pages${parentPath}${item.path}/index.tsx`]()
                const { default: Component } = module as { default: React.ComponentType }
                return { Component }
              }
            : undefined,
        children: transformMenus({
          items: item.children || [],
          parentPath: `${parentPath}${item.path}`,
        }),
      }
    })
  }

  return transformMenus({ items: a || [] })
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
