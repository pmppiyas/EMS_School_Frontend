import NavLinkClient from '@/app/components/module/dashboard/NavlinkClient'
import Logo from '@/app/components/shared/Logo'
import { getUserInfo } from '@/app/services/auth/userInfo'
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { commonRoutes, getRoutesByRole } from '@/routes/routes'


export default async function AppSidebar() {
  const user = await getUserInfo()
  if (!user) {
    return null
  }
  const routes = getRoutesByRole(user.role);

  return (
    <Sidebar collapsible="offcanvas" >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Logo />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <div className="flex flex-col  h-full space-y-8">
          <nav className="mt-3 space-y-1">
            {routes.map((item) => (
              <NavLinkClient
                key={item.href}
                href={item.href}
                title={item.title}
                iconName={item.iconName || ''}
              />
            ))}
          </nav>

          <nav className="mt-3 space-y-1">
            {commonRoutes.map((item) => (
              <NavLinkClient
                key={item.href}
                href={item.href}
                title={item.title}
                iconName={item.iconName || ''}
              />
            ))}
          </nav>
        </div>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
