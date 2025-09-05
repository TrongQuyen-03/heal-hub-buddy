import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function PublicHeader() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MH</span>
            </div>
            <span className="font-bold text-lg">MedicalHope</span>
          </NavLink>
          
          <nav className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`
              }
            >
              Trang chủ
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`
              }
            >
              Giới thiệu
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`
              }
            >
              Dịch vụ
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`
              }
            >
              Liên hệ
            </NavLink>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild>
            <NavLink to="/login">Đăng nhập</NavLink>
          </Button>
          <Button asChild>
            <NavLink to="/register">Đăng ký</NavLink>
          </Button>
        </div>
      </div>
    </header>
  );
}