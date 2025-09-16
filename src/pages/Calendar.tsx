import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import {
  Calendar as CalendarIcon,
  Clock,
  Sprout,
  Droplets,
  Plus,
  Filter,
} from "lucide-react";

// Mock calendar data
const calendarStats = [
  {
    title: "Upcoming Tasks",
    value: "8",
    subtitle: "This week",
    icon: Clock,
    trend: { value: 3, isPositive: true },
  },
  {
    title: "Active Crops",
    value: "12",
    subtitle: "Different varieties",
    icon: Sprout,
    trend: { value: 15, isPositive: true },
  },
  {
    title: "Irrigation Due",
    value: "3 fields",
    subtitle: "Next 2 days",
    icon: Droplets,
    trend: { value: 0, isPositive: true },
  },
  {
    title: "Harvest Ready",
    value: "2 crops",
    subtitle: "Optimal timing",
    icon: CalendarIcon,
    trend: { value: 25, isPositive: true },
  },
];

const tasks = [
  {
    id: 1,
    title: "Rice Harvest - Field A",
    date: "2024-03-15",
    time: "06:00 AM",
    type: "harvest",
    priority: "high",
    field: "Field A",
    crop: "Rice",
  },
  {
    id: 2,
    title: "Irrigation - Field B & C",
    date: "2024-03-16",
    time: "07:30 AM",
    type: "irrigation",
    priority: "medium",
    field: "Field B, C",
    crop: "Wheat",
  },
  {
    id: 3,
    title: "Fertilizer Application",
    date: "2024-03-17",
    time: "08:00 AM",
    type: "fertilizer",
    priority: "medium",
    field: "Field D",
    crop: "Maize",
  },
  {
    id: 4,
    title: "Pest Inspection",
    date: "2024-03-18",
    time: "09:00 AM",
    type: "inspection",
    priority: "low",
    field: "All Fields",
    crop: "Multiple",
  },
  {
    id: 5,
    title: "Soil Testing",
    date: "2024-03-20",
    time: "10:00 AM",
    type: "testing",
    priority: "high",
    field: "Field E",
    crop: "Mustard",
  },
];

const cropSchedule = [
  {
    crop: "Wheat",
    field: "Field A",
    planted: "Nov 15, 2023",
    harvestDue: "Mar 15, 2024",
    progress: 95,
    status: "Ready for Harvest",
  },
  {
    crop: "Rice",
    field: "Field B",
    planted: "Jun 20, 2023",
    harvestDue: "Oct 20, 2024",
    progress: 60,
    status: "Growing",
  },
  {
    crop: "Maize",
    field: "Field C",
    planted: "Feb 10, 2024",
    harvestDue: "May 10, 2024",
    progress: 30,
    status: "Early Growth",
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "bg-destructive/10 text-destructive border-destructive/20";
    case "medium": return "bg-warning/10 text-warning border-warning/20";
    case "low": return "bg-success/10 text-success border-success/20";
    default: return "bg-muted text-muted-foreground";
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "harvest": return "🌾";
    case "irrigation": return "💧";
    case "fertilizer": return "🧪";
    case "inspection": return "🔍";
    case "testing": return "🧬";
    default: return "📋";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Ready for Harvest": return "text-success";
    case "Growing": return "text-primary";
    case "Early Growth": return "text-warning";
    default: return "text-muted-foreground";
  }
};

export default function Calendar() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Crop Calendar
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your farming schedule, track crop progress, and never miss important tasks.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="gradient-primary gap-2">
            <Plus className="h-4 w-4" />
            Add Task
          </Button>
        </div>
      </div>

      {/* Calendar Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {calendarStats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Tasks */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Upcoming Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 bg-surface-elevated rounded-lg hover-lift border border-border"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{getTypeIcon(task.type)}</div>
                      <div>
                        <h4 className="font-semibold">{task.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarIcon className="h-4 w-4" />
                          {task.date} at {task.time}
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={getPriorityColor(task.priority)}
                    >
                      {task.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">
                      Field: <span className="font-medium">{task.field}</span>
                    </span>
                    <span className="text-muted-foreground">
                      Crop: <span className="font-medium">{task.crop}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Crop Progress */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sprout className="h-5 w-5 text-primary" />
              Crop Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cropSchedule.map((crop, index) => (
                <div
                  key={index}
                  className="p-4 bg-surface-elevated rounded-lg hover-lift border border-border"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{crop.crop}</h4>
                      <span className="text-sm text-muted-foreground">
                        {crop.field}
                      </span>
                    </div>
                    <Badge
                      variant="outline"
                      className={`${getStatusColor(crop.status)} border-current`}
                    >
                      {crop.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Planted:</span>
                      <span className="font-medium">{crop.planted}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Harvest Due:</span>
                      <span className="font-medium">{crop.harvestDue}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{crop.progress}%</span>
                    </div>
                    <div className="w-full bg-surface rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${crop.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calendar View (Simplified) */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary" />
            March 2024 Calendar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-semibold text-sm p-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 2; // Start from March 1st
              const hasTask = [13, 14, 15, 16, 18].includes(day);
              
              return (
                <div
                  key={i}
                  className={`aspect-square p-2 text-center text-sm border border-border rounded-lg relative ${
                    day > 0 && day <= 31
                      ? "hover:bg-surface-elevated cursor-pointer"
                      : "text-muted-foreground"
                  } ${hasTask ? "bg-primary/10" : ""}`}
                >
                  {day > 0 && day <= 31 && (
                    <>
                      <span>{day}</span>
                      {hasTask && (
                        <div className="absolute bottom-1 right-1 w-2 h-2 bg-accent rounded-full" />
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}