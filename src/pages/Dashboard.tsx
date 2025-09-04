import { DashboardCards, RecentActivityCard } from "@/components/dashboard-cards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Clock,
  User,
  Stethoscope
} from "lucide-react";

export default function Dashboard() {
  const upcomingAppointments = [
    {
      id: 1,
      patient: "Nguyễn Văn A",
      time: "09:00",
      type: "Khám tổng quát",
      status: "confirmed",
      avatar: "A"
    },
    {
      id: 2,
      patient: "Trần Thị B",
      time: "10:30",
      type: "Tái khám",
      status: "waiting",
      avatar: "B"
    },
    {
      id: 3,
      patient: "Lê Văn C",
      time: "14:00",
      type: "Chuyên khoa tim",
      status: "confirmed",
      avatar: "C"
    },
    {
      id: 4,
      patient: "Phạm Thị D",
      time: "15:30",
      type: "Siêu âm",
      status: "pending",
      avatar: "D"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-success text-success-foreground">Đã xác nhận</Badge>;
      case "waiting":
        return <Badge className="bg-warning text-warning-foreground">Đang chờ</Badge>;
      case "pending":
        return <Badge variant="outline">Chờ xác nhận</Badge>;
      default:
        return <Badge variant="secondary">Khác</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard MedicalHope</h1>
          <p className="text-muted-foreground">Tổng quan hoạt động trung tâm y tế</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Bộ lọc
          </Button>
          <Button size="sm" className="bg-gradient-primary">
            <Plus className="h-4 w-4 mr-2" />
            Thêm bệnh nhân
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <DashboardCards />

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Upcoming Appointments */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Lịch hẹn hôm nay
                </CardTitle>
                <Button variant="ghost" size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Tìm kiếm
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div 
                    key={appointment.id}
                    className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-card transition-all duration-200"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                      {appointment.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-foreground">
                          {appointment.patient}
                        </h3>
                        {getStatusBadge(appointment.status)}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {appointment.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Stethoscope className="h-4 w-4" />
                          {appointment.type}
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" className="w-full">
                  Xem tất cả lịch hẹn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div>
          <RecentActivityCard />
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Thao tác nhanh</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <User className="h-6 w-6" />
              <span className="text-sm">Thêm bệnh nhân</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">Đặt lịch hẹn</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Stethoscope className="h-6 w-6" />
              <span className="text-sm">Khám bệnh</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Search className="h-6 w-6" />
              <span className="text-sm">Tìm kiếm</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}