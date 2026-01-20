import NavLinkClient from '@/app/components/module/dashboard/NavlinkClient';
import Logo from '@/app/components/shared/Logo';
import { getUserInfo } from '@/app/services/auth/userInfo';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { commonRoutes, getRoutesByRole } from '@/routes/routes';

export default async function AppSidebar() {
  const user = await getUserInfo();
  if (!user) {
    return null;
  }
  const routes = getRoutesByRole(user.role);

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Logo />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-2">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-2 space-y-1">
              {routes.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <NavLinkClient
                    href={item.href}
                    title={item.title}
                    iconName={item.iconName || ''}
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="my-2 border-t border-border/40 mx-4" />

        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-2">
            Preferences
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-2 space-y-1">
              {commonRoutes.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <NavLinkClient
                    href={item.href}
                    title={item.title}
                    iconName={item.iconName || ''}
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
