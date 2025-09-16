import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "@/components/layout/Layout";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Weather from "./pages/Weather";
import SoilHealth from "./pages/SoilHealth";
import CropRecommendations from "./pages/CropRecommendations";
import MandiPrices from "./pages/MandiPrices";
import AIAssistant from "./pages/AIAssistant";
import Calendar from "./pages/Calendar";
import FertilizerPlanner from "./pages/FertilizerPlanner";
import DiseaseDetection from "./pages/DiseaseDetection";
import Schemes from "./pages/Schemes";
import SoilRestoration from "./pages/SoilRestoration";
import HybridCrops from "./pages/HybridCrops";
import FarmerCommunity from "./pages/FarmerCommunity";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="farmwise-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/soil" element={<SoilHealth />} />
              <Route path="/crops" element={<CropRecommendations />} />
              <Route path="/mandi" element={<MandiPrices />} />
              <Route path="/fertilizer" element={<FertilizerPlanner />} />
              <Route path="/disease" element={<DiseaseDetection />} />
              <Route path="/schemes" element={<Schemes />} />
              <Route path="/soil-restoration" element={<SoilRestoration />} />
              <Route path="/hybrid-crops" element={<HybridCrops />} />
              <Route path="/community" element={<FarmerCommunity />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/assistant" element={<AIAssistant />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
