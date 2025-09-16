import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatCard } from "@/components/ui/stat-card";
import {
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  MapPin,
  Search,
  Filter,
  RefreshCw,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock mandi price data
const priceStats = [
  {
    title: "Average Price",
    value: "₹2,150",
    subtitle: "Per quintal",
    icon: ShoppingCart,
    trend: { value: 12, isPositive: true },
  },
  {
    title: "Top Performing",
    value: "Rice",
    subtitle: "+₹180 this week",
    icon: TrendingUp,
    trend: { value: 15, isPositive: true },
  },
  {
    title: "Markets Active",
    value: "24",
    subtitle: "In your region",
    icon: MapPin,
    trend: { value: 8, isPositive: true },
  },
  {
    title: "Price Alert",
    value: "3 crops",
    subtitle: "Above target price",
    icon: TrendingUp,
    trend: { value: 25, isPositive: true },
  },
];

const mandiPrices = [
  {
    crop: "Rice",
    variety: "PR-116",
    market: "Ranchi APMC",
    minPrice: 1980,
    maxPrice: 2080,
    modalPrice: 2030,
    trend: "up",
    change: 5.2,
    volume: "450 MT",
    quality: "FAQ",
  },
  {
    crop: "Wheat",
    variety: "HD-2967",
    market: "Dhanbad APMC",
    minPrice: 2100,
    maxPrice: 2250,
    modalPrice: 2175,
    trend: "up",
    change: 3.8,
    volume: "280 MT",
    quality: "Grade A",
  },
  {
    crop: "Maize",
    variety: "Hybrid",
    market: "Jamshedpur APMC",
    minPrice: 1800,
    maxPrice: 1950,
    modalPrice: 1875,
    trend: "down",
    change: -2.1,
    volume: "150 MT",
    quality: "Grade B",
  },
  {
    crop: "Paddy",
    variety: "Swarna",
    market: "Bokaro APMC",
    minPrice: 1850,
    maxPrice: 1950,
    modalPrice: 1900,
    trend: "up",
    change: 1.8,
    volume: "1200 MT",
    quality: "FAQ",
  },
  {
    crop: "Potato",
    variety: "Kufri Jyoti",
    market: "Hazaribagh APMC",
    minPrice: 800,
    maxPrice: 1200,
    modalPrice: 1000,
    trend: "down",
    change: -8.5,
    volume: "320 MT",
    quality: "Grade A",
  },
  {
    crop: "Mustard",
    variety: "Pusa Bold",
    market: "Deoghar APMC",
    minPrice: 4200,
    maxPrice: 4500,
    modalPrice: 4350,
    trend: "up",
    change: 4.2,
    volume: "180 MT",
    quality: "FAQ",
  },
];

const getTrendIcon = (trend: string) => {
  return trend === "up" ? (
    <TrendingUp className="h-4 w-4 text-success" />
  ) : (
    <TrendingDown className="h-4 w-4 text-destructive" />
  );
};

const getTrendColor = (trend: string) => {
  return trend === "up" ? "text-success" : "text-destructive";
};

const getQualityBadge = (quality: string) => {
  switch (quality) {
    case "Grade A":
      return "bg-success/10 text-success border-success/20";
    case "Grade B":
      return "bg-warning/10 text-warning border-warning/20";
    case "FAQ":
      return "bg-primary/10 text-primary border-primary/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function MandiPrices() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Mandi Prices
          </h1>
          <p className="text-muted-foreground mt-2">
            Real-time market prices from APMC mandis across Jharkhand.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
          <Button className="gradient-primary gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {/* Price Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {priceStats.map((stat, index) => (
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

      {/* Search and Filters */}
      <Card className="glass-card">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search crops, markets, or varieties..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                Jharkhand
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                This Week
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                All Crops
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Price Table */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Current Market Prices
            <Badge variant="outline" className="ml-auto">
              Last updated: 2 hours ago
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Crop & Variety</TableHead>
                  <TableHead>Market</TableHead>
                  <TableHead>Min Price</TableHead>
                  <TableHead>Max Price</TableHead>
                  <TableHead>Modal Price</TableHead>
                  <TableHead>Trend</TableHead>
                  <TableHead>Volume</TableHead>
                  <TableHead>Quality</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mandiPrices.map((price, index) => (
                  <TableRow key={index} className="hover:bg-surface-elevated/50">
                    <TableCell>
                      <div>
                        <div className="font-semibold">{price.crop}</div>
                        <div className="text-sm text-muted-foreground">
                          {price.variety}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        {price.market}
                      </div>
                    </TableCell>
                    <TableCell>₹{price.minPrice.toLocaleString()}</TableCell>
                    <TableCell>₹{price.maxPrice.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="font-semibold">
                        ₹{price.modalPrice.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getTrendIcon(price.trend)}
                        <span className={getTrendColor(price.trend)}>
                          {price.change > 0 ? "+" : ""}
                          {price.change}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{price.volume}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={getQualityBadge(price.quality)}
                      >
                        {price.quality}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Price Alerts */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Price Alerts & Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-success" />
                <div>
                  <div className="font-semibold text-success">
                    Wheat price increased by 5.2%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Current price: ₹2,130/quintal in Mumbai APMC
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
              <div className="flex items-center gap-3">
                <TrendingDown className="h-5 w-5 text-warning" />
                <div>
                  <div className="font-semibold text-warning">
                    Onion prices dropping significantly
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Down 8.5% this week - Consider selling soon
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <div className="flex items-center gap-3">
                <ShoppingCart className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-primary">
                    New market data available
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Fresh prices updated for 6 crops in your watchlist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}