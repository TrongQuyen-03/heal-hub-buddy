import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  Filter,
  Plus,
  MoreVertical,
  User,
  Phone,
  Calendar,
  MapPin,
  Eye,
  Edit,
  Trash2
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  phone: string;
  address: string;
  lastVisit: string;
  status: "active" | "inactive" | "emergency";
  avatar: string;
}

export default function Patients() {
  const [searchQuery, setSearchQuery] = useState("");

  const patients: Patient[] = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      age: 45,
      gender: "Nam",
      phone: "0123456789",
      address: "Hà Nội",
      lastVisit: "2024-01-15",
      status: "active",
      avatar: "A"
    },
    {
      id: 2,
      name: "Trần Thị B",
      age: 32,
      gender: "Nữ",
      phone: "0987654321",
      address: "TP.HCM",
      lastVisit: "2024-01-10",
      status: "active",
      avatar: "B"
    },
    {
      id: 3,
      name: "Lê Văn C",
      age: 67,
      gender: "Nam",
      phone: "0456789123",
      address: "Đà Nẵng",
      lastVisit: "2024-01-12",
      status: "emergency",
      avatar: "C"
    },
    {
      id: 4,
      name: "Phạm Thị D",
      age: 28,
      gender: "Nữ",
      phone: "0789123456",
      address: "Cần Thơ",
      lastVisit: "2023-12-20",
      status: "inactive",
      avatar: "D"
    },
    {
      id: 5,
      name: "Hoàng Văn E",
      age: 55,
      gender: "Nam",
      phone: "0321654987",
      address: "Hải Phòng",
      lastVisit: "2024-01-14",
      status: "active",
      avatar: "E"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-success text-success-foreground">Đang điều trị</Badge>;
      case "inactive":
        return <Badge variant="outline">Không hoạt động</Badge>;
      case "emergency":
        return <Badge className="bg-destructive text-destructive-foreground">Khẩn cấp</Badge>;
      default:
        return <Badge variant="secondary">Khác</Badge>;
    }
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.phone.includes(searchQuery)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quản lý bệnh nhân</h1>
          <p className="text-muted-foreground">Danh sách và thông tin chi tiết bệnh nhân</p>
        </div>
        <Button className="bg-gradient-primary">
          <Plus className="h-4 w-4 mr-2" />
          Thêm bệnh nhân mới
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm theo tên hoặc số điện thoại..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Bộ lọc
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Patient List */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách bệnh nhân ({filteredPatients.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPatients.map((patient) => (
              <div 
                key={patient.id}
                className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-card transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {patient.avatar}
                </div>
                
                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      {patient.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {patient.age} tuổi • {patient.gender}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    {patient.phone}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {patient.address}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {patient.lastVisit}
                    </div>
                    {getStatusBadge(patient.status)}
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      Xem chi tiết
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Chỉnh sửa
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Calendar className="h-4 w-4 mr-2" />
                      Đặt lịch hẹn
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Xóa
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>

          {filteredPatients.length === 0 && (
            <div className="text-center py-12">
              <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                Không tìm thấy bệnh nhân
              </h3>
              <p className="text-muted-foreground mb-4">
                Thử thay đổi từ khóa tìm kiếm hoặc thêm bệnh nhân mới
              </p>
              <Button className="bg-gradient-primary">
                <Plus className="h-4 w-4 mr-2" />
                Thêm bệnh nhân mới
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}