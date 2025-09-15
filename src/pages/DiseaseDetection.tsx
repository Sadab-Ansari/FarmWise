import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Camera, 
  Upload, 
  Scan, 
  Bug, 
  Leaf, 
  AlertTriangle, 
  Shield, 
  Activity,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const DiseaseDetection = () => {
  const [analysisStep, setAnalysisStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const detectionStats = [
    { title: "Scans Today", value: "127", icon: Scan, trend: { value: 12, isPositive: true } },
    { title: "Healthy Crops", value: "89%", icon: Shield, trend: { value: 5, isPositive: true } },
    { title: "Diseases Found", value: "14", icon: Bug, trend: { value: 3, isPositive: false } },
    { title: "Accuracy Rate", value: "94.5%", icon: Activity, trend: { value: 2, isPositive: true } }
  ];

  const recentDetections = [
    {
      id: 1,
      crop: "Tomato",
      disease: "Early Blight",
      severity: "Medium",
      confidence: 92,
      date: "2024-01-15",
      status: "treated"
    },
    {
      id: 2,
      crop: "Wheat",
      disease: "Rust",
      severity: "High",
      confidence: 88,
      date: "2024-01-14",
      status: "pending"
    },
    {
      id: 3,
      crop: "Cotton",
      disease: "Bacterial Blight",
      severity: "Low",
      confidence: 95,
      date: "2024-01-13",
      status: "treated"
    }
  ];

  const commonDiseases = [
    {
      name: "Powdery Mildew",
      crops: ["Grape", "Rose", "Cucumber"],
      symptoms: "White powdery coating on leaves",
      treatment: "Fungicide spray, improve air circulation"
    },
    {
      name: "Bacterial Wilt",
      crops: ["Tomato", "Potato", "Eggplant"],
      symptoms: "Sudden wilting, yellowing leaves",
      treatment: "Remove infected plants, crop rotation"
    },
    {
      name: "Leaf Spot",
      crops: ["Corn", "Bean", "Lettuce"],
      symptoms: "Brown/black spots on leaves",
      treatment: "Copper-based fungicide, proper spacing"
    }
  ];

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisStep(0);
    
    const steps = [
      "Uploading image...",
      "Processing image...",
      "Analyzing patterns...", 
      "Identifying disease...",
      "Generating report..."
    ];
    
    steps.forEach((_, index) => {
      setTimeout(() => {
        setAnalysisStep(index + 1);
        if (index === steps.length - 1) {
          setTimeout(() => setIsAnalyzing(false), 500);
        }
      }, (index + 1) * 1000);
    });
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'treated': return <CheckCircle className="h-4 w-4 text-success" />;
      case 'pending': return <Clock className="h-4 w-4 text-secondary" />;
      default: return <XCircle className="h-4 w-4 text-destructive" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Disease Detection</h1>
          <p className="text-muted-foreground">AI-powered crop disease identification and treatment recommendations</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {detectionStats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
            className="hover-scale"
          />
        ))}
      </div>

      {/* Disease Detection Tool */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5 text-primary" />
            Disease Detection Scanner
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isAnalyzing && analysisStep === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Upload className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Plant Image</h3>
              <p className="text-muted-foreground mb-6">Take a photo or upload an image of your crop for AI analysis</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={simulateAnalysis} className="hover-scale">
                  <Camera className="h-4 w-4 mr-2" />
                  Take Photo
                </Button>
                <Button variant="outline" onClick={simulateAnalysis} className="hover-scale">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Image
                </Button>
              </div>
            </div>
          )}

          {isAnalyzing && (
            <div className="text-center py-12">
              <div className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-pulse">
                <Scan className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Analyzing Image...</h3>
              <Progress value={(analysisStep / 5) * 100} className="w-full max-w-md mx-auto mb-4" />
              <p className="text-muted-foreground">
                {analysisStep === 1 && "Uploading image..."}
                {analysisStep === 2 && "Processing image..."}
                {analysisStep === 3 && "Analyzing patterns..."}
                {analysisStep === 4 && "Identifying disease..."}
                {analysisStep === 5 && "Generating report..."}
              </p>
            </div>
          )}

          {!isAnalyzing && analysisStep === 5 && (
            <div className="space-y-6">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Disease detected with 92% confidence. Immediate treatment recommended.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Detection Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Disease:</span>
                      <Badge variant="destructive">Early Blight</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Crop:</span>
                      <span className="font-medium">Tomato</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Severity:</span>
                      <Badge variant="secondary">Medium</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Confidence:</span>
                      <span className="font-medium">92%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Treatment Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <p className="text-sm">Apply copper-based fungicide spray</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <p className="text-sm">Remove affected leaves immediately</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <p className="text-sm">Improve air circulation around plants</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <p className="text-sm">Apply preventive spray weekly</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => setAnalysisStep(0)} className="hover-scale">
                  Scan Another Plant
                </Button>
                <Button variant="outline" className="hover-scale">
                  Save Report
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Content Tabs */}
      <Tabs defaultValue="recent" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="recent">Recent Detections</TabsTrigger>
          <TabsTrigger value="diseases">Common Diseases</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="mt-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bug className="h-5 w-5 text-primary" />
                Recent Disease Detections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDetections.map((detection) => (
                  <div key={detection.id} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-4">
                      {getStatusIcon(detection.status)}
                      <div>
                        <h4 className="font-semibold text-foreground">{detection.crop}</h4>
                        <p className="text-sm text-muted-foreground">{detection.disease}</p>
                        <p className="text-xs text-muted-foreground">{detection.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={getSeverityColor(detection.severity)}>
                        {detection.severity}
                      </Badge>
                      <span className="text-sm font-medium">{detection.confidence}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diseases" className="mt-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                Common Plant Diseases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {commonDiseases.map((disease, index) => (
                  <Card key={index} className="border border-border/50 hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">{disease.name}</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-muted-foreground">Affects: </span>
                          <span>{disease.crops.join(", ")}</span>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Symptoms: </span>
                          <span>{disease.symptoms}</span>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Treatment: </span>
                          <span>{disease.treatment}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DiseaseDetection;