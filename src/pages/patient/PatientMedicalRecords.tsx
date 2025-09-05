import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Eye, Upload, Search, Filter, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PatientMedicalRecords() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const medicalRecords = [
    {
      id: 1,
      title: "Kết quả xét nghiệm máu",
      type: "lab_result",
      date: "2024-01-10",
      doctor: "BS. Nguyễn Văn Minh",
      specialty: "Tim mạch",
      fileSize: "2.4 MB",
      fileType: "PDF",
      status: "completed"
    },
    {
      id: 2,
      title: "Chụp X-quang phổi",
      type: "imaging",
      date: "2024-01-08",
      doctor: "BS. Trần Thị Lan",
      specialty: "Hô hấp",
      fileSize: "5.2 MB",
      fileType: "DICOM",
      status: "completed"
    },
    {
      id: 3,
      title: "Đơn thuốc điều trị tim mạch",
      type: "prescription",
      date: "2024-01-05",
      doctor: "BS. Nguyễn Văn Minh",
      specialty: "Tim mạch",
      fileSize: "1.2 MB",
      fileType: "PDF",
      status: "active"
    },
    {
      id: 4,
      title: "Báo cáo siêu âm tim",
      type: "imaging",
      date: "2024-01-03",
      doctor: "BS. Lê Văn Cường",
      specialty: "Tim mạch",
      fileSize: "8.7 MB",
      fileType: "PDF",
      status: "completed"
    },
    {
      id: 5,
      title: "Kết quả điện tim",
      type: "lab_result",
      date: "2024-01-01",
      doctor: "BS. Nguyễn Văn Minh",
      specialty: "Tim mạch",
      fileSize: "3.1 MB",
      fileType: "PDF",
      status: "completed"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'lab_result': return 'default';
      case 'imaging': return 'secondary';
      case 'prescription': return 'outline';
      case 'report': return 'destructive';
      default: return 'secondary';
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'lab_result': return 'Kết quả xét nghiệm';
      case 'imaging': return 'Hình ảnh y khoa';
      case 'prescription': return 'Đơn thuốc';
      case 'report': return 'Báo cáo';
      default: return type;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'default';
      case 'active': return 'secondary';
      case 'pending': return 'outline';
      default: return 'secondary';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Hoàn thành';
      case 'active': return 'Đang hiệu lực';
      case 'pending': return 'Chờ xử lý';
      default: return status;
    }
  };

  const filteredRecords = medicalRecords.filter(record => {
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || record.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Hồ sơ bệnh án</h1>
          <p className="text-muted-foreground mt-1">Quản lý và xem các tài liệu y tế của bạn</p>
        </div>
        <Button className="flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Tải lên tài liệu
        </Button>
      </div>

      {/* Search and Filter */}
      <Card className="medical-card">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm theo tên tài liệu hoặc bác sĩ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả loại</SelectItem>
                <SelectItem value="lab_result">Kết quả xét nghiệm</SelectItem>
                <SelectItem value="imaging">Hình ảnh y khoa</SelectItem>
                <SelectItem value="prescription">Đơn thuốc</SelectItem>
                <SelectItem value="report">Báo cáo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="medical-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Tổng tài liệu</p>
                <p className="text-2xl font-bold">{medicalRecords.length}</p>
              </div>
              <FileText className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>
        <Card className="medical-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Kết quả XN</p>
                <p className="text-2xl font-bold">
                  {medicalRecords.filter(r => r.type === 'lab_result').length}
                </p>
              </div>
              <FileText className="w-8 h-8 text-blue-500/60" />
            </div>
          </CardContent>
        </Card>
        <Card className="medical-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Hình ảnh</p>
                <p className="text-2xl font-bold">
                  {medicalRecords.filter(r => r.type === 'imaging').length}
                </p>
              </div>
              <FileText className="w-8 h-8 text-green-500/60" />
            </div>
          </CardContent>
        </Card>
        <Card className="medical-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Đơn thuốc</p>
                <p className="text-2xl font-bold">
                  {medicalRecords.filter(r => r.type === 'prescription').length}
                </p>
              </div>
              <FileText className="w-8 h-8 text-orange-500/60" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Records List */}
      <div className="grid gap-4">
        {filteredRecords.map((record) => (
          <Card key={record.id} className="medical-card hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        {record.title}
                      </h3>
                      <p className="text-muted-foreground">{record.doctor} • {record.specialty}</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={getTypeColor(record.type)}>
                        {getTypeText(record.type)}
                      </Badge>
                      <Badge variant={getStatusColor(record.status)}>
                        {getStatusText(record.status)}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{record.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>{record.fileType} • {record.fileSize}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Xem
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Tải xuống
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredRecords.length === 0 && (
        <Card className="medical-card">
          <CardContent className="p-8 text-center">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Không tìm thấy hồ sơ bệnh án nào phù hợp</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}