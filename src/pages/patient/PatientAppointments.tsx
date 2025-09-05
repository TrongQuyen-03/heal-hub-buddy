import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, User, Plus, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function PatientAppointments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const appointments = [
    {
      id: 1,
      doctor: "BS. Nguyễn Văn Minh",
      specialty: "Tim mạch",
      date: "2024-01-15",
      time: "09:00",
      status: "confirmed",
      location: "Phòng 205, Tầng 2",
      notes: "Khám định kỳ tim mạch",
      phone: "0123456789"
    },
    {
      id: 2,
      doctor: "BS. Trần Thị Lan",
      specialty: "Nội tổng quát",
      date: "2024-01-20",
      time: "14:30",
      status: "pending",
      location: "Phòng 301, Tầng 3", 
      notes: "Tái khám sau điều trị",
      phone: "0123456788"
    },
    {
      id: 3,
      doctor: "BS. Lê Văn Cường",
      specialty: "Ngoại khoa",
      date: "2024-01-25",
      time: "10:15",
      status: "cancelled",
      location: "Phòng 150, Tầng 1",
      notes: "Tư vấn phẫu thuật",
      phone: "0123456787"
    },
    {
      id: 4,
      doctor: "BS. Phạm Thị Mai",
      specialty: "Da liễu",
      date: "2024-01-12",
      time: "16:00",
      status: "completed",
      location: "Phòng 405, Tầng 4",
      notes: "Khám da, điều trị mụn",
      phone: "0123456786"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'default';
      case 'pending': return 'secondary';
      case 'cancelled': return 'destructive';
      case 'completed': return 'outline';
      default: return 'secondary';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Đã xác nhận';
      case 'pending': return 'Chờ xác nhận';
      case 'cancelled': return 'Đã hủy';
      case 'completed': return 'Hoàn thành';
      default: return status;
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Lịch hẹn khám</h1>
          <p className="text-muted-foreground mt-1">Quản lý các cuộc hẹn khám bệnh của bạn</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Đặt lịch hẹn mới
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Đặt lịch hẹn mới</DialogTitle>
              <DialogDescription>
                Vui lòng điền thông tin để đặt lịch hẹn với bác sĩ
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Chuyên khoa</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn chuyên khoa" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardiology">Tim mạch</SelectItem>
                      <SelectItem value="internal">Nội tổng quát</SelectItem>
                      <SelectItem value="surgery">Ngoại khoa</SelectItem>
                      <SelectItem value="dermatology">Da liễu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Bác sĩ</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn bác sĩ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="doctor1">BS. Nguyễn Văn Minh</SelectItem>
                      <SelectItem value="doctor2">BS. Trần Thị Lan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Ngày khám</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Giờ khám</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn giờ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                      <SelectItem value="15:00">15:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Ghi chú</Label>
                <Textarea placeholder="Mô tả triệu chứng hoặc lý do khám..." />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Hủy</Button>
                <Button>Đặt lịch hẹn</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filter */}
      <Card className="medical-card">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm theo bác sĩ hoặc chuyên khoa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                <SelectItem value="confirmed">Đã xác nhận</SelectItem>
                <SelectItem value="pending">Chờ xác nhận</SelectItem>
                <SelectItem value="completed">Hoàn thành</SelectItem>
                <SelectItem value="cancelled">Đã hủy</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Appointments List */}
      <div className="grid gap-4">
        {filteredAppointments.map((appointment) => (
          <Card key={appointment.id} className="medical-card hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" />
                        {appointment.doctor}
                      </h3>
                      <p className="text-muted-foreground">{appointment.specialty}</p>
                    </div>
                    <Badge variant={getStatusColor(appointment.status)}>
                      {getStatusText(appointment.status)}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{appointment.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{appointment.location}</span>
                    </div>
                  </div>

                  {appointment.notes && (
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm"><strong>Ghi chú:</strong> {appointment.notes}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {appointment.status === 'confirmed' && (
                      <>
                        <Button size="sm" variant="outline">
                          Xem chi tiết
                        </Button>
                        <Button size="sm" variant="outline">
                          Hủy lịch hẹn
                        </Button>
                      </>
                    )}
                    {appointment.status === 'pending' && (
                      <Button size="sm" variant="outline">
                        Chỉnh sửa
                      </Button>
                    )}
                    {appointment.status === 'completed' && (
                      <Button size="sm" variant="outline">
                        Xem kết quả
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAppointments.length === 0 && (
        <Card className="medical-card">
          <CardContent className="p-8 text-center">
            <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Không tìm thấy lịch hẹn nào phù hợp</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}