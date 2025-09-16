import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CloudSun,
  Sun,
  Cloud,
  CloudRain,
  Thermometer,
  Droplets,
  Wind,
  Eye,
  Gauge,
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
} from "recharts";

// Mock weather data
const currentWeather = {
  temperature: 28,
  condition: "Partly Cloudy",
  humidity: 65,
  windSpeed: 12,
  visibility: 10,
  pressure: 1013,
  uvIndex: 6,
  feelsLike: 31,
};

const hourlyForecast = [
  { time: "12:00", temp: 28, humidity: 65, condition: "sunny" },
  { time: "13:00", temp: 30, humidity: 60, condition: "sunny" },
  { time: "14:00", temp: 32, humidity: 58, condition: "partly-cloudy" },
  { time: "15:00", temp: 31, humidity: 62, condition: "partly-cloudy" },
  { time: "16:00", temp: 29, humidity: 68, condition: "cloudy" },
  { time: "17:00", temp: 27, humidity: 72, condition: "cloudy" },
  { time: "18:00", temp: 25, humidity: 75, condition: "rainy" },
  { time: "19:00", temp: 24, humidity: 80, condition: "rainy" },
];

const weeklyForecast = [
  { day: "Today", high: 32, low: 24, condition: "partly-cloudy", precipitation: 20 },
  { day: "Tomorrow", high: 29, low: 22, condition: "rainy", precipitation: 80 },
  { day: "Wed", high: 26, low: 20, condition: "rainy", precipitation: 90 },
  { day: "Thu", high: 30, low: 23, condition: "cloudy", precipitation: 30 },
  { day: "Fri", high: 33, low: 25, condition: "sunny", precipitation: 10 },
  { day: "Sat", high: 35, low: 27, condition: "sunny", precipitation: 5 },
  { day: "Sun", high: 34, low: 26, condition: "partly-cloudy", precipitation: 15 },
];

const getWeatherIcon = (condition: string, size = 6) => {
  const className = `h-${size} w-${size}`;
  switch (condition) {
    case "sunny": return <Sun className={`${className} text-yellow-500`} />;
    case "partly-cloudy": return <CloudSun className={`${className} text-blue-500`} />;
    case "cloudy": return <Cloud className={`${className} text-gray-500`} />;
    case "rainy": return <CloudRain className={`${className} text-blue-600`} />;
    default: return <Sun className={`${className} text-yellow-500`} />;
  }
};

const getConditionColor = (condition: string) => {
  switch (condition) {
    case "sunny": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
    case "partly-cloudy": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
    case "cloudy": return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    case "rainy": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
  }
};

export default function Weather() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Weather Forecast
          </h1>
          <p className="text-muted-foreground mt-2">
            Real-time weather data and 7-day forecast for your farm location.
          </p>
        </div>
        <Badge variant="outline" className="gap-2">
          <CloudSun className="h-4 w-4" />
          Ranchi, Jharkhand
        </Badge>
      </div>

      {/* Current Weather */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {getWeatherIcon("partly-cloudy", 6)}
            Current Weather
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">{currentWeather.temperature}°</div>
              <div className="text-sm text-muted-foreground mt-1">Temperature</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold">{currentWeather.feelsLike}°</div>
              <div className="text-sm text-muted-foreground mt-1">Feels like</div>
            </div>
            <div className="text-center flex flex-col items-center">
              <Droplets className="h-6 w-6 text-blue-500 mb-2" />
              <div className="text-xl font-semibold">{currentWeather.humidity}%</div>
              <div className="text-sm text-muted-foreground">Humidity</div>
            </div>
            <div className="text-center flex flex-col items-center">
              <Wind className="h-6 w-6 text-green-500 mb-2" />
              <div className="text-xl font-semibold">{currentWeather.windSpeed}</div>
              <div className="text-sm text-muted-foreground">km/h</div>
            </div>
            <div className="text-center flex flex-col items-center">
              <Eye className="h-6 w-6 text-purple-500 mb-2" />
              <div className="text-xl font-semibold">{currentWeather.visibility}</div>
              <div className="text-sm text-muted-foreground">km</div>
            </div>
            <div className="text-center flex flex-col items-center">
              <Gauge className="h-6 w-6 text-orange-500 mb-2" />
              <div className="text-xl font-semibold">{currentWeather.pressure}</div>
              <div className="text-sm text-muted-foreground">hPa</div>
            </div>
            <div className="text-center flex flex-col items-center">
              <Sun className="h-6 w-6 text-yellow-500 mb-2" />
              <div className="text-xl font-semibold">{currentWeather.uvIndex}</div>
              <div className="text-sm text-muted-foreground">UV Index</div>
            </div>
            <div className="text-center">
              <Badge className={getConditionColor("partly-cloudy")}>
                {currentWeather.condition}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Hourly Forecast */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>24-Hour Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={hourlyForecast}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="time" />
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
                  dataKey="temp"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="humidity"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--accent))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Precipitation Chart */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Weekly Precipitation</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyForecast}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar
                  dataKey="precipitation"
                  fill="hsl(var(--accent))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* 7-Day Forecast */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>7-Day Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {weeklyForecast.map((day, index) => (
              <div
                key={index}
                className="p-4 bg-surface-elevated rounded-lg text-center hover-lift"
              >
                <div className="font-semibold mb-2">{day.day}</div>
                <div className="flex justify-center mb-3">
                  {getWeatherIcon(day.condition, 8)}
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">{day.high}°</span>
                    <span className="text-muted-foreground">{day.low}°</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {day.precipitation}% rain
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