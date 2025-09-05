import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Users,
  Headphones
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Liên hệ
          </Badge>
          <h1 className="text-4xl font-bold mb-6">Liên hệ với chúng tôi</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. 
            Hãy liên hệ với chúng tôi qua các kênh dưới đây
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Gửi tin nhắn
                </CardTitle>
                <CardDescription>
                  Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Họ</Label>
                    <Input id="firstName" placeholder="Nhập họ của bạn" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Tên</Label>
                    <Input id="lastName" placeholder="Nhập tên của bạn" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input id="phone" placeholder="0123 456 789" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Chủ đề</Label>
                  <Input id="subject" placeholder="Chủ đề tin nhắn" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Nội dung</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Nhập nội dung tin nhắn của bạn..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  Gửi tin nhắn
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Địa chỉ</CardTitle>
                      <CardDescription>Trụ sở chính</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    123 Đường ABC, Phường XYZ<br />
                    Quận 1, TP. Hồ Chí Minh<br />
                    Việt Nam
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Điện thoại</CardTitle>
                      <CardDescription>Hotline hỗ trợ</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Hotline: <span className="font-medium">1900 1234</span><br />
                    Cấp cứu: <span className="font-medium">1900 5678</span><br />
                    Tổng đài: <span className="font-medium">(028) 1234 5678</span>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Email</CardTitle>
                      <CardDescription>Liên hệ trực tuyến</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Hỗ trợ: <span className="font-medium">support@medicalhope.vn</span><br />
                    Tư vấn: <span className="font-medium">info@medicalhope.vn</span><br />
                    Khiếu nại: <span className="font-medium">feedback@medicalhope.vn</span>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Giờ làm việc</CardTitle>
                      <CardDescription>Thời gian phục vụ</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-1">
                    <p><span className="font-medium">Thứ 2 - Thứ 6:</span> 7:00 - 18:00</p>
                    <p><span className="font-medium">Thứ 7:</span> 7:00 - 12:00</p>
                    <p><span className="font-medium">Chủ nhật:</span> Nghỉ</p>
                    <p className="text-primary font-medium mt-2">Cấp cứu 24/7</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Services */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="w-5 h-5" />
                  Hỗ trợ khác
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Tư vấn trực tuyến</p>
                    <p className="text-xs text-muted-foreground">Chat với bác sĩ 24/7</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Zalo/Messenger</p>
                    <p className="text-xs text-muted-foreground">Hỗ trợ qua mạng xã hội</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Xem tất cả kênh hỗ trợ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Vị trí trên bản đồ</CardTitle>
              <CardDescription>
                Tìm đường đến trung tâm y tế MedicalHope
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Bản đồ sẽ được tích hợp tại đây</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    (Google Maps hoặc OpenStreetMap)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}