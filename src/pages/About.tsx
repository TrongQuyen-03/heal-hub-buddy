import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users, 
  Stethoscope,
  Award,
  Heart,
  Shield,
  Star
} from "lucide-react";

export default function About() {
  const services = [
    {
      name: "Khám tổng quát",
      description: "Khám sức khỏe định kỳ và tầm soát bệnh",
      icon: <Stethoscope className="h-6 w-6" />
    },
    {
      name: "Tim mạch",
      description: "Chuyên khoa tim mạch và huyết áp",
      icon: <Heart className="h-6 w-6" />
    },
    {
      name: "Nội khoa",
      description: "Điều trị các bệnh nội khoa",
      icon: <Shield className="h-6 w-6" />
    },
    {
      name: "Ngoại khoa",
      description: "Phẫu thuật và can thiệp y khoa",
      icon: <Award className="h-6 w-6" />
    }
  ];

  const doctors = [
    {
      name: "BS.CK2 Nguyễn Văn Minh",
      specialty: "Trưởng khoa Tim mạch",
      experience: "15 năm kinh nghiệm",
      rating: 4.9
    },
    {
      name: "BS.CK1 Trần Thị Hoa",
      specialty: "Bác sĩ Nội khoa",
      experience: "12 năm kinh nghiệm", 
      rating: 4.8
    },
    {
      name: "BS. Lê Văn Đức",
      specialty: "Bác sĩ Tổng quát",
      experience: "8 năm kinh nghiệm",
      rating: 4.7
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
          <Building2 className="h-10 w-10 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Trung tâm y tế MedicalHope</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cam kết mang đến dịch vụ chăm sóc sức khỏe chất lượng cao với công nghệ hiện đại và đội ngũ y bác sĩ giàu kinh nghiệm
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Thông tin liên hệ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Địa chỉ</h3>
                <p className="text-sm text-muted-foreground">
                  123 Đường Sức Khỏe<br />
                  Quận 1, TP. Hồ Chí Minh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Điện thoại</h3>
                <p className="text-sm text-muted-foreground">
                  Hotline: (028) 1234-5678<br />
                  Cấp cứu: (028) 8765-4321
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">
                  info@medicalhope.vn<br />
                  support@medicalhope.vn
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Giờ làm việc</h3>
                <p className="text-sm text-muted-foreground">
                  T2-T6: 7:00 - 20:00<br />
                  T7-CN: 8:00 - 17:00
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Services */}
      <Card>
        <CardHeader>
          <CardTitle>Dịch vụ y tế chuyên nghiệp</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center p-4 rounded-lg border hover:shadow-card transition-all duration-200">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {service.icon}
                </div>
                <h3 className="font-medium text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Medical Team */}
      <Card>
        <CardHeader>
          <CardTitle>Đội ngũ y bác sĩ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.map((doctor, index) => (
              <div key={index} className="text-center p-6 rounded-lg border hover:shadow-card transition-all duration-200">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{doctor.name}</h3>
                <p className="text-sm text-primary mb-2">{doctor.specialty}</p>
                <p className="text-sm text-muted-foreground mb-3">{doctor.experience}</p>
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{doctor.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Thành tích nổi bật</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-sm text-muted-foreground">Bệnh nhân đã khám</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Bác sĩ chuyên khoa</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Hài lòng của bệnh nhân</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <p className="text-sm text-muted-foreground">Năm phục vụ cộng đồng</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-primary text-white">
        <CardContent className="pt-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Đặt lịch khám ngay hôm nay</h2>
          <p className="mb-6 opacity-90">
            Liên hệ với chúng tôi để được tư vấn và đặt lịch khám với đội ngũ y bác sĩ chuyên nghiệp
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="secondary" size="lg">
              <Phone className="h-4 w-4 mr-2" />
              Gọi ngay: (028) 1234-5678
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Mail className="h-4 w-4 mr-2" />
              Gửi email
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}