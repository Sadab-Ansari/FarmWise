import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  CloudSun,
  Sprout,
  TrendingUp,
  ShoppingCart,
  Beaker,
  Stethoscope,
  Building,
  Calendar,
  MessageCircle,
  Menu,
  X,
  Sun,
  Moon,
  Monitor
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Weather Forecast", href: "/weather", icon: CloudSun },
  { name: "Soil Health", href: "/soil", icon: Sprout },
  { name: "Crop Recommendations", href: "/crops", icon: TrendingUp },
  { name: "Mandi Prices", href: "/mandi", icon: ShoppingCart },
  { name: "Fertilizer Planner", href: "/fertilizer", icon: Beaker },
  { name: "Disease Detection", href: "/disease", icon: Stethoscope },
  { name: "Government Schemes", href: "/schemes", icon: Building },
  { name: "Crop Calendar", href: "/calendar", icon: Calendar },
  { name: "AI Assistant", href: "/assistant", icon: MessageCircle },
];

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const getIcon = () => {
    if (theme === "light") return <Sun className="h-4 w-4" />;
    if (theme === "dark") return <Moon className="h-4 w-4" />;
    return <Monitor className="h-4 w-4" />;
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="w-9 h-9 text-muted-foreground hover:text-foreground transition-colors"
    >
      {getIcon()}
    </Button>
  );
};

interface SidebarProps {
  onClose?: () => void;
}

export const Sidebar = ({ onClose }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`${
        collapsed ? "w-16" : "w-64"
      } transition-all duration-300 bg-surface border-r border-border flex flex-col fixed left-0 top-0 h-full z-40`}
    >
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-hero bg-clip-text text-transparent">
              FarmWise
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="w-8 h-8"
        >
          {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={onClose} // Close sidebar on mobile when navigation item is clicked
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-primary"
                  : "hover:bg-surface-elevated text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-primary-foreground" : ""}`} />
              {!collapsed && (
                <span className="font-medium truncate">{item.name}</span>
              )}
              {!collapsed && isActive && (
                <div className="ml-auto w-2 h-2 bg-accent rounded-full glow-accent" />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Theme Toggle & User */}
      <div className="p-4 border-t border-border">
        <div className={`flex items-center ${collapsed ? "justify-center" : "justify-between"}`}>
          <ThemeToggle />
          {!collapsed && (
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-6 h-6 bg-gradient-accent rounded-full" />
              <span>Farm Owner</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};