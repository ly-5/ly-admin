import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterPage } from '@/router'
import store from '@/store'
import { Provider } from 'react-redux'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <RouterPage />
    </Provider>
  </Suspense>
)
