import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import store from '@/store'
import { Provider } from 'react-redux'

import App from './App.tsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: 'dashboard',
        lazy: async () => {
          const { default: Component } = await import('@/pages/dashboard/index.tsx')
          return { Component }
        },
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </Suspense>
)
