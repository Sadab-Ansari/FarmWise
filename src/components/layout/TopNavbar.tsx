import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  Search,
  Bell,
  Sun,
  Moon,
  Monitor,
  Settings,
  LogOut,
  User,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";

interface TopNavbarProps {
  onMenuClick: () => void;
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const getIcon = () => {
    if (theme === "light") return <Sun className="h-5 w-5" />;
    if (theme === "dark") return <Moon className="h-5 w-5" />;
    return <Monitor className="h-5 w-5" />;
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="relative h-10 w-10 text-muted-foreground hover:text-foreground transition-colors"
    >
      {getIcon()}
    </Button>
  );
};

const NotificationBell = () => {
  const [hasNotifications, setHasNotifications] = useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-10 w-10 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Bell className="h-5 w-5" />
          {hasNotifications && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-xs text-white flex items-center justify-center">
              3
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 max-h-96 overflow-y-auto">
        <DropdownMenuLabel className="text-base font-semibold">Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-80 overflow-y-auto">
          <div className="p-3 hover:bg-surface-elevated cursor-pointer border-b border-border">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <Bell className="h-4 w-4 text-warning" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Weather Alert</p>
                <p className="text-xs text-muted-foreground mt-1">Heavy rain expected in Ranchi region tomorrow</p>
                <p className="text-xs text-muted-foreground mt-2">2 hours ago</p>
              </div>
            </div>
          </div>
          <div className="p-3 hover:bg-surface-elevated cursor-pointer border-b border-border">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <Bell className="h-4 w-4 text-success" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Soil Test Complete</p>
                <p className="text-xs text-muted-foreground mt-1">Your soil analysis results are ready</p>
                <p className="text-xs text-muted-foreground mt-2">5 hours ago</p>
              </div>
            </div>
          </div>
          <div className="p-3 hover:bg-surface-elevated cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Bell className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Community Reply</p>
                <p className="text-xs text-muted-foreground mt-1">Expert replied to your question about crop disease</p>
                <p className="text-xs text-muted-foreground mt-2">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="w-full text-center justify-center">
          View All Notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const UserProfile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/api/placeholder/40/40" alt="Farm Owner" />
            <AvatarFallback className="bg-gradient-accent text-white">FO</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Farm Owner</p>
            <p className="text-xs leading-none text-muted-foreground">
              farmer@farmwise.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const TopNavbar = ({ onMenuClick }: TopNavbarProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 gap-4">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden h-10 w-10"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo/Brand for mobile */}
        <div className="flex items-center space-x-2 lg:hidden">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">FW</span>
          </div>
          <span className="font-bold text-lg bg-gradient-hero bg-clip-text text-transparent">
            FarmWise
          </span>
        </div>

        {/* Search - moved to left */}
        <div className="relative w-64 max-w-sm hidden sm:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-10 h-10"
          />
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          {/* Mobile search */}
          <Button variant="ghost" size="icon" className="sm:hidden h-10 w-10">
            <Search className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <NotificationBell />
          <UserProfile />
        </div>
      </div>
    </header>
  );
};