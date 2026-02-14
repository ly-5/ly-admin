import { createRoot } from 'react-dom/client'
import { RouterPage } from '@/router'
import { store } from '@/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@/components/theme-provider'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider defaultTheme="light" storageKey="ly-admin-theme">
      <RouterPage />
    </ThemeProvider>
  </Provider>
)
