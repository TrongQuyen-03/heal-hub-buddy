import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Clock, Users, Star, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container text-center">
          <Badge variant="secondary" className="mb-6">
            Hệ thống quản lý y tế hiện đại
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            MedicalHope
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nền tảng quản lý sức khỏe toàn diện, kết nối bệnh nhân và bác sĩ 
            một cách hiệu quả và an toàn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <NavLink to="/register">Đăng ký ngay</NavLink>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <NavLink to="/about">Tìm hiểu thêm</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Tính năng nổi bật</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hệ thống được thiết kế để mang lại trải nghiệm tốt nhất cho cả bệnh nhân và nhân viên y tế
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Quản lý hồ sơ sức khỏe</CardTitle>
                <CardDescription>
                  Lưu trữ và quản lý hồ sơ bệnh án điện tử một cách an toàn và tiện lợi
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Đặt lịch hẹn online</CardTitle>
                <CardDescription>
                  Đặt lịch khám bệnh trực tuyến nhanh chóng, tiết kiệm thời gian
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Bảo mật cao</CardTitle>
                <CardDescription>
                  Thông tin được mã hóa và bảo vệ theo tiêu chuẩn y tế quốc tế
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Kết nối bác sĩ</CardTitle>
                <CardDescription>
                  Kết nối trực tiếp với đội ngũ bác sĩ chuyên nghiệp
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Theo dõi sức khỏe</CardTitle>
                <CardDescription>
                  Theo dõi các chỉ số sức khỏe và nhận thông báo nhắc nhở
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Hỗ trợ 24/7</CardTitle>
                <CardDescription>
                  Đội ngũ hỗ trợ sẵn sàng phục vụ 24/7 cho mọi thắc mắc
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">Bệnh nhân tin tưởng</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Bác sĩ chuyên nghiệp</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Chuyên khoa</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Độ hài lòng</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn người dùng đã tin tưởng MedicalHope 
            để quản lý sức khỏe của họ
          </p>
          <Button size="lg" asChild>
            <NavLink to="/register">Đăng ký miễn phí</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
}