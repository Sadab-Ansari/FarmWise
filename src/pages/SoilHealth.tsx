import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { StatCard } from "@/components/ui/stat-card";
import {
  Sprout,
  Droplets,
  Thermometer,
  Zap,
  TestTube,
  Beaker,
  Leaf,
  TrendingUp,
} from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from "recharts";

// Mock soil health data
const soilOverview = [
  {
    title: "Soil pH Level",
    value: "6.8",
    subtitle: "Optimal range",
    icon: TestTube,
    trend: { value: 5, isPositive: true },
  },
  {
    title: "Moisture Content",
    value: "65%",
    subtitle: "Well hydrated",
    icon: Droplets,
    trend: { value: 12, isPositive: true },
  },
  {
    title: "Soil Temperature",
    value: "24°C",
    subtitle: "Perfect for crops",
    icon: Thermometer,
    trend: { value: 3, isPositive: true },
  },
  {
    title: "Organic Matter",
    value: "3.2%",
    subtitle: "Rich in nutrients",
    icon: Leaf,
    trend: { value: 8, isPositive: true },
  },
];

const nutrientLevels = [
  { name: "Nitrogen (N)", value: 85, optimal: 80, status: "excellent" },
  { name: "Phosphorus (P)", value: 72, optimal: 75, status: "good" },
  { name: "Potassium (K)", value: 68, optimal: 70, status: "good" },
  { name: "Calcium (Ca)", value: 90, optimal: 85, status: "excellent" },
  { name: "Magnesium (Mg)", value: 55, optimal: 60, status: "moderate" },
  { name: "Sulfur (S)", value: 45, optimal: 50, status: "low" },
];

const soilHealthHistory = [
  { month: "Jan", ph: 6.5, moisture: 58, organic: 2.8 },
  { month: "Feb", ph: 6.6, moisture: 62, organic: 2.9 },
  { month: "Mar", ph: 6.7, moisture: 65, organic: 3.0 },
  { month: "Apr", ph: 6.8, moisture: 68, organic: 3.1 },
  { month: "May", ph: 6.8, moisture: 65, organic: 3.2 },
  { month: "Jun", ph: 6.8, moisture: 65, organic: 3.2 },
];

const soilHealthScore = [
  { name: "Overall Health", value: 87, fill: "#0D7377" }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "excellent": return "text-success";
    case "good": return "text-primary";
    case "moderate": return "text-warning";
    case "low": return "text-destructive";
    default: return "text-muted-foreground";
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "excellent": return "bg-success/10 text-success border-success/20";
    case "good": return "bg-primary/10 text-primary border-primary/20";
    case "moderate": return "bg-warning/10 text-warning border-warning/20";
    case "low": return "bg-destructive/10 text-destructive border-destructive/20";
    default: return "bg-muted text-muted-foreground";
  }
};

const recommendations = [
  {
    title: "Add Organic Compost",
    description: "Increase organic matter by 0.3% with well-composted manure",
    priority: "High",
    icon: Sprout,
  },
  {
    title: "Sulfur Supplement",
    description: "Apply elemental sulfur to improve sulfur levels",
    priority: "Medium",
    icon: Beaker,
  },
  {
    title: "Maintain Moisture",
    description: "Current moisture levels are optimal, continue irrigation schedule",
    priority: "Low",
    icon: Droplets,
  },
];

export default function SoilHealth() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Soil Health Analysis
          </h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive soil analysis and nutrition recommendations for optimal crop growth.
          </p>
        </div>
        <Badge variant="outline" className="gap-2">
          <TestTube className="h-4 w-4" />
          Last updated: 2 hours ago
        </Badge>
      </div>

      {/* Soil Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {soilOverview.map((stat, index) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Soil Health Score */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Soil Health Score
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={200}>
              <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" data={soilHealthScore}>
                <RadialBar
                  dataKey="value"
                  cornerRadius={10}
                  fill="#0D7377"
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute text-center">
              <div className="text-3xl font-bold text-primary">87</div>
              <div className="text-sm text-muted-foreground">Excellent</div>
            </div>
          </CardContent>
        </Card>

        {/* Nutrient Levels */}
        <Card className="glass-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Nutrient Levels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {nutrientLevels.map((nutrient, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{nutrient.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {nutrient.value}% / {nutrient.optimal}%
                      </span>
                      <Badge variant="outline" className={getStatusBadge(nutrient.status)}>
                        {nutrient.status}
                      </Badge>
                    </div>
                  </div>
                  <Progress 
                    value={nutrient.value} 
                    className="h-2"
                    // Use different colors based on status
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Soil History Trends */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TestTube className="h-5 w-5 text-primary" />
              Soil Trends (6 Months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={soilHealthHistory}>
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
                  dataKey="ph"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  name="pH Level"
                />
                <Line
                  type="monotone"
                  dataKey="moisture"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  name="Moisture %"
                />
                <Line
                  type="monotone"
                  dataKey="organic"
                  stroke="#329F5B"
                  strokeWidth={2}
                  name="Organic Matter %"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4 bg-surface-elevated rounded-lg hover-lift">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <rec.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{rec.title}</h4>
                        <Badge
                          variant="outline"
                          className={
                            rec.priority === "High"
                              ? "bg-destructive/10 text-destructive border-destructive/20"
                              : rec.priority === "Medium"
                              ? "bg-warning/10 text-warning border-warning/20"
                              : "bg-success/10 text-success border-success/20"
                          }
                        >
                          {rec.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                    </div>
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