import type { MenuItem } from '@/api/core'

import * as React from 'react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

import { Command, ChevronRight } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // SidebarGroup,
  // SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  // SidebarMenuSkeleton,
} from '@/components/ui/sidebar'

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar> & { items: MenuItem[] }) {
  return (
    <Sidebar variant="floating" {...props} collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="hover:bg-transparent active:bg-transparent"
            >
              <a href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">ICS</span>
                  <span className="truncate text-xs">智云平台</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={props.items} />
      </SidebarContent>
    </Sidebar>
  )
}

export function NavMain({ items }: { items: MenuItem[] }) {
  return (
    // <SidebarGroup>
    //   <SidebarGroupLabel>home</SidebarGroupLabel>
    //   <SidebarMenu>
    //     {items.map((item) => (
    //       <Collapsible key={item.name} asChild className="group/collapsible">
    //         <SidebarMenuItem>
    //           <CollapsibleTrigger asChild>
    //             <SidebarMenuButton tooltip={item.name}>
    //               {item.icon && <Command />}
    //               <span>{item.name}</span>
    //               <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
    //             </SidebarMenuButton>
    //           </CollapsibleTrigger>
    //           <CollapsibleContent>
    //             <SidebarMenuSub>
    //               {(item.children || []).map((subItem) => (
    //                 <SidebarMenuSubItem key={subItem.name}>
    //                   <SidebarMenuSubButton asChild>
    //                     <a href={subItem.path}>
    //                       <span>{subItem.name}</span>
    //                     </a>
    //                   </SidebarMenuSubButton>
    //                 </SidebarMenuSubItem>
    //               ))}
    //             </SidebarMenuSub>
    //           </CollapsibleContent>
    //         </SidebarMenuItem>
    //       </Collapsible>
    //     ))}
    //   </SidebarMenu>
    // </SidebarGroup>
    <SidebarMenu>
      {items.map((item) => (
        <Collapsible key={item.name} asChild className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={item.name}>
                {item.icon && <Command />}
                <span>{item.name}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {(item.children || []).map((subItem) => (
                  <SidebarMenuSubItem key={subItem.name}>
                    <SidebarMenuSubButton asChild>
                      <a href={subItem.path}>
                        <span>{subItem.name}</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      ))}
    </SidebarMenu>
  )
}
