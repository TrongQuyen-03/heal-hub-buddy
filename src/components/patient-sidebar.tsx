import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  User,
  Calendar,
  FileText,
  Pill,
  Heart,
  MessageSquare,
  Settings,
  LogOut,
  Activity,
  Clock,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const patientMenuItems = [
  {
    title: "Trang chủ",
    url: "/patient",
    icon: Activity,
  },
  {
    title: "Hồ sơ cá nhân", 
    url: "/patient/profile",
    icon: User,
  },
  {
    title: "Lịch hẹn",
    url: "/patient/appointments",
    icon: Calendar,
  },
  {
    title: "Hồ sơ bệnh án",
    url: "/patient/medical-records",
    icon: FileText,
  },
  {
    title: "Đơn thuốc",
    url: "/patient/prescriptions", 
    icon: Pill,
  },
  {
    title: "Theo dõi sức khỏe",
    url: "/patient/health-tracking",
    icon: Heart,
  },
  {
    title: "Tin nhắn",
    url: "/patient/messages",
    icon: MessageSquare,
  },
];

const settingsItems = [
  {
    title: "Cài đặt",
    url: "/patient/settings",
    icon: Settings,
  },
];

export function PatientSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const isMainGroupExpanded = patientMenuItems.some((item) => isActive(item.url));
  const isSettingsGroupExpanded = settingsItems.some((item) => isActive(item.url));

  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/10 text-primary border-r-2 border-primary font-medium" 
      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-card">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            {!collapsed && (
              <div>
                <p className="font-semibold text-sm">Nguyễn Văn A</p>
                <p className="text-xs text-muted-foreground">Bệnh nhân</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup className="px-0">
          <SidebarGroupLabel className="px-4 text-xs font-medium text-muted-foreground">
            Chức năng chính
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {patientMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-11">
                    <NavLink
                      to={item.url}
                      end
                      className={getNavClass}
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      {!collapsed && (
                        <span className="text-sm">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings */}
        <SidebarGroup className="px-0 mt-auto">
          <SidebarGroupLabel className="px-4 text-xs font-medium text-muted-foreground">
            Cài đặt
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-11">
                    <NavLink
                      to={item.url}
                      className={getNavClass}
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      {!collapsed && (
                        <span className="text-sm">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

            {/* Logout */}
            <SidebarMenuItem>
              <SidebarMenuButton className="h-11 text-destructive hover:bg-destructive/10">
                <LogOut className="w-4 h-4 flex-shrink-0" />
                {!collapsed && (
                  <span className="text-sm">Đăng xuất</span>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}