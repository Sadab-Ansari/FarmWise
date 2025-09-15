import { StatCard } from "@/components/ui/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sprout,
  Thermometer,
  Droplets,
  TrendingUp,
  Calendar,
  AlertTriangle,
  CloudSun,
  BarChart3,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Mock data
const overviewStats = [
  {
    title: "Soil Health Score",
    value: "8.7/10",
    subtitle: "Excellent condition",
    icon: Sprout,
    trend: { value: 12, isPositive: true },
  },
  {
    title: "Today's Temperature",
    value: "28°C",
    subtitle: "Partly cloudy",
    icon: Thermometer,
    trend: { value: 2, isPositive: true },
  },
  {
    title: "Soil Moisture",
    value: "65%",
    subtitle: "Optimal level",
    icon: Droplets,
    trend: { value: 8, isPositive: true },
  },
  {
    title: "Expected Yield",
    value: "4.2 tons",
    subtitle: "This season",
    icon: TrendingUp,
    trend: { value: 15, isPositive: true },
  },
];

const yieldData = [
  { month: "Jan", yield: 3.2, optimal: 4.0 },
  { month: "Feb", yield: 3.5, optimal: 4.1 },
  { month: "Mar", yield: 3.8, optimal: 4.2 },
  { month: "Apr", yield: 4.1, optimal: 4.3 },
  { month: "May", yield: 4.3, optimal: 4.4 },
  { month: "Jun", yield: 4.2, optimal: 4.2 },
];

const cropDistribution = [
  { name: "Wheat", value: 40, color: "#0D7377" },
  { name: "Rice", value: 30, color: "#14FFEC" },
  { name: "Corn", value: 20, color: "#329F5B" },
  { name: "Barley", value: 10, color: "#F4A261" },
];

const recentActivities = [
  { action: "Fertilizer applied to Field A", time: "2 hours ago", icon: Sprout },
  { action: "Soil moisture check completed", time: "4 hours ago", icon: Droplets },
  { action: "Weather alert: Rain expected", time: "6 hours ago", icon: CloudSun },
  { action: "Disease scan on Crop B", time: "1 day ago", icon: AlertTriangle },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here's your farm's performance summary.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Schedule Task
          </Button>
          <Button className="gradient-primary gap-2">
            <BarChart3 className="h-4 w-4" />
            View Reports
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
            trend={stat.trend}
            className="animate-slide-in"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Yield Trends */}
        <Card className="glass-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Yield Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yieldData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="yield"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="optimal"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: "hsl(var(--accent))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Crop Distribution */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sprout className="h-5 w-5 text-primary" />
              Crop Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={cropDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {cropDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {cropDistribution.map((crop, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: crop.color }}
                  />
                  <span className="text-sm">{crop.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="glass-card lg:col-span-2 xl:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-surface-elevated rounded-lg hover-lift"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <activity.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}