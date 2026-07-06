"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function HomeView() {
  return (
    <>
      <ScrollReveal><Hero /></ScrollReveal>
      <ScrollReveal delay={100}><About /></ScrollReveal>
      <ScrollReveal delay={100}><Expertise /></ScrollReveal>
      <ScrollReveal delay={100}><Products /></ScrollReveal>
      <ScrollReveal delay={100}><MilkingMachines /></ScrollReveal>
      <ScrollReveal delay={100}><ToolsAccessories /></ScrollReveal>
      <ScrollReveal delay={100}><AIToolKit /></ScrollReveal>
      <ScrollReveal delay={100}><SortedSemen /></ScrollReveal>
      <ScrollReveal delay={100}><DairyNutrition /></ScrollReveal>
      <ScrollReveal delay={100}><WhyChooseUs /></ScrollReveal>
      <ScrollReveal delay={100}><Contact /></ScrollReveal>
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
      <ScrollReveal delay={100}><DairyNutrition /></ScrollReveal>
      <ScrollReveal delay={100}><SortedSemen /></ScrollReveal>
    </>
  );
}

function ContactView() {
  return (
    <ScrollReveal><Contact /></ScrollReveal>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <main className="flex-grow overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/services" element={<ServicesView />} />
          <Route path="/why-choose" element={<WhyChooseView />} />
          <Route path="/contact" element={<ContactView />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppWidget />
    </Router>
  );
}
