import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import {
  Wheat,
  Leaf,
  TrendingUp,
  DollarSign,
  Clock,
  MapPin,
  Sprout,
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
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Mock crop recommendations data
const seasonalStats = [
  {
    title: "Recommended Crops",
    value: "12",
    subtitle: "For current season",
    icon: Sprout,
    trend: { value: 20, isPositive: true },
  },
  {
    title: "Expected ROI",
    value: "145%",
    subtitle: "Average return",
    icon: TrendingUp,
    trend: { value: 15, isPositive: true },
  },
  {
    title: "Growing Season",
    value: "95 days",
    subtitle: "Average duration",
    icon: Clock,
    trend: { value: 5, isPositive: false },
  },
  {
    title: "Market Demand",
    value: "High",
    subtitle: "Current trends",
    icon: DollarSign,
    trend: { value: 25, isPositive: true },
  },
];

const cropRecommendations = [
  {
    name: "Rice",
    suitability: 95,
    expectedYield: "5.8 tons/hectare",
    profitMargin: 48,
    growingPeriod: "120 days",
    marketPrice: "₹2,030/quintal",
    soilRequirement: "Clay, waterlogged",
    season: "Kharif",
    waterNeed: "High",
    icon: Leaf,
    color: "#2A9D8F",
  },
  {
    name: "Wheat",
    suitability: 85,
    expectedYield: "3.8 tons/hectare",
    profitMargin: 42,
    growingPeriod: "120 days",
    marketPrice: "₹2,175/quintal",
    soilRequirement: "Loamy, well-drained",
    season: "Rabi",
    waterNeed: "Medium",
    icon: Wheat,
    color: "#F4A261",
  },
  {
    name: "Maize",
    suitability: 92,
    expectedYield: "4.5 tons/hectare",
    profitMargin: 45,
    growingPeriod: "90 days",
    marketPrice: "₹1,875/quintal",
    soilRequirement: "Well-drained loam",
    season: "Kharif",
    waterNeed: "Medium",
    icon: Sprout,
    color: "#E9C46A",
  },
  {
    name: "Mustard",
    suitability: 88,
    expectedYield: "1.8 tons/hectare",
    profitMargin: 55,
    growingPeriod: "105 days",
    marketPrice: "₹4,350/quintal",
    soilRequirement: "Well-drained sandy loam",
    season: "Rabi",
    waterNeed: "Low",
    icon: Leaf,
    color: "#264653",
  },
];

const profitabilityData = cropRecommendations.map(crop => ({
  name: crop.name,
  profit: crop.profitMargin,
  suitability: crop.suitability,
}));

const seasonalDistribution = [
  { season: "Kharif", count: 5, color: "#0D7377" },
  { season: "Rabi", count: 4, color: "#14FFEC" },
  { season: "Zaid", count: 2, color: "#329F5B" },
  { season: "Annual", count: 1, color: "#F4A261" },
];

const marketTrends = [
  { month: "Jan", rice: 2030, wheat: 2175, maize: 1875 },
  { month: "Feb", rice: 2080, wheat: 2200, maize: 1900 },
  { month: "Mar", rice: 2120, wheat: 2250, maize: 1925 },
  { month: "Apr", rice: 2150, wheat: 2275, maize: 1950 },
  { month: "May", rice: 2180, wheat: 2300, maize: 1975 },
  { month: "Jun", rice: 2200, wheat: 2325, maize: 2000 },
];

const getSuitabilityColor = (score: number) => {
  if (score >= 90) return "text-success";
  if (score >= 75) return "text-primary";
  if (score >= 60) return "text-warning";
  return "text-destructive";
};

const getSuitabilityBadge = (score: number) => {
  if (score >= 90) return "bg-success/10 text-success border-success/20";
  if (score >= 75) return "bg-primary/10 text-primary border-primary/20";
  if (score >= 60) return "bg-warning/10 text-warning border-warning/20";
  return "bg-destructive/10 text-destructive border-destructive/20";
};

export default function CropRecommendations() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Crop Recommendations
          </h1>
          <p className="text-muted-foreground mt-2">
            AI-powered crop suggestions based on soil, climate, and market conditions.
          </p>
        </div>
        <Badge variant="outline" className="gap-2">
          <MapPin className="h-4 w-4" />
          Jharkhand, India
        </Badge>
      </div>

      {/* Seasonal Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {seasonalStats.map((stat, index) => (
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
        {/* Profitability Analysis */}
        <Card className="glass-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Profitability vs Suitability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={profitabilityData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="profit" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="suitability" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Seasonal Distribution */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Seasonal Distribution
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
                  dataKey="count"
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
                  <span className="text-sm">{season.season}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Crop Recommendations List */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sprout className="h-5 w-5 text-primary" />
            Recommended Crops
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cropRecommendations.map((crop, index) => (
              <div
                key={index}
                className="p-6 bg-surface-elevated rounded-lg hover-lift border border-border"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: `${crop.color}20` }}>
                      <crop.icon className="h-6 w-6" style={{ color: crop.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{crop.name}</h3>
                      <Badge variant="outline" className={getSuitabilityBadge(crop.suitability)}>
                        {crop.suitability}% Match
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(crop.suitability / 20)
                            ? "text-yellow-500 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Expected Yield:</span>
                      <div className="font-semibold">{crop.expectedYield}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Profit Margin:</span>
                      <div className="font-semibold text-success">{crop.profitMargin}%</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Growing Period:</span>
                      <div className="font-semibold">{crop.growingPeriod}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Market Price:</span>
                      <div className="font-semibold">{crop.marketPrice}</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Season: {crop.season}</span>
                      <span className="text-muted-foreground">Water: {crop.waterNeed}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Soil: {crop.soilRequirement}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    style={{ borderColor: crop.color, color: crop.color }}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Price Trends */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            Market Price Trends (6 Months)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={marketTrends}>
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
                dataKey="rice"
                stroke="#2A9D8F"
                strokeWidth={3}
                name="Rice (₹/quintal)"
              />
              <Line
                type="monotone"
                dataKey="wheat"
                stroke="#F4A261"
                strokeWidth={2}
                name="Wheat (₹/quintal)"
              />
              <Line
                type="monotone"
                dataKey="maize"
                stroke="#E9C46A"
                strokeWidth={2}
                name="Maize (₹/quintal)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}