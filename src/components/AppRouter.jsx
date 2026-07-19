"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Products from "@/components/Products";
import MilkingMachines from "@/components/MilkingMachines";
import ToolsAccessories from "@/components/ToolsAccessories";
import AIToolKit from "@/components/AIToolKit";
import SortedSemen from "@/components/SortedSemen";
import DairyNutrition from "@/components/DairyNutrition";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";
import Solutions from "@/components/Solutions";
import FarmSetup from "@/components/FarmSetup";
import DairyEquipment from "@/components/DairyEquipment";
import SuperGenetics from "@/components/SuperGenetics";
import SplashScreen from "@/components/SplashScreen";

// Create context for the parting transition
export const TransitionContext = createContext({
  triggerTransition: () => {},
  transition: { phase: "idle", target: null }
});

export function useTransition() {
  return useContext(TransitionContext);
}

function HomeView() {
  return (
    <>
      <ScrollReveal><Hero /></ScrollReveal>
      <ScrollReveal delay={100}><Solutions /></ScrollReveal>
    </>
  );
}

function AboutView() {
  return (
    <>
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal delay={100}><Expertise /></ScrollReveal>
    </>
  );
}

function ProductsView() {
  return (
    <>
      <ScrollReveal><Products /></ScrollReveal>
      <ScrollReveal delay={100}><MilkingMachines /></ScrollReveal>
    </>
  );
}

function ServicesView() {
  return (
    <>
      <ScrollReveal><Expertise /></ScrollReveal>
      <ScrollReveal delay={100}><ToolsAccessories /></ScrollReveal>
      <ScrollReveal delay={100}><AIToolKit /></ScrollReveal>
    </>
  );
}

function WhyChooseView() {
  return (
    <>
      <ScrollReveal><WhyChooseUs /></ScrollReveal>
      <ScrollReveal delay={100}><SortedSemen /></ScrollReveal>
    </>
  );
}

function ContactView() {
  return (
    <ScrollReveal><Contact /></ScrollReveal>
  );
}

function FarmSetupView() {
  return (
    <ScrollReveal><FarmSetup /></ScrollReveal>
  );
}

function DairyEquipmentView() {
  return (
    <ScrollReveal><DairyEquipment /></ScrollReveal>
  );
}

function SuperGeneticsView() {
  return (
    <ScrollReveal><SuperGenetics /></ScrollReveal>
  );
}

function DairyNutritionView() {
  return (
    <ScrollReveal><DairyNutrition /></ScrollReveal>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [transition, setTransition] = useState({
    phase: "idle",
    target: null,
  });

  const triggerTransition = (targetPath) => {
    if (transition.phase !== "idle") return;

    // Phase 1: Close transition panels
    setTransition({ phase: "closing", target: targetPath });

    // Phase 2: Route change when screen is fully covered (held extra for buffering spinner visibility)
    setTimeout(() => {
      navigate(targetPath);
      window.scrollTo(0, 0);

      // Phase 3: Part doors open
      setTransition({ phase: "opening", target: null });

      // Phase 4: Reset transition back to idle
      setTimeout(() => {
        setTransition({ phase: "idle", target: null });
      }, 750);
    }, 1400);
  };

  return (
    <TransitionContext.Provider value={{ triggerTransition, transition }}>
      <SplashScreen />
      <Navbar />
      <main className="flex-grow overflow-x-hidden relative">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/farm-setup" element={<FarmSetupView />} />
          <Route path="/dairy-equipment" element={<DairyEquipmentView />} />
          <Route path="/super-genetics" element={<SuperGeneticsView />} />
          <Route path="/dairy-nutrition" element={<DairyNutritionView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/services" element={<ServicesView />} />
          <Route path="/why-choose" element={<WhyChooseView />} />
          <Route path="/contact" element={<ContactView />} />
        </Routes>

        {/* Global Parting Doors Transition Overlay */}
        <div
          className={`fixed inset-0 z-[9999] flex transition-opacity duration-500 ${
            transition.phase === "idle" ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"
          }`}
        >
          {/* Left Panel */}
          <div
            className={`w-1/2 h-full bg-[#0C1E3A] parting-door-left transition-transform duration-700 ease-in-out ${
              transition.phase === "closing" ? "translate-x-0" : "-translate-x-full"
            }`}
          />

          {/* Right Panel */}
          <div
            className={`w-1/2 h-full bg-[#0C1E3A] parting-door-right transition-transform duration-700 ease-in-out ${
              transition.phase === "closing" ? "translate-x-0" : "translate-x-full"
            }`}
          />

          {/* Buffering Spinner in the exact center */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center z-50 transition-all duration-300 ${
              transition.phase === "closing" ? "opacity-100 scale-100 delay-300" : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {/* Spinner Graphic */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-14 h-14 rounded-full border-4 border-[#38BDF8]/10 animate-ping" />
              <div className="absolute w-12 h-12 rounded-full border-4 border-t-[#38BDF8] border-r-transparent border-l-transparent border-b-transparent animate-spin" />
              
              <div className="w-8 h-8 bg-[#003B8E] rounded-full flex items-center justify-center shadow-lg border border-white/10">
                <Settings className="h-4.5 w-4.5 text-[#38BDF8] animate-spin" style={{ animationDuration: '4s' }} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </TransitionContext.Provider>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

