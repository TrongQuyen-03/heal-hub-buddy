import { NavLink } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function PublicFooter() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">MH</span>
              </div>
              <span className="font-bold text-lg">MedicalHope</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Hệ thống quản lý y tế hiện đại, kết nối bệnh nhân và bác sĩ 
              một cách hiệu quả và an toàn.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4 text-primary" />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4 text-primary" />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <Instagram className="w-4 h-4 text-primary" />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <Youtube className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Liên kết nhanh</h3>
            <div className="space-y-2">
              <NavLink to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Trang chủ
              </NavLink>
              <NavLink to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Giới thiệu
              </NavLink>
              <NavLink to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Dịch vụ
              </NavLink>
              <NavLink to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Liên hệ
              </NavLink>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Dịch vụ</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Khám tổng quát</p>
              <p className="text-sm text-muted-foreground">Chuyên khoa</p>
              <p className="text-sm text-muted-foreground">Cấp cứu 24/7</p>
              <p className="text-sm text-muted-foreground">Tư vấn trực tuyến</p>
              <p className="text-sm text-muted-foreground">Xét nghiệm</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Thông tin liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  123 Đường ABC, Phường XYZ<br />
                  Quận 1, TP. Hồ Chí Minh
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">1900 1234</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">info@medicalhope.vn</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 MedicalHope. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Điều khoản sử dụng
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}