import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Eye, 
  Bone, 
  Baby, 
  Stethoscope,
  Pill,
  Activity,
  Shield,
  Calendar,
  FileText,
  MessageSquare
} from "lucide-react";

export default function Services() {
  const medicalServices = [
    {
      icon: Heart,
      title: "Tim mạch",
      description: "Chẩn đoán và điều trị các bệnh về tim mạch",
      features: ["Siêu âm tim", "Điện tim", "Holter 24h", "Thông tim"]
    },
    {
      icon: Brain,
      title: "Thần kinh",
      description: "Chẩn đoán và điều trị các bệnh về thần kinh",
      features: ["MRI não", "CT Scanner", "Điện não đồ", "Khám lâm sàng"]
    },
    {
      icon: Eye,
      title: "Mắt",
      description: "Khám và điều trị các bệnh về mắt",
      features: ["Khám tật khúc xạ", "Phẫu thuật", "Laser", "Đo nhãn áp"]
    },
    {
      icon: Bone,
      title: "Xương khớp",
      description: "Chẩn đoán và điều trị các bệnh về xương khớp",
      features: ["X-quang", "MRI", "Vật lý trị liệu", "Phẫu thuật"]
    },
    {
      icon: Baby,
      title: "Sản phụ khoa",
      description: "Chăm sóc sức khỏe phụ nữ và trẻ em",
      features: ["Siêu âm thai", "Xét nghiệm", "Tư vấn", "Sinh đẻ"]
    },
    {
      icon: Stethoscope,
      title: "Nội tổng quát",
      description: "Khám và điều trị các bệnh nội khoa",
      features: ["Khám lâm sàng", "Xét nghiệm", "Tư vấn", "Điều trị"]
    }
  ];

  const digitalServices = [
    {
      icon: Calendar,
      title: "Đặt lịch hẹn online",
      description: "Đặt lịch khám bệnh trực tuyến nhanh chóng và tiện lợi"
    },
    {
      icon: FileText,
      title: "Hồ sơ sức khỏe điện tử",
      description: "Quản lý hồ sơ bệnh án và lịch sử khám chữa bệnh"
    },
    {
      icon: Pill,
      title: "Quản lý đơn thuốc",
      description: "Theo dõi và quản lý đơn thuốc, nhắc nhở uống thuốc"
    },
    {
      icon: Activity,
      title: "Theo dõi sức khỏe",
      description: "Theo dõi các chỉ số sức khỏe và xu hướng sức khỏe"
    },
    {
      icon: MessageSquare,
      title: "Tư vấn trực tuyến",
      description: "Tư vấn sức khỏe từ xa với đội ngũ bác sĩ chuyên nghiệp"
    },
    {
      icon: Shield,
      title: "Bảo mật thông tin",
      description: "Đảm bảo an toàn và bảo mật thông tin cá nhân"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Dịch vụ y tế
          </Badge>
          <h1 className="text-4xl font-bold mb-6">Dịch vụ của chúng tôi</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MedicalHope cung cấp đầy đủ các dịch vụ y tế chất lượng cao, 
            từ khám chữa bệnh truyền thống đến các giải pháp số hóa hiện đại
          </p>
        </div>

        {/* Medical Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Chuyên khoa y tế</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-sm text-muted-foreground">Dịch vụ bao gồm:</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full mt-6">
                    Đặt lịch khám
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Digital Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Dịch vụ số</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tận dụng công nghệ hiện đại để mang đến trải nghiệm chăm sóc sức khỏe tốt nhất
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Bạn cần tư vấn thêm?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Đội ngũ chuyên viên của chúng tôi sẵn sàng tư vấn và hỗ trợ bạn 
            chọn lựa dịch vụ phù hợp nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Liên hệ tư vấn
            </Button>
            <Button size="lg" variant="outline">
              Xem bảng giá
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}