import {
  BarChart3,
  Users,
  Calendar,
  UserPlus,
  FileText,
  Settings,
  Activity,
  Heart,
  Stethoscope
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Bệnh nhân", url: "/patients", icon: Users },
  { title: "Thêm bệnh nhân", url: "/patients/new", icon: UserPlus },
  { title: "Lịch hẹn", url: "/appointments", icon: Calendar },
  { title: "Hồ sơ bệnh án", url: "/medical-records", icon: FileText },
  { title: "Theo dõi sức khỏe", url: "/monitoring", icon: Activity },
];

const systemItems = [
  { title: "Cài đặt", url: "/settings", icon: Settings },
];

export function MedicalSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };
  
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground font-medium shadow-sm" 
      : "hover:bg-primary/10 hover:text-primary transition-colors";

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} border-r bg-card`}
      collapsible="icon"
    >
      <SidebarContent className="bg-card">
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="text-lg font-bold text-foreground">MedCare</h2>
                <p className="text-sm text-muted-foreground">Quản lý bệnh nhân</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Chức năng chính</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* System Settings */}
        <SidebarGroup>
          <SidebarGroupLabel>Hệ thống</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {systemItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Health Status Indicator */}
        {!collapsed && (
          <div className="mt-auto p-4">
            <div className="bg-gradient-success rounded-lg p-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-5 w-5" />
                <span className="font-medium">Hệ thống hoạt động</span>
              </div>
              <p className="text-sm opacity-90">Tất cả dịch vụ đang ổn định</p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}