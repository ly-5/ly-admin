import { useLoaderData, Outlet } from 'react-router-dom'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Toaster } from '@/components/ui/sonner'
import { AppSidebar } from './sidebar'
import { SidebarTrigger } from '@/components/ui/sidebar'
import ThemeToggle from './header/theme-toggle'
import SettingsButton from './header/settings-button'
import UserProfile from './header/user-profile'

export default function RootLayout() {
  const menus = useLoaderData()

  return (
    <SidebarProvider>
      <Toaster position="top-center" />

      <AppSidebar items={menus} />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center justify-between gap-2 px-4">
          <SidebarTrigger className="-ml-1 cursor-pointer" />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <SettingsButton />
            <UserProfile />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
