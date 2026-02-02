import { AppSidebar } from '@/layout'
// import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useLoaderData, Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'

export default function Page() {
  const menus = useLoaderData()
  console.log(menus, '111111111111')

  return (
    <SidebarProvider>
      <Toaster position="top-center" />

      <AppSidebar items={menus} />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 rounded-xl">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            {/* <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            /> */}
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
