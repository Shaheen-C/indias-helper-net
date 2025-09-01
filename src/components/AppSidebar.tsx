import { Home, HelpCircle, Users, UserPlus, Info, LogIn, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { state } = useSidebar();
  const { user, logout } = useAuth();
  const isCollapsed = state === "collapsed";

  const navigationItems = [
    { title: "Home", url: "/", icon: Home },
    { title: "How It Works", url: "/how-it-works", icon: Info },
    { title: "Why Us", url: "/why-us", icon: Users },
    { title: "Become a Helper", url: "/become-helper", icon: UserPlus },
    { title: "FAQ", url: "/faq", icon: HelpCircle },
    ...(user ? [{ title: "Profile", url: "/profile", icon: User }] : []),
    ...(user ? [] : [{ title: "Sign In", url: "/signin", icon: LogIn }]),
  ];

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-sidebar">
        {/* Logo Section */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
              <span className="text-sidebar-primary-foreground font-bold text-lg">G</span>
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="text-sidebar-foreground font-bold text-lg">Get It Done</h1>
                <p className="text-sidebar-foreground/70 text-xs">On-demand services</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup className="px-4 py-2">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!isCollapsed && <span className="text-sm font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Bottom CTA */}
        {!isCollapsed && !user && (
          <div className="mt-auto p-4 border-t border-sidebar-border">
            <div className="bg-sidebar-accent/20 rounded-lg p-3 text-center">
              <p className="text-sidebar-foreground text-xs mb-2">Ready to get started?</p>
              <NavLink
                to="/signup"
                className="inline-block bg-sidebar-primary text-sidebar-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        )}
        
        {/* User Section */}
        {!isCollapsed && user && (
          <div className="mt-auto p-4 border-t border-sidebar-border">
            <div className="bg-sidebar-accent/20 rounded-lg p-3">
              <p className="text-sidebar-foreground text-sm font-medium mb-1">
                Welcome, {user.firstName}!
              </p>
              <p className="text-sidebar-foreground/70 text-xs mb-3">{user.email}</p>
              <Button
                onClick={logout}
                variant="outline"
                size="sm"
                className="w-full text-xs"
              >
                Sign Out
              </Button>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}