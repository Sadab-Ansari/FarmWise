import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import {
  Layers,
  TrendingUp,
  DollarSign,
  Target,
  Sprout,
  Leaf,
  BarChart3,
  BookOpen,
  CheckCircle,
  Star,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Mock AI hybrid crop data
const hybridStats = [
  {
    title: "Intercrop Combinations",
    value: "24",
    subtitle: "AI-recommended pairs",
    icon: Layers,
    trend: { value: 18, isPositive: true },
  },
  {
    title: "Avg. Yield Increase",
    value: "35%",
    subtitle: "Over monoculture",
    icon: TrendingUp,
    trend: { value: 12, isPositive: true },
  },
  {
    title: "Profit Enhancement",
    value: "42%",
    subtitle: "Combined margins",
    icon: DollarSign,
    trend: { value: 22, isPositive: true },
  },
  {
    title: "Land Use Efficiency",
    value: "78%",
    subtitle: "Optimal utilization",
    icon: Target,
    trend: { value: 15, isPositive: true },
  },
];

const intercroppingPairs = [
  {
    primary: "Maize",
    secondary: "Black Gram",
    compatibility: 95,
    yieldIncrease: 38,
    profitBoost: 45,
    spaceEfficiency: 85,
    seasonalTiming: "Kharif",
    benefits: ["Nitrogen fixation", "Pest control", "Soil improvement"],
    primaryIcon: Sprout,
    secondaryIcon: Leaf,
    color: "#0D7377",
    riskLevel: "Low",
    waterRequirement: "Medium",
    duration: "120 days",
  },
  {
    primary: "Wheat",
    secondary: "Chickpea",
    compatibility: 92,
    yieldIncrease: 32,
    profitBoost: 38,
    spaceEfficiency: 80,
    seasonalTiming: "Rabi",
    benefits: ["Nitrogen supply", "Disease reduction", "Market diversity"],
    primaryIcon: Leaf,
    secondaryIcon: Sprout,
    color: "#329F5B",
    riskLevel: "Low",
    waterRequirement: "Low",
    duration: "150 days",
  },
  {
    primary: "Cotton",
    secondary: "Cowpea",
    compatibility: 88,
    yieldIncrease: 28,
    profitBoost: 35,
    spaceEfficiency: 75,
    seasonalTiming: "Kharif",
    benefits: ["Soil fertility", "Pest management", "Fodder production"],
    primaryIcon: Sprout,
    secondaryIcon: Leaf,
    color: "#14FFEC",
    riskLevel: "Medium",
    waterRequirement: "High",
    duration: "180 days",
  },
  {
    primary: "Sugarcane",
    secondary: "Potato",
    compatibility: 85,
    yieldIncrease: 25,
    profitBoost: 40,
    spaceEfficiency: 90,
    seasonalTiming: "Annual",
    benefits: ["Space utilization", "Early returns", "Soil protection"],
    primaryIcon: Leaf,
    secondaryIcon: Sprout,
    color: "#F4A261",
    riskLevel: "Medium",
    waterRequirement: "High",
    duration: "365 days",
  },
  {
    primary: "Tomato",
    secondary: "Basil",
    compatibility: 90,
    yieldIncrease: 22,
    profitBoost: 48,
    spaceEfficiency: 70,
    seasonalTiming: "Summer",
    benefits: ["Pest repellent", "Flavor enhancement", "Companion growth"],
    primaryIcon: Sprout,
    secondaryIcon: Leaf,
    color: "#E76F51",
    riskLevel: "Low",
    waterRequirement: "Medium",
    duration: "90 days",
  },
  {
    primary: "Rice",
    secondary: "Fish Farming",
    compatibility: 87,
    yieldIncrease: 30,
    profitBoost: 55,
    spaceEfficiency: 95,
    seasonalTiming: "Kharif",
    benefits: ["Protein source", "Natural fertilizer", "Pest control"],
    primaryIcon: Leaf,
    secondaryIcon: Sprout,
    color: "#2A9D8F",
    riskLevel: "Medium",
    waterRequirement: "Very High",
    duration: "120 days",
  },
];

const yieldComparisonData = intercroppingPairs.slice(0, 4).map(pair => ({
  combination: `${pair.primary} + ${pair.secondary}`,
  monoculture: 100,
  intercrop: 100 + pair.yieldIncrease,
  profit: pair.profitBoost,
}));

const compatibilityMatrix = [
  { crop: "Maize", nitrogen: 85, water: 70, space: 90, timing: 85, pest: 80 },
  { crop: "Wheat", nitrogen: 60, water: 85, space: 75, timing: 90, pest: 85 },
  { crop: "Cotton", nitrogen: 75, water: 60, space: 80, timing: 75, pest: 90 },
  { crop: "Rice", nitrogen: 70, water: 95, space: 85, timing: 80, pest: 75 },
];

const seasonalDistribution = [
  { season: "Kharif", pairs: 8, color: "#0D7377" },
  { season: "Rabi", pairs: 6, color: "#329F5B" },
  { season: "Summer", pairs: 4, color: "#F4A261" },
  { season: "Annual", pairs: 6, color: "#14FFEC" },
];

const riskFactors = [
  { factor: "Water Competition", impact: 35, mitigation: "Drip irrigation scheduling" },
  { factor: "Nutrient Competition", impact: 25, mitigation: "Balanced fertilization" },
  { factor: "Light Competition", impact: 30, mitigation: "Proper spacing design" },
  { factor: "Pest Interaction", impact: 15, mitigation: "Beneficial companion planting" },
  { factor: "Harvest Timing", impact: 20, mitigation: "Staggered planting cycles" },
];

const getCompatibilityColor = (score: number) => {
  if (score >= 90) return "text-success";
  if (score >= 80) return "text-primary";
  if (score >= 70) return "text-warning";
  return "text-destructive";
};

const getCompatibilityBadge = (score: number) => {
  if (score >= 90) return "bg-success/10 text-success border-success/20";
  if (score >= 80) return "bg-primary/10 text-primary border-primary/20";
  if (score >= 70) return "bg-warning/10 text-warning border-warning/20";
  return "bg-destructive/10 text-destructive border-destructive/20";
};

const getRiskBadge = (level: string) => {
  switch (level.toLowerCase()) {
    case "low": return "bg-success/10 text-success border-success/20";
    case "medium": return "bg-warning/10 text-warning border-warning/20";
    case "high": return "bg-destructive/10 text-destructive border-destructive/20";
    default: return "bg-muted";
  }
};

export default function HybridCrops() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            AI Hybrid Crop Suggestions
          </h1>
          <p className="text-muted-foreground mt-2">
            Intelligent intercropping recommendations for maximum yield and profit optimization.
          </p>
        </div>
        <div className="flex gap-3">
          <Badge variant="outline" className="gap-2">
            <BookOpen className="h-4 w-4" />
            AI-Powered Analysis
          </Badge>
          <Button className="gradient-primary gap-2">
            <BarChart3 className="h-4 w-4" />
            Generate Custom Plan
          </Button>
        </div>
      </div>

      {/* Hybrid Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hybridStats.map((stat, index) => (
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
        {/* Yield Comparison */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Yield Comparison: Intercrop vs Monoculture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yieldComparisonData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="combination" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="monoculture" fill="hsl(var(--muted))" name="Monoculture %" />
                <Bar dataKey="intercrop" fill="hsl(var(--primary))" name="Intercrop %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Seasonal Distribution */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              Seasonal Intercrop Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={seasonalDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="pairs"
                >
                  {seasonalDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {seasonalDistribution.map((season, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: season.color }}
                  />
                  <span className="text-sm">{season.season} ({season.pairs})</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Intercropping Recommendations */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sprout className="h-5 w-5 text-primary" />
            Recommended Intercropping Pairs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {intercroppingPairs.map((pair, index) => (
              <div
                key={index}
                className="p-6 bg-surface-elevated rounded-lg hover-lift border border-border"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="p-2 rounded-lg border-2 border-background" style={{ backgroundColor: `${pair.color}20` }}>
                        <pair.primaryIcon className="h-5 w-5" style={{ color: pair.color }} />
                      </div>
                      <div className="p-2 rounded-lg border-2 border-background" style={{ backgroundColor: `${pair.color}10` }}>
                        <pair.secondaryIcon className="h-5 w-5" style={{ color: pair.color }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{pair.primary} + {pair.secondary}</h3>
                      <Badge variant="outline" className={getCompatibilityBadge(pair.compatibility)}>
                        {pair.compatibility}% Compatible
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(pair.compatibility / 20)
                            ? "text-yellow-500 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Yield Increase:</span>
                      <span className="font-semibold text-success">+{pair.yieldIncrease}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Profit Boost:</span>
                      <span className="font-semibold text-success">+{pair.profitBoost}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Space Efficiency:</span>
                      <span className="font-semibold">{pair.spaceEfficiency}%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Season:</span>
                      <span className="font-semibold">{pair.seasonalTiming}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-semibold">{pair.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Risk Level:</span>
                      <Badge variant="outline" className={getRiskBadge(pair.riskLevel)}>
                        {pair.riskLevel}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium">Key Benefits:</p>
                  <div className="flex flex-wrap gap-1">
                    {pair.benefits.map((benefit, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    style={{ borderColor: pair.color, color: pair.color }}
                  >
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1 gradient-primary">
                    Add to Plan
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compatibility Matrix */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Crop Compatibility Matrix
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={compatibilityMatrix}>
                <PolarGrid />
                <PolarAngleAxis dataKey="crop" />
                <PolarRadiusAxis angle={54} domain={[0, 100]} />
                <Radar
                  name="Nitrogen Sharing"
                  dataKey="nitrogen"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.1}
                />
                <Radar
                  name="Water Efficiency"
                  dataKey="water"
                  stroke="hsl(var(--accent))"
                  fill="hsl(var(--accent))"
                  fillOpacity={0.1}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Risk Management */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Risk Management Strategies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskFactors.map((risk, index) => (
                <div key={index} className="p-4 bg-surface-elevated rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{risk.factor}</h4>
                    <Badge
                      variant="outline"
                      className={
                        risk.impact > 30
                          ? "bg-destructive/10 text-destructive border-destructive/20"
                          : risk.impact > 20
                          ? "bg-warning/10 text-warning border-warning/20"
                          : "bg-success/10 text-success border-success/20"
                      }
                    >
                      {risk.impact}% Impact
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{risk.mitigation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}