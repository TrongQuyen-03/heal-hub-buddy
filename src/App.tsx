import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MedicalSidebar } from "@/components/medical-sidebar";
import { PatientSidebar } from "@/components/patient-sidebar";
import { MedicalChatbot } from "@/components/medical-chatbot";
import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";

// Public pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin/Doctor pages
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import PatientForm from "./pages/PatientForm";
import Appointments from "./pages/Appointments";

// Patient pages
import PatientDashboard from "./pages/patient/PatientDashboard";
import PatientProfile from "./pages/patient/PatientProfile";
import PatientAppointments from "./pages/patient/PatientAppointments";
import PatientMedicalRecords from "./pages/patient/PatientMedicalRecords";

const queryClient = new QueryClient();

const App = () => {
  const [isChatbotMinimized, setIsChatbotMinimized] = useState(true);
  
  // Mock user role - in real app this would come from auth context
  // Change this value to test different layouts: "public", "patient", "admin", "doctor"
  const getUserRole = (): "public" | "patient" | "admin" | "doctor" => "public";
  const userRole = getUserRole();
  const isPublic = userRole === "public";
  const isPatient = userRole === "patient";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {isPublic ? (
            // Public Layout - No sidebar
            <div className="min-h-screen flex flex-col bg-background">
              <PublicHeader />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<div>Login Page</div>} />
                  <Route path="/register" element={<div>Register Page</div>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <PublicFooter />
            </div>
          ) : (
            // Admin/Patient Layout - With sidebar
            <SidebarProvider>
              <div className="min-h-screen flex w-full bg-background">
                {/* Conditional Sidebar based on user role */}
                {isPatient ? <PatientSidebar /> : <MedicalSidebar />}
                
                <main className="flex-1 flex flex-col">
                  <header className="h-16 border-b bg-card flex items-center px-6">
                    <SidebarTrigger />
                    <div className="flex-1" />
                    <div className="text-sm text-muted-foreground">
                      {isPatient ? "Hệ thống bệnh nhân MedicalHope" : "Trung tâm y tế MedicalHope"}
                    </div>
                  </header>
                  <div className="flex-1 p-6 overflow-auto">
                    <Routes>
                      {isPatient ? (
                        // Patient routes
                        <>
                          <Route path="/" element={<PatientDashboard />} />
                          <Route path="/patient" element={<PatientDashboard />} />
                          <Route path="/patient/profile" element={<PatientProfile />} />
                          <Route path="/patient/appointments" element={<PatientAppointments />} />
                          <Route path="/patient/medical-records" element={<PatientMedicalRecords />} />
                          <Route path="/patient/prescriptions" element={<div>Prescriptions Page</div>} />
                          <Route path="/patient/health-tracking" element={<div>Health Tracking Page</div>} />
                          <Route path="/patient/messages" element={<div>Messages Page</div>} />
                          <Route path="/patient/settings" element={<div>Settings Page</div>} />
                          <Route path="*" element={<NotFound />} />
                        </>
                      ) : (
                        // Admin/Doctor routes
                        <>
                          <Route path="/" element={<Dashboard />} />
                          <Route path="/patients" element={<Patients />} />
                          <Route path="/patients/new" element={<PatientForm />} />
                          <Route path="/appointments" element={<Appointments />} />
                          <Route path="/about" element={<About />} />
                          <Route path="*" element={<NotFound />} />
                        </>
                      )}
                    </Routes>
                  </div>
                </main>
                
                {/* Medical Chatbot - only show for authenticated users */}
                <MedicalChatbot
                  isMinimized={isChatbotMinimized}
                  onToggleMinimize={() => setIsChatbotMinimized(!isChatbotMinimized)}
                />
              </div>
            </SidebarProvider>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
