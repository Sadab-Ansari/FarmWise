import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  RefreshCcw,
  Sprout,
  Clock,
  Target,
  TrendingUp,
  Leaf,
  TestTube,
  CheckCircle,
  Calendar,
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
  RadialBarChart,
  RadialBar,
} from "recharts";

// Mock degraded soil data
const soilRestorationStats = [
  {
    title: "Soil Degradation Level",
    value: "68%",
    subtitle: "Severe degradation",
    icon: AlertTriangle,
    trend: { value: 15, isPositive: false },
  },
  {
    title: "Restoration Progress",
    value: "32%",
    subtitle: "6 months in",
    icon: RefreshCcw,
    trend: { value: 12, isPositive: true },
  },
  {
    title: "Recovery Timeline",
    value: "18 months",
    subtitle: "Estimated completion",
    icon: Clock,
    trend: { value: 3, isPositive: true },
  },
  {
    title: "Organic Matter Target",
    value: "4.5%",
    subtitle: "Current: 1.8%",
    icon: Target,
    trend: { value: 8, isPositive: true },
  },
];

const restorationCrops = [
  {
    name: "Alfalfa",
    type: "Nitrogen Fixer",
    effectiveness: 95,
    timeToImpact: "3 months",
    benefits: ["Fixes 200-300 kg N/ha", "Deep root system", "Improves soil structure"],
    icon: Leaf,
    color: "#0D7377",
    season: "Spring/Fall",
    cost: "Low",
  },
  {
    name: "Crimson Clover",
    type: "Cover Crop",
    effectiveness: 88,
    timeToImpact: "2 months",
    benefits: ["Adds organic matter", "Prevents erosion", "Improves water retention"],
    icon: Sprout,
    color: "#329F5B",
    season: "Fall/Winter",
    cost: "Very Low",
  },
  {
    name: "Winter Rye",
    type: "Soil Builder",
    effectiveness: 82,
    timeToImpact: "4 months",
    benefits: ["Dense root system", "Scavenges nutrients", "Breaks compaction"],
    icon: Leaf,
    color: "#14FFEC",
    season: "Fall/Winter",
    cost: "Low",
  },
  {
    name: "Red Clover",
    type: "Nitrogen Fixer",
    effectiveness: 90,
    timeToImpact: "3 months",
    benefits: ["Fixes 150-250 kg N/ha", "Attracts beneficial insects", "Improves soil biology"],
    icon: Sprout,
    color: "#F4A261",
    season: "Spring/Summer",
    cost: "Low",
  },
  {
    name: "Buckwheat",
    type: "Phosphorus Mobilizer",
    effectiveness: 75,
    timeToImpact: "6 weeks",
    benefits: ["Makes P available", "Fast growing", "Good for bees"],
    icon: Leaf,
    color: "#E76F51",
    season: "Summer",
    cost: "Medium",
  },
  {
    name: "Cowpea",
    type: "Nitrogen Fixer",
    effectiveness: 85,
    timeToImpact: "2.5 months",
    benefits: ["Heat tolerant", "Edible crop", "Improves soil fertility"],
    icon: Sprout,
    color: "#2A9D8F",
    season: "Summer",
    cost: "Medium",
  },
];

const degradationFactors = [
  { factor: "Organic Matter Loss", severity: 85, impact: "High" },
  { factor: "Nutrient Depletion", severity: 72, impact: "High" },
  { factor: "Soil Compaction", severity: 60, impact: "Medium" },
  { factor: "pH Imbalance", severity: 45, impact: "Medium" },
  { factor: "Erosion Risk", severity: 55, impact: "Medium" },
  { factor: "Microbial Activity", severity: 78, impact: "High" },
];

const restorationTimeline = [
  { month: "Month 1", organicMatter: 1.8, ph: 5.8, nitrogen: 25 },
  { month: "Month 3", organicMatter: 2.1, ph: 6.0, nitrogen: 35 },
  { month: "Month 6", organicMatter: 2.5, ph: 6.2, nitrogen: 45 },
  { month: "Month 9", organicMatter: 3.0, ph: 6.4, nitrogen: 55 },
  { month: "Month 12", organicMatter: 3.8, ph: 6.6, nitrogen: 70 },
  { month: "Month 18", organicMatter: 4.5, ph: 6.8, nitrogen: 85 },
];

const restorationPhases = [
  {
    phase: "Assessment & Planning",
    duration: "2 weeks",
    status: "completed",
    tasks: ["Soil testing", "Degradation analysis", "Restoration plan"],
  },
  {
    phase: "Initial Treatment",
    duration: "6 months",
    status: "in-progress",
    tasks: ["Cover crops planting", "Organic matter addition", "pH correction"],
  },
  {
    phase: "Active Restoration",
    duration: "12 months",
    status: "pending",
    tasks: ["Nitrogen fixers rotation", "Microorganism introduction", "Structure improvement"],
  },
  {
    phase: "Maintenance & Monitoring",
    duration: "Ongoing",
    status: "pending",
    tasks: ["Regular testing", "Crop rotation", "Sustainable practices"],
  },
];

const getEffectivenessColor = (score: number) => {
  if (score >= 90) return "text-success";
  if (score >= 80) return "text-primary";
  if (score >= 70) return "text-warning";
  return "text-destructive";
};

const getEffectivenessBadge = (score: number) => {
  if (score >= 90) return "bg-success/10 text-success border-success/20";
  if (score >= 80) return "bg-primary/10 text-primary border-primary/20";
  if (score >= 70) return "bg-warning/10 text-warning border-warning/20";
  return "bg-destructive/10 text-destructive border-destructive/20";
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed": return <CheckCircle className="h-4 w-4 text-success" />;
    case "in-progress": return <RefreshCcw className="h-4 w-4 text-primary animate-spin" />;
    default: return <Clock className="h-4 w-4 text-muted-foreground" />;
  }
};

export default function SoilRestoration() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Soil Health Restoration
          </h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive soil restoration program with healing crops and improvement strategies.
          </p>
        </div>
        <div className="flex gap-3">
          <Badge variant="outline" className="gap-2 text-destructive border-destructive/20">
            <AlertTriangle className="h-4 w-4" />
            Restoration Mode Active
          </Badge>
          <Button className="gradient-primary gap-2">
            <TestTube className="h-4 w-4" />
            Request Soil Test
          </Button>
        </div>
      </div>

      {/* Restoration Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {soilRestorationStats.map((stat, index) => (
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
        {/* Degradation Analysis */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Degradation Factors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {degradationFactors.map((factor, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{factor.factor}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{factor.severity}%</span>
                      <Badge
                        variant="outline"
                        className={
                          factor.impact === "High"
                            ? "bg-destructive/10 text-destructive border-destructive/20"
                            : "bg-warning/10 text-warning border-warning/20"
                        }
                      >
                        {factor.impact}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={factor.severity} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Restoration Timeline */}
        <Card className="glass-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Restoration Progress Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={restorationTimeline}>
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
                  dataKey="organicMatter"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  name="Organic Matter %"
                />
                <Line
                  type="monotone"
                  dataKey="ph"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  name="pH Level"
                />
                <Line
                  type="monotone"
                  dataKey="nitrogen"
                  stroke="#329F5B"
                  strokeWidth={2}
                  name="Nitrogen Index"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Restoration Crops */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sprout className="h-5 w-5 text-primary" />
            Soil Healing Crops
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restorationCrops.map((crop, index) => (
              <div
                key={index}
                className="p-4 bg-surface-elevated rounded-lg hover-lift border border-border"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${crop.color}20` }}>
                      <crop.icon className="h-5 w-5" style={{ color: crop.color }} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{crop.name}</h3>
                      <p className="text-sm text-muted-foreground">{crop.type}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className={getEffectivenessBadge(crop.effectiveness)}>
                    {crop.effectiveness}%
                  </Badge>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Impact Time:</span>
                    <span className="font-medium">{crop.timeToImpact}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Season:</span>
                    <span className="font-medium">{crop.season}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Cost:</span>
                    <span className="font-medium">{crop.cost}</span>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <p className="text-sm font-medium">Benefits:</p>
                  {crop.benefits.map((benefit, i) => (
                    <p key={i} className="text-xs text-muted-foreground">• {benefit}</p>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  style={{ borderColor: crop.color, color: crop.color }}
                >
                  Add to Plan
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Restoration Phases */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Restoration Phases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {restorationPhases.map((phase, index) => (
              <div
                key={index}
                className="p-4 bg-surface-elevated rounded-lg border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {getStatusIcon(phase.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{phase.phase}</h3>
                      <Badge variant="outline">
                        {phase.duration}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {phase.tasks.map((task, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {task}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}