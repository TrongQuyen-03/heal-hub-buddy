import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, FileText, Pill, Heart, Bell } from "lucide-react";

export default function PatientDashboard() {
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "BS. Nguyễn Văn Minh",
      specialty: "Tim mạch",
      date: "2024-01-15",
      time: "09:00",
      status: "confirmed"
    },
    {
      id: 2,
      doctor: "BS. Trần Thị Lan",
      specialty: "Nội tổng quát",
      date: "2024-01-20",
      time: "14:30", 
      status: "pending"
    }
  ];

  const recentPrescriptions = [
    {
      id: 1,
      medicine: "Aspirin 100mg",
      dosage: "1 viên/ngày",
      duration: "30 ngày",
      prescribedBy: "BS. Nguyễn Văn Minh",
      date: "2024-01-10"
    },
    {
      id: 2,
      medicine: "Metformin 500mg", 
      dosage: "2 viên/ngày",
      duration: "60 ngày",
      prescribedBy: "BS. Trần Thị Lan",
      date: "2024-01-08"
    }
  ];

  const healthMetrics = [
    { label: "Huyết áp", value: "120/80", unit: "mmHg", status: "normal" },
    { label: "Nhịp tim", value: "72", unit: "bpm", status: "normal" },
    { label: "Cân nặng", value: "65", unit: "kg", status: "normal" },
    { label: "Đường huyết", value: "95", unit: "mg/dL", status: "normal" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold gradient-text">Xin chào, Nguyễn Văn A</h1>
        <p className="text-muted-foreground mt-1">Chào mừng bạn quay trở lại với hệ thống quản lý sức khỏe</p>
      </div>

      {/* Health Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {healthMetrics.map((metric, index) => (
          <Card key={index} className="medical-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-2xl font-bold">
                    {metric.value}
                    <span className="text-sm font-normal text-muted-foreground ml-1">
                      {metric.unit}
                    </span>
                  </p>
                </div>
                <Heart className="w-8 h-8 text-primary/60" />
              </div>
              <Badge variant={metric.status === 'normal' ? 'default' : 'destructive'} className="mt-2">
                Bình thường
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <Card className="medical-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Lịch hẹn sắp tới
                </CardTitle>
                <CardDescription>Các cuộc hẹn trong tuần này</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Xem tất cả
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">{appointment.doctor}</p>
                    <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {appointment.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {appointment.time}
                      </span>
                    </div>
                  </div>
                  <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                    {appointment.status === 'confirmed' ? 'Đã xác nhận' : 'Chờ xác nhận'}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Prescriptions */}
        <Card className="medical-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Pill className="w-5 h-5" />
                  Đơn thuốc gần đây
                </CardTitle>
                <CardDescription>Thuốc đang sử dụng</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Xem tất cả
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPrescriptions.map((prescription) => (
              <div key={prescription.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{prescription.medicine}</p>
                      <p className="text-sm text-muted-foreground">
                        {prescription.dosage} • {prescription.duration}
                      </p>
                    </div>
                    <Badge variant="outline">
                      Đang dùng
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Kê bởi: {prescription.prescribedBy} • {prescription.date}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="medical-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Thao tác nhanh
          </CardTitle>
          <CardDescription>Các chức năng thường dùng</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="h-16 flex flex-col gap-2" variant="outline">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Đặt lịch hẹn</span>
            </Button>
            <Button className="h-16 flex flex-col gap-2" variant="outline">
              <FileText className="w-5 h-5" />
              <span className="text-sm">Xem hồ sơ</span>
            </Button>
            <Button className="h-16 flex flex-col gap-2" variant="outline">
              <Pill className="w-5 h-5" />
              <span className="text-sm">Đơn thuốc</span>
            </Button>
            <Button className="h-16 flex flex-col gap-2" variant="outline">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Theo dõi sức khỏe</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}