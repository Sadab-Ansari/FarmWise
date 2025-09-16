import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Building2, 
  HandHeart, 
  TrendingUp, 
  Users, 
  Search,
  MapPin,
  Calendar,
  IndianRupee,
  FileText,
  ExternalLink,
  Clock,
  CheckCircle2
} from "lucide-react";

const Schemes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedState, setSelectedState] = useState("all");

  const schemeStats = [
    { title: "Total Schemes", value: "247", icon: Building2, trend: { value: 8, isPositive: true } },
    { title: "Active Applications", value: "32", icon: FileText, trend: { value: 12, isPositive: true } },
    { title: "Subsidies Received", value: "₹2.4L", icon: IndianRupee, trend: { value: 15, isPositive: true } },
    { title: "Success Rate", value: "87%", icon: TrendingUp, trend: { value: 5, isPositive: true } }
  ];

  const centralSchemes = [
    {
      id: 1,
      name: "PM-KISAN Samman Nidhi",
      description: "Direct income support to farmer families",
      amount: "₹6,000 per year",
      eligibility: "Small and marginal farmers",
      deadline: "2024-03-31",
      status: "active",
      category: "subsidy",
      state: "national"
    },
    {
      id: 2,
      name: "Pradhan Mantri Fasal Bima Yojana",
      description: "Crop insurance scheme for farmers",
      amount: "Up to ₹2 lakh coverage",
      eligibility: "All farmers growing notified crops",
      deadline: "2024-02-15",
      status: "active",
      category: "insurance",
      state: "national"
    },
    {
      id: 3,
      name: "Kisan Credit Card Scheme",
      description: "Easy credit access for agricultural needs",
      amount: "Up to ₹3 lakh loan",
      eligibility: "All farmers with land ownership",
      deadline: "Ongoing",
      status: "active",
      category: "credit",
      state: "national"
    }
  ];

  const stateSchemes = [
    {
      id: 4,
      name: "Maharashtra Organic Farming Scheme",
      description: "Support for organic farming practices",
      amount: "₹50,000 per hectare",
      eligibility: "Farmers adopting organic methods",
      deadline: "2024-04-15",
      status: "active",
      category: "subsidy",
      state: "maharashtra"
    },
    {
      id: 5,
      name: "Punjab Solar Pump Scheme",
      description: "Subsidized solar water pumps",
      amount: "90% subsidy up to ₹4.5 lakh",
      eligibility: "Farmers with irrigation needs",
      deadline: "2024-05-30",
      status: "active",
      category: "technology",
      state: "punjab"
    },
    {
      id: 6,
      name: "Karnataka Drip Irrigation Subsidy",
      description: "Support for micro-irrigation systems",
      amount: "75% subsidy up to ₹1 lakh",
      eligibility: "Small and marginal farmers",
      deadline: "2024-06-10",
      status: "active",
      category: "irrigation",
      state: "karnataka"
    }
  ];

  const applicationProcess = [
    { step: 1, title: "Check Eligibility", description: "Verify scheme requirements and eligibility criteria" },
    { step: 2, title: "Gather Documents", description: "Collect required documents like Aadhaar, land records" },
    { step: 3, title: "Submit Application", description: "Apply online through official portal or visit office" },
    { step: 4, title: "Track Status", description: "Monitor application status and provide additional info if needed" },
    { step: 5, title: "Receive Benefits", description: "Get scheme benefits after approval and verification" }
  ];

  const myApplications = [
    { name: "PM-KISAN", status: "approved", amount: "₹6,000", date: "2024-01-15" },
    { name: "Solar Pump Subsidy", status: "pending", amount: "₹4,50,000", date: "2024-01-10" },
    { name: "Organic Certification", status: "under_review", amount: "₹25,000", date: "2024-01-08" }
  ];

  const allSchemes = [...centralSchemes, ...stateSchemes];

  const filteredSchemes = allSchemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || scheme.category === selectedCategory;
    const matchesState = selectedState === "all" || scheme.state === selectedState;
    
    return matchesSearch && matchesCategory && matchesState;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'default';
      case 'pending': return 'secondary';
      case 'under_review': return 'outline';
      default: return 'destructive';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle2 className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'under_review': return <FileText className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Government Schemes</h1>
          <p className="text-muted-foreground">Explore and apply for agricultural subsidies, loans, and support programs</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {schemeStats.map((stat, index) => (
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

      {/* Search and Filters */}
      <Card className="glass-card">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search schemes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="subsidy">Subsidies</SelectItem>
                <SelectItem value="insurance">Insurance</SelectItem>
                <SelectItem value="credit">Credit/Loans</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="irrigation">Irrigation</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger>
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                <SelectItem value="national">National</SelectItem>
                <SelectItem value="jharkhand">Jharkhand</SelectItem>
                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                <SelectItem value="punjab">Punjab</SelectItem>
                <SelectItem value="karnataka">Karnataka</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="browse" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="browse">Browse Schemes</TabsTrigger>
          <TabsTrigger value="applications">My Applications</TabsTrigger>
          <TabsTrigger value="process">Application Process</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredSchemes.map((scheme) => (
              <Card key={scheme.id} className="glass-card hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{scheme.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{scheme.description}</p>
                    </div>
                    <Badge variant="outline" className="capitalize">{scheme.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Amount:</span>
                      <p className="font-semibold text-primary">{scheme.amount}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Deadline:</span>
                      <p className="font-medium">{scheme.deadline}</p>
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <span className="text-muted-foreground">Eligibility:</span>
                    <p className="font-medium">{scheme.eligibility}</p>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1 hover-scale">
                      <FileText className="h-4 w-4 mr-2" />
                      Apply Now
                    </Button>
                    <Button variant="outline" size="sm" className="hover-scale">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="applications" className="mt-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                My Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myApplications.map((application, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border/50">
                    <div className="flex items-center gap-4">
                      {getStatusIcon(application.status)}
                      <div>
                        <h4 className="font-semibold text-foreground">{application.name}</h4>
                        <p className="text-sm text-muted-foreground">Applied on {application.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-semibold text-primary">{application.amount}</p>
                        <Badge variant={getStatusColor(application.status)} className="capitalize">
                          {application.status.replace('_', ' ')}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="process" className="mt-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HandHeart className="h-5 w-5 text-primary" />
                Application Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {applicationProcess.map((process, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {process.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{process.title}</h4>
                      <p className="text-muted-foreground text-sm">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our support team for assistance with applications or visit your local agriculture office.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="hover-scale">
                    <MapPin className="h-4 w-4 mr-2" />
                    Find Office
                  </Button>
                  <Button variant="outline" size="sm" className="hover-scale">
                    Contact Support
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Schemes;