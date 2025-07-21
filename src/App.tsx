import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import OfficeCleaningPage from "./pages/OfficeCleaningPage";
import ElectrostaticDisinfectionPage from "./pages/ElectrostaticDisinfectionPage";
import JanitorialServicesPage from "./pages/JanitorialServicesPage";
import SupplyRestockingPage from "./pages/SupplyRestockingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/office-cleaning" element={<OfficeCleaningPage />} />
          <Route path="/electrostatic-disinfection" element={<ElectrostaticDisinfectionPage />} />
          <Route path="/janitorial-services" element={<JanitorialServicesPage />} />
          <Route path="/supply-restocking" element={<SupplyRestockingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
