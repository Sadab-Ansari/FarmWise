import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sprout, Leaf, Droplets, Zap, Calculator, Calendar, Target } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const FertilizerPlanner = () => {
  const [selectedCrop, setSelectedCrop] = useState("wheat");
  const [soilType, setSoilType] = useState("loamy");

  const fertilizerData = [
    { name: "Nitrogen (N)", current: 45, required: 60, unit: "kg/ha" },
    { name: "Phosphorus (P)", current: 25, required: 40, unit: "kg/ha" },
    { name: "Potassium (K)", current: 30, required: 50, unit: "kg/ha" },
    { name: "Sulfur (S)", current: 15, required: 20, unit: "kg/ha" }
  ];

  const organicOptions = [
    { name: "Cow Manure", npk: "0.5-0.3-0.5", cost: "₹800/ton", application: "10-15 tons/ha" },
    { name: "Vermicompost", npk: "1.5-1.0-1.5", cost: "₹2500/ton", application: "5-8 tons/ha" },
    { name: "Neem Cake", npk: "5.2-1.0-1.4", cost: "₹1800/ton", application: "200-400 kg/ha" },
    { name: "Bone Meal", npk: "4-12-0", cost: "₹2200/ton", application: "150-300 kg/ha" }
  ];

  const chemicalOptions = [
    { name: "Urea", nutrient: "Nitrogen (46%)", cost: "₹280/50kg", application: "130 kg/ha" },
    { name: "DAP", nutrient: "N-P (18-46%)", cost: "₹1350/50kg", application: "100 kg/ha" },
    { name: "MOP", nutrient: "Potassium (60%)", cost: "₹850/50kg", application: "80 kg/ha" },
    { name: "SSP", nutrient: "Phosphorus (16%)", cost: "₹450/50kg", application: "250 kg/ha" }
  ];

  const applicationSchedule = [
    { stage: "Pre-Sowing", fertilizer: "Basal Dose", amount: "50% of P, K + 25% N", timing: "1 week before sowing" },
    { stage: "Sowing", fertilizer: "Starter", amount: "Micronutrients + Organic", timing: "At the time of sowing" },
    { stage: "Tillering", fertilizer: "First Top Dress", amount: "25% N", timing: "20-25 days after sowing" },
    { stage: "Grain Filling", fertilizer: "Second Top Dress", amount: "50% N", timing: "45-50 days after sowing" }
  ];

  const pieData = [
    { name: "Organic", value: 60, color: "#0D7377" },
    { name: "Chemical", value: 40, color: "#14FFEC" }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fertilizer Planner</h1>
          <p className="text-muted-foreground">Optimize your crop nutrition with AI-powered recommendations</p>
        </div>
        <Button className="hover-scale">
          <Calculator className="h-4 w-4 mr-2" />
          Calculate Dosage
        </Button>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="glass-card">
          <CardContent className="p-4">
            <label className="text-sm font-medium text-foreground mb-2 block">Select Crop</label>
            <Select value={selectedCrop} onValueChange={setSelectedCrop}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rice">Rice</SelectItem>
                <SelectItem value="wheat">Wheat</SelectItem>
                <SelectItem value="maize">Maize</SelectItem>
                <SelectItem value="mustard">Mustard</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4">
            <label className="text-sm font-medium text-foreground mb-2 block">Soil Type</label>
            <Select value={soilType} onValueChange={setSoilType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="loamy">Loamy</SelectItem>
                <SelectItem value="clay">Clay</SelectItem>
                <SelectItem value="sandy">Sandy</SelectItem>
                <SelectItem value="silt">Silt</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <StatCard
          title="Field Area"
          value="2.5"
          subtitle="Hectares"
          icon={Target}
          className="hover-scale"
        />
      </div>

      {/* Nutrient Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              Nutrient Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fertilizerData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="current" fill="#14FFEC" radius={[4, 4, 0, 0]} />
                <Bar dataKey="required" fill="#0D7377" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sprout className="h-5 w-5 text-primary" />
              Fertilizer Mix Ratio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {pieData.map((entry, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                  <span className="text-sm text-muted-foreground">{entry.name} ({entry.value}%)</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fertilizer Recommendations */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Fertilizer Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="organic" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="organic">Organic Fertilizers</TabsTrigger>
              <TabsTrigger value="chemical">Chemical Fertilizers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="organic" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {organicOptions.map((fertilizer, index) => (
                  <Card key={index} className="border border-border/50 hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{fertilizer.name}</h4>
                        <Badge variant="secondary">{fertilizer.npk}</Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <span className="font-medium">Cost:</span> {fertilizer.cost}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Application:</span> {fertilizer.application}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-3 hover-scale">
                        Add to Plan
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="chemical" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {chemicalOptions.map((fertilizer, index) => (
                  <Card key={index} className="border border-border/50 hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{fertilizer.name}</h4>
                        <Badge variant="outline">{fertilizer.nutrient}</Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <span className="font-medium">Cost:</span> {fertilizer.cost}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Application:</span> {fertilizer.application}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-3 hover-scale">
                        Add to Plan
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Application Schedule */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Application Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {applicationSchedule.map((schedule, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{schedule.stage}</h4>
                  <p className="text-sm text-muted-foreground">{schedule.fertilizer} - {schedule.amount}</p>
                  <p className="text-xs text-muted-foreground mt-1">{schedule.timing}</p>
                </div>
                <Badge variant="outline" className="hover-scale">
                  <Droplets className="h-3 w-3 mr-1" />
                  Apply
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FertilizerPlanner;