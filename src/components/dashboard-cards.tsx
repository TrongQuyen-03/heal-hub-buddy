import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  Activity, 
  TrendingUp,
  UserCheck,
  Clock,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease" | "neutral";
  icon: React.ReactNode;
  description?: string;
}

const StatCard = ({ title, value, change, changeType, icon, description }: StatCardProps) => {
  const getChangeColor = () => {
    switch (changeType) {
      case "increase":
        return "text-success";
      case "decrease":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className="transition-all duration-200 hover:shadow-medical hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="p-2 bg-primary/10 rounded-lg">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-medium ${getChangeColor()}`}>
            {change}
          </span>
          {description && (
            <span className="text-sm text-muted-foreground">{description}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export function DashboardCards() {
  const stats = [
    {
      title: "Tổng số bệnh nhân",
      value: "2,847",
      change: "+12%",
      changeType: "increase" as const,
      icon: <Users className="h-5 w-5 text-primary" />,
      description: "so với tháng trước"
    },
    {
      title: "Lịch hẹn hôm nay",
      value: "24",
      change: "+8%",
      changeType: "increase" as const,
      icon: <Calendar className="h-5 w-5 text-primary" />,
      description: "so với hôm qua"
    },
    {
      title: "Đang điều trị",
      value: "186",
      change: "-2%",
      changeType: "decrease" as const,
      icon: <Activity className="h-5 w-5 text-primary" />,
      description: "so với tuần trước"
    },
    {
      title: "Tỷ lệ khỏi bệnh",
      value: "94.2%",
      change: "+1.2%",
      changeType: "increase" as const,
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      description: "so với tháng trước"
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}

export function RecentActivityCard() {
  const activities = [
    {
      type: "appointment",
      title: "Lịch hẹn mới",
      description: "Nguyễn Văn A - Khám tổng quát",
      time: "10 phút trước",
      status: "scheduled",
      icon: <Calendar className="h-4 w-4" />
    },
    {
      type: "patient",
      title: "Bệnh nhân mới",
      description: "Trần Thị B - Đăng ký khám",
      time: "25 phút trước",
      status: "new",
      icon: <UserCheck className="h-4 w-4" />
    },
    {
      type: "treatment",
      title: "Hoàn thành điều trị",
      description: "Lê Văn C - Phục hồi chức năng",
      time: "1 giờ trước",
      status: "completed",
      icon: <CheckCircle className="h-4 w-4" />
    },
    {
      type: "alert",
      title: "Cảnh báo sức khỏe",
      description: "Phạm Thị D - Cần theo dõi",
      time: "2 giờ trước",
      status: "warning",
      icon: <AlertTriangle className="h-4 w-4" />
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge variant="secondary">Đã lên lịch</Badge>;
      case "new":
        return <Badge className="bg-info text-info-foreground">Mới</Badge>;
      case "completed":
        return <Badge className="bg-success text-success-foreground">Hoàn thành</Badge>;
      case "warning":
        return <Badge className="bg-warning text-warning-foreground">Cảnh báo</Badge>;
      default:
        return <Badge variant="outline">Khác</Badge>;
    }
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Hoạt động gần đây
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="p-2 bg-primary/10 rounded-md">
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-medium text-foreground">
                  {activity.title}
                </h4>
                {getStatusBadge(activity.status)}
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                {activity.description}
              </p>
              <p className="text-xs text-muted-foreground">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}