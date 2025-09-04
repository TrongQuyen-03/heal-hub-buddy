import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MedicalSidebar } from "@/components/medical-sidebar";
import { MedicalChatbot } from "@/components/medical-chatbot";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import PatientForm from "./pages/PatientForm";
import Appointments from "./pages/Appointments";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isChatbotMinimized, setIsChatbotMinimized] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="min-h-screen flex w-full bg-background">
              <MedicalSidebar />
              <main className="flex-1 flex flex-col">
                <header className="h-16 border-b bg-card flex items-center px-6">
                  <SidebarTrigger />
                  <div className="flex-1" />
                  <div className="text-sm text-muted-foreground">
                    Trung tâm y tế MedicalHope
                  </div>
                </header>
                <div className="flex-1 p-6 overflow-auto">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/patients" element={<Patients />} />
                    <Route path="/patients/new" element={<PatientForm />} />
                    <Route path="/appointments" element={<Appointments />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </main>
              
              {/* Medical Chatbot */}
              <MedicalChatbot
                isMinimized={isChatbotMinimized}
                onToggleMinimize={() => setIsChatbotMinimized(!isChatbotMinimized)}
              />
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
