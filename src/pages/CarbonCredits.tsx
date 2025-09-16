import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import {
  Leaf,
  TrendingUp,
  DollarSign,
  Target,
  Recycle,
  Globe,
  BarChart3,
  Award,
  CheckCircle,
  Star,
  ArrowUpRight,
  Zap,
  Sprout,
  TreePine,
  Shield,
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
  Area,
  AreaChart,
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Mock carbon credit data
const carbonStats = [
  {
    title: "CO₂ Saved This Season",
    value: "12.4",
    subtitle: "Tonnes of CO₂",
    icon: Globe,
    trend: { value: 23, isPositive: true },
  },
  {
    title: "Carbon Credit Earnings",
    value: "$2,480",
    subtitle: "Potential revenue",
    icon: DollarSign,
    trend: { value: 15, isPositive: true },
  },
  {
    title: "Sustainability Score",
    value: "87%",
    subtitle: "Eco-friendly practices",
    icon: Award,
    trend: { value: 8, isPositive: true },
  },
  {
    title: "Credits Available",
    value: "124",
    subtitle: "Ready for trading",
    icon: Recycle,
    trend: { value: 31, isPositive: true },
  },
];

const sustainablePractices = [
  {
    practice: "Crop Rotation",
    co2Saved: 3.2,
    creditValue: 640,
    adoption: 95,
    difficulty: "Easy",
    impact: "High",
    description: "Rotating crops reduces soil degradation and increases carbon sequestration",
    benefits: ["Soil health", "Pest control", "Biodiversity"],
    icon: Recycle,
    color: "#0D7377",
  },
  {
    practice: "Intercropping",
    co2Saved: 2.8,
    creditValue: 560,
    adoption: 82,
    difficulty: "Medium",
    impact: "High",
    description: "Growing multiple crops together enhances soil carbon storage",
    benefits: ["Resource efficiency", "Yield increase", "Risk reduction"],
    icon: Sprout,
    color: "#329F5B",
  },
  {
    practice: "Organic Fertilizer",
    co2Saved: 4.1,
    creditValue: 820,
    adoption: 78,
    difficulty: "Easy",
    impact: "Very High",
    description: "Organic fertilizers improve soil organic matter and reduce emissions",
    benefits: ["Soil fertility", "Reduced chemicals", "Cost savings"],
    icon: Leaf,
    color: "#14FFEC",
  },
  {
    practice: "Reduced Chemical Inputs",
    co2Saved: 2.3,
    creditValue: 460,
    adoption: 65,
    difficulty: "Medium",
    impact: "Medium",
    description: "Minimizing synthetic chemicals reduces environmental impact",
    benefits: ["Environmental safety", "Cost reduction", "Health benefits"],
    icon: Shield,
    color: "#F4A261",
  },
  {
    practice: "Cover Crops",
    co2Saved: 3.6,
    creditValue: 720,
    adoption: 71,
    difficulty: "Medium",
    impact: "High",
    description: "Cover crops prevent soil erosion and enhance carbon sequestration",
    benefits: ["Soil protection", "Nutrient cycling", "Water retention"],
    icon: TreePine,
    color: "#E76F51",
  },
  {
    practice: "No-Till Farming",
    co2Saved: 1.9,
    creditValue: 380,
    adoption: 58,
    difficulty: "Hard",
    impact: "High",
    description: "Avoiding tillage preserves soil structure and carbon content",
    benefits: ["Soil structure", "Water conservation", "Labor savings"],
    icon: Zap,
    color: "#2A9D8F",
  },
];

const monthlyData = [
  { month: "Jan", co2Saved: 1.2, earnings: 240, practices: 4 },
  { month: "Feb", co2Saved: 1.8, earnings: 360, practices: 5 },
  { month: "Mar", co2Saved: 2.3, earnings: 460, practices: 6 },
  { month: "Apr", co2Saved: 2.1, earnings: 420, practices: 6 },
  { month: "May", co2Saved: 2.8, earnings: 560, practices: 7 },
  { month: "Jun", co2Saved: 3.4, earnings: 680, practices: 8 },
  { month: "Jul", co2Saved: 3.2, earnings: 640, practices: 8 },
  { month: "Aug", co2Saved: 2.9, earnings: 580, practices: 7 },
  { month: "Sep", co2Saved: 2.5, earnings: 500, practices: 7 },
  { month: "Oct", co2Saved: 2.1, earnings: 420, practices: 6 },
  { month: "Nov", co2Saved: 1.6, earnings: 320, practices: 5 },
  { month: "Dec", co2Saved: 1.3, earnings: 260, practices: 4 },
];

const carbonTradingPlatforms = [
  {
    name: "EcoMarket Pro",
    type: "Voluntary Carbon Market",
    minCredits: 10,
    priceRange: "$18-25",
    commission: "3%",
    rating: 4.8,
    features: ["Real-time trading", "Instant settlements", "Mobile app"],
    status: "Coming Soon",
    description: "Leading platform for agricultural carbon credits with farmer-focused tools",
  },
  {
    name: "GreenTrade Global",
    type: "Compliance Market",
    minCredits: 50,
    priceRange: "$22-30",
    commission: "2.5%",
    rating: 4.6,
    features: ["Regulatory compliance", "Bulk trading", "Risk management"],
    status: "Beta Access",
    description: "Enterprise-grade platform for large-scale carbon credit transactions",
  },
  {
    name: "CarbonFarm Exchange",
    type: "Agricultural Focus",
    minCredits: 5,
    priceRange: "$15-22",
    commission: "4%",
    rating: 4.7,
    features: ["Farm verification", "Practice tracking", "Impact reporting"],
    status: "Available",
    description: "Specialized marketplace for agricultural and forestry carbon credits",
  },
];

const sustainabilityBreakdown = [
  { category: "Soil Management", score: 92, color: "#0D7377" },
  { category: "Water Conservation", score: 85, color: "#329F5B" },
  { category: "Chemical Reduction", score: 78, color: "#14FFEC" },
  { category: "Biodiversity", score: 90, color: "#F4A261" },
  { category: "Energy Efficiency", score: 82, color: "#E76F51" },
];

const projectedEarnings = [
  { year: "2024", conservative: 2480, optimistic: 3720, practices: 8 },
  { year: "2025", conservative: 3240, optimistic: 4860, practices: 10 },
  { year: "2026", conservative: 4160, optimistic: 6240, practices: 12 },
  { year: "2027", conservative: 5200, optimistic: 7800, practices: 14 },
  { year: "2028", conservative: 6480, optimistic: 9720, practices: 16 },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case "easy": return "bg-success/10 text-success border-success/20";
    case "medium": return "bg-warning/10 text-warning border-warning/20";
    case "hard": return "bg-destructive/10 text-destructive border-destructive/20";
    default: return "bg-muted";
  }
};

const getImpactColor = (impact: string) => {
  switch (impact.toLowerCase()) {
    case "very high": return "bg-primary/10 text-primary border-primary/20";
    case "high": return "bg-success/10 text-success border-success/20";
    case "medium": return "bg-warning/10 text-warning border-warning/20";
    case "low": return "bg-muted/10 text-muted-foreground border-muted/20";
    default: return "bg-muted";
  }
};

export default function CarbonCredits() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Carbon Credit & Sustainability Insights
          </h1>
          <p className="text-muted-foreground mt-2">
            Track your environmental impact and unlock carbon credit earning opportunities.
          </p>
        </div>
        <div className="flex gap-3">
          <Badge variant="outline" className="gap-2">
            <Globe className="h-4 w-4" />
            Carbon Positive
          </Badge>
          <Button className="gradient-primary gap-2">
            <BarChart3 className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Carbon Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {carbonStats.map((stat, index) => (
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
        {/* Monthly CO₂ Savings & Earnings */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Monthly CO₂ Savings & Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="co2Gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="co2" orientation="left" />
                <YAxis yAxisId="earnings" orientation="right" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  yAxisId="co2"
                  type="monotone"
                  dataKey="co2Saved"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#co2Gradient)"
                  name="CO₂ Saved (tonnes)"
                />
                <Area
                  yAxisId="earnings"
                  type="monotone"
                  dataKey="earnings"
                  stroke="hsl(var(--success))"
                  fillOpacity={1}
                  fill="url(#earningsGradient)"
                  name="Earnings ($)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Sustainability Score Breakdown */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Sustainability Score Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sustainabilityBreakdown.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.category}</span>
                    <span className="font-bold">{item.score}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${item.score}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-surface-elevated rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="font-semibold">Overall Score: 87%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Excellent! You're in the top 15% of sustainable farmers.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sustainable Practices */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            Sustainable Practices & CO₂ Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sustainablePractices.map((practice, index) => (
              <div
                key={index}
                className="p-6 bg-surface-elevated rounded-lg hover-lift border border-border group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${practice.color}20` }}
                    >
                      <practice.icon 
                        className="h-6 w-6" 
                        style={{ color: practice.color }} 
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{practice.practice}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className={getDifficultyColor(practice.difficulty)}>
                          {practice.difficulty}
                        </Badge>
                        <Badge variant="outline" className={getImpactColor(practice.impact)}>
                          {practice.impact} Impact
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {practice.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">CO₂ Saved:</span>
                    <span className="font-semibold text-success">{practice.co2Saved} tonnes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Credit Value:</span>
                    <span className="font-semibold text-primary">${practice.creditValue}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Your Adoption:</span>
                    <span className="font-semibold">{practice.adoption}%</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium">Key Benefits:</p>
                  <div className="flex flex-wrap gap-1">
                    {practice.benefits.map((benefit, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Adoption Progress</span>
                    <span>{practice.adoption}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${practice.adoption}%`,
                        backgroundColor: practice.color,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Projected Earnings */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Projected Carbon Credit Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={projectedEarnings}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="year" />
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
                  dataKey="conservative"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Conservative ($)"
                />
                <Line
                  type="monotone"
                  dataKey="optimistic"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  name="Optimistic ($)"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-surface-elevated rounded-lg">
              <p className="text-sm text-muted-foreground">
                Based on current adoption trends and market projections. 
                Optimistic scenario assumes implementation of all recommended practices.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Future Trading Platforms */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Recycle className="h-5 w-5 text-primary" />
              Future Carbon Trading Platforms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {carbonTradingPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="p-4 bg-surface-elevated rounded-lg border border-border hover-lift"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">{platform.name}</h4>
                      <p className="text-sm text-muted-foreground">{platform.type}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={platform.status === "Available" ? "default" : "secondary"}
                        className={
                          platform.status === "Available" 
                            ? "bg-success/10 text-success border-success/20"
                            : platform.status === "Beta Access"
                            ? "bg-warning/10 text-warning border-warning/20"
                            : "bg-muted/10 text-muted-foreground border-muted/20"
                        }
                      >
                        {platform.status}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{platform.rating}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {platform.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Min Credits:</span>
                      <span className="font-medium ml-2">{platform.minCredits}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Price Range:</span>
                      <span className="font-medium ml-2">{platform.priceRange}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Commission:</span>
                      <span className="font-medium ml-2">{platform.commission}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {platform.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group"
                    disabled={platform.status === "Coming Soon"}
                  >
                    {platform.status === "Available" ? "Trade Now" : 
                     platform.status === "Beta Access" ? "Request Access" : "Get Notified"}
                    <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="glass-card hover-lift group cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Verify Your Practices</h3>
                <p className="text-sm text-muted-foreground">Get certified for carbon credits</p>
              </div>
            </div>
            <Button className="w-full gradient-primary group-hover:scale-105 transition-transform">
              Start Verification
            </Button>
          </CardContent>
        </Card>

        <Card className="glass-card hover-lift group cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-success/10 rounded-lg">
                <Target className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="font-semibold">Set Sustainability Goals</h3>
                <p className="text-sm text-muted-foreground">Plan your eco-friendly future</p>
              </div>
            </div>
            <Button variant="outline" className="w-full group-hover:scale-105 transition-transform">
              Create Goals
            </Button>
          </CardContent>
        </Card>

        <Card className="glass-card hover-lift group cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-warning/10 rounded-lg">
                <BarChart3 className="h-6 w-6 text-warning" />
              </div>
              <div>
                <h3 className="font-semibold">Impact Calculator</h3>
                <p className="text-sm text-muted-foreground">Estimate practice benefits</p>
              </div>
            </div>
            <Button variant="outline" className="w-full group-hover:scale-105 transition-transform">
              Calculate Impact
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}