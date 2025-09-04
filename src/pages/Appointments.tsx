import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Plus, Filter, Search } from "lucide-react";

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const appointments = [
    {
      id: 1,
      time: "08:00",
      patient: "Nguyễn Văn A",
      type: "Khám tổng quát",
      doctor: "BS. Trần Thị B",
      status: "confirmed",
      duration: "30 phút"
    },
    {
      id: 2,
      time: "09:00",
      patient: "Lê Thị C",
      type: "Tái khám",
      doctor: "BS. Nguyễn Văn D",
      status: "waiting",
      duration: "20 phút"
    },
    {
      id: 3,
      time: "10:30",
      patient: "Phạm Văn E",
      type: "Chuyên khoa tim",
      doctor: "BS. Hoàng Thị F",
      status: "completed",
      duration: "45 phút"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-success text-success-foreground">Đã xác nhận</Badge>;
      case "waiting":
        return <Badge className="bg-warning text-warning-foreground">Đang chờ</Badge>;
      case "completed":
        return <Badge className="bg-info text-info-foreground">Hoàn thành</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Đã hủy</Badge>;
      default:
        return <Badge variant="outline">Chờ xác nhận</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quản lý lịch hẹn</h1>
          <p className="text-muted-foreground">Lên lịch và theo dõi các cuộc hẹn khám</p>
        </div>
        <Button className="bg-gradient-primary">
          <Plus className="h-4 w-4 mr-2" />
          Đặt lịch hẹn mới
        </Button>
      </div>

      {/* Date Selector & Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border rounded-md bg-background"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Bộ lọc
            </Button>
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Tìm kiếm
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Appointments List */}
      <Card>
        <CardHeader>
          <CardTitle>Lịch hẹn ngày {new Date(selectedDate).toLocaleDateString('vi-VN')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div 
                key={appointment.id}
                className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-card transition-all duration-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{appointment.time}</div>
                    <div className="text-xs text-muted-foreground">{appointment.duration}</div>
                  </div>
                </div>
                
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      {appointment.patient}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {appointment.doctor}
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-foreground">{appointment.type}</p>
                    <p className="text-sm text-muted-foreground">Khám bệnh</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {getStatusBadge(appointment.status)}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Chi tiết
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Clock className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {appointments.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                Không có lịch hẹn
              </h3>
              <p className="text-muted-foreground mb-4">
                Chưa có lịch hẹn nào cho ngày này
              </p>
              <Button className="bg-gradient-primary">
                <Plus className="h-4 w-4 mr-2" />
                Đặt lịch hẹn mới
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}