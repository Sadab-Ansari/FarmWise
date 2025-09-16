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
  RefreshCcw,
  Layers,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Weather Forecast", href: "/weather", icon: CloudSun },
  { name: "Soil Health", href: "/soil", icon: Sprout },
  { name: "Soil Restoration", href: "/soil-restoration", icon: RefreshCcw },
  { name: "Crop Recommendations", href: "/crops", icon: TrendingUp },
  { name: "Hybrid Crops", href: "/hybrid-crops", icon: Layers },
  { name: "Mandi Prices", href: "/mandi", icon: ShoppingCart },
  { name: "Fertilizer Planner", href: "/fertilizer", icon: Beaker },
  { name: "Disease Detection", href: "/disease", icon: Stethoscope },
  { name: "Government Schemes", href: "/schemes", icon: Building },
  { name: "Crop Calendar", href: "/calendar", icon: Calendar },
  { name: "Farmer Community", href: "/community", icon: Users },
  { name: "AI Assistant", href: "/assistant", icon: MessageCircle },
];

interface SidebarProps {
  onClose?: () => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const Sidebar = ({ onClose, collapsed = false, onToggleCollapse }: SidebarProps) => {
  const location = useLocation();

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } transition-all duration-300 bg-surface border-r border-border flex flex-col fixed left-0 top-0 h-full z-40`}
    >
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-hero bg-clip-text text-transparent">
              FarmWise
            </span>
          </div>
        )}
        
        {/* Desktop collapse toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleCollapse}
          className="hidden lg:flex w-8 h-8 hover:bg-surface-elevated"
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
        
        {/* Mobile close button */}
        {!collapsed && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden w-8 h-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => {
                // Always close sidebar on mobile when clicking a navigation item
                if (window.innerWidth < 1024) {
                  onClose?.();
                }
              }}
              className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-primary"
                  : "hover:bg-surface-elevated text-muted-foreground hover:text-foreground"
              }`}
              title={collapsed ? item.name : undefined}
            >
              <Icon className={`h-6 w-6 flex-shrink-0 ${
                isActive ? "text-primary-foreground" : ""
              }`} />
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
    </aside>
  );
};