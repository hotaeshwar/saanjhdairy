"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  CheckCircle2,
  X,
  ChevronRight,
  ChevronLeft,
  MoveRight,
  Scale,
  Activity,
  Heart,
  Droplet,
  Sparkles,
  ShieldCheck,
  Award,
  Milk,
  Thermometer,
  Truck,
  PhoneCall,
  Flame,
  Dna,
  ShieldAlert,
  CalendarDays,
  ClipboardCheck,
  Download,
  FileText
} from "lucide-react";
import { useTransition } from "./AppRouter";
import TypewriterHeading from "@/components/TypewriterHeading";

// Custom Saanjh Dairy logo overlay for nutrition bags
const SaanjhLogoOverlay = () => (
  <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 rounded-full px-2 py-0.5 shadow-md border border-slate-100 flex items-center justify-center pointer-events-none scale-[0.85] sm:scale-100">
    <div className="flex flex-col items-center leading-none">
      <span className="text-[6px] font-black tracking-wider text-[#003B8E]">SAANJH</span>
      <span className="text-[3px] font-black tracking-widest text-[#D90000] mt-0.5">DAIRY</span>
    </div>
  </div>
);

// Custom Icons for categories matching reference design
const FeedBagIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 20c-1.5 0-2-1-2-3V8c0-2 2-3 5-3h6c3 0 5 1 5 3v9c0 2-.5 3-2 3H6z" />
    <path d="M7 5c.5-1.5 2-2 5-2s4.5.5 5 2" />
    <path d="M8 8h8" />
    <circle cx="12" cy="14" r="2.5" />
    <path d="M12 12.5v3M10.5 14h3" />
  </svg>
);

const DropletLeafIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
    <path d="M14 11c1.5-.5 3 .5 3 2s-1.5 2-3 2.5" />
    <path d="M12 15a2 2 0 0 1 2-2" />
  </svg>
);

const MoleculeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3" />
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="12" cy="19.5" r="2.5" />
    <line x1="8.2" y1="8.2" x2="9.8" y2="9.8" />
    <line x1="15.8" y1="8.2" x2="14.2" y2="9.8" />
    <line x1="12" y1="17" x2="12" y2="15" />
  </svg>
);

const CowHeadIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Forehead/top head */}
    <path d="M8.5 6c1-.5 2-1 3.5-1s2.5.5 3.5 1" />
    {/* Horns */}
    <path d="M8.5 6c-.5-1.5-1.5-2.5-3-2" />
    <path d="M15.5 6c.5-1.5 1.5-2.5 3-2" />
    {/* Ears (drooping down and slightly out) */}
    <path d="M7.5 7C5.5 6 3.5 7.5 3 9.5s2.5 3 4 1.5" />
    <path d="M16.5 7c2-1 4 .5 4.5 2.5s-2.5 3-4 1.5" />
    {/* Head side outline */}
    <path d="M7.5 7l1 5.5c.3 1.5 1.5 2.5 3 2.5h1c1.5 0 2.7-1 3-2.5l1-5.5" />
    {/* Snout/Muzzle details */}
    <path d="M10 15h4v1.5c0 1.2-.8 2-2 2s-2-.8-2-2z" />
    {/* Nostrils */}
    <circle cx="11.2" cy="16.5" r="0.5" fill="currentColor" />
    <circle cx="12.8" cy="16.5" r="0.5" fill="currentColor" />
  </svg>
);

const SiloIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 10v11h8V10" />
    <path d="M6 10c0-4.5 8-4.5 8 0" />
    <line x1="10" y1="10" x2="10" y2="21" />
    <line x1="7" y1="13" x2="13" y2="13" />
    <line x1="7" y1="16" x2="13" y2="16" />
    <line x1="7" y1="19" x2="13" y2="19" />
    <path d="M14 17h2.5c.8 0 1.5.7 1.5 1.5V21" />
  </svg>
);

const ShieldCheckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

const StandingCowIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Back & Neck */}
    <path d="M4 10h11l2 2.5" />
    {/* Tail */}
    <path d="M4 10c-.8 0-1.2.6-1.2 2.5s.4 1 0 3" />
    {/* Head & Muzzle (facing right) */}
    <path d="M17 12.5l2-1h1.5v1.5l-1 1h-2.5" />
    {/* Ear & Horn */}
    <path d="M17.5 11.5l1-1.5" />
    <path d="M18.5 11l.5-1" />
    {/* Legs & Belly */}
    <path d="M5 10v7.5h1.5v-4.5h3.5c0 1 .5 1.5 1.2 1.5s1.2-.5 1.2-1.5h1.1v4.5h1.5v-4.5h1v4.5h1.5v-5" />
    {/* Cow chest/neck boundary */}
    <path d="M15 10c1 1 1 2 0 2.5" />
  </svg>
);

const CapsuleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="10.5" width="18" height="7" rx="3.5" transform="rotate(-45 12 14)" />
    <line x1="9" y1="11" x2="14" y2="16" />
  </svg>
);

const MilkChurnIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 3h6v2H9z" />
    <path d="M10 5v3h4V5" />
    <path d="M7 11c-1.5 0-2-1-2-2.5S6.5 6 8 8" />
    <path d="M17 11c1.5 0 2-1 2-2.5S17.5 6 16 8" />
    <path d="M8 8h8l1.5 3v9c0 1-.8 2-1.8 2H8.3C7.3 22 6.5 21 6.5 20v-9L8 8z" />
    <path d="M9 13h6" />
    <path d="M9 17h6" />
  </svg>
);

const FertilityIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 7c.8-.5 1.8-.8 3-.8s2.2.3 3 .8" />
    <path d="M8 8c-.4-1.2-1.2-2-2.4-1.6" />
    <path d="M16 8c.4-1.2 1.2-2 2.4-1.6" />
    <path d="M8.2 8.5l.8 4.5c.2 1.2 1.2 2 2.4 2h1.2c1.2 0 2.2-.8 2.4-2l.8-4.5" />
    <path d="M10 14h4v1c0 .8-.6 1.5-1.5 1.5h-1C10.6 16.5 10 15.8 10 15z" />
    <path d="M8 19h2.5l1.5-2.5 1.5 4 1.5-2.5H18" />
  </svg>
);


export default function DairyNutrition() {
  const { triggerTransition } = useTransition();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const categoryScrollRef = useRef(null);
  const [isCategoryPaused, setIsCategoryPaused] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const productDetailsModalRef = useRef(null);
  const consultationModalRef = useRef(null);

  // Automatic Carousel Auto-Scroll Effect for Nutrition Categories (no dots/arrows)
  useEffect(() => {
    const container = categoryScrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (isCategoryPaused) return;

      const cardStep = 144; // w-32 (128px) + gap-4 (16px)
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (maxScroll <= 0) return;

      if (container.scrollLeft >= maxScroll - 15) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardStep, behavior: "smooth" });
      }
    }, 2600);

    return () => clearInterval(interval);
  }, [isCategoryPaused]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRedirectUrl(window.location.origin + window.location.pathname + "?submitted=true");

      const queryParams = new URLSearchParams(window.location.search);
      if (queryParams.get("submitted") === "true") {
        setShowSuccessToast(true);
        // Clear query parameters
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, []);

  // Lock background scroll when modals are open
  useEffect(() => {
    if (isConsultationOpen || selectedProduct || selectedCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isConsultationOpen, selectedProduct, selectedCategory]);

  useEffect(() => {
    if (selectedProduct && productDetailsModalRef.current) {
      productDetailsModalRef.current.focus();
      productDetailsModalRef.current.scrollTop = 0;
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (isConsultationOpen && consultationModalRef.current) {
      consultationModalRef.current.focus();
      consultationModalRef.current.scrollTop = 0;
    }
  }, [isConsultationOpen]);

  const categories = [
    { name: "Mineral Mixture", desc: "Chelated trace minerals & vitamins", isImage: true, iconPath: "/images/flour.png" },
    { name: "Bypass Fat", desc: "Rumen-protected high energy lipids", icon: <DropletLeafIcon className="h-8 w-8" /> },
    { name: "Bypass Protein", desc: "High escape dietary amino acids", icon: <MoleculeIcon className="h-8 w-8" /> },
    { name: "Calf Starter", desc: "Early rumen development crumble", isImage: true, iconPath: "/images/cow.png" },
    { name: "Silage Additives", desc: "Fermentation boosters & stabilizers", isImage: true, iconPath: "/images/flour.png" },
    { name: "Toxin Binder", desc: "Broad-spectrum mycotoxin binder", icon: <ShieldCheckIcon className="h-8 w-8" /> },
    { name: "Dry Cow Supplement", desc: "Transition period support packs", isImage: true, iconPath: "/images/animal.png" },
    { name: "Vitamin & Bolus", desc: "Reproductive health capsules", isImage: true, iconPath: "/images/pill.png" },
  ];

  const featuredProducts = [
    {
      name: "Saanjh Mineral Mixture",
      desc: "Complete mineral mixture for better growth & production.",
      tag: "MINERALS",
      label: "CHELATED FORMULA",
      labelColor: "bg-emerald-600",
      weight: "25kg",
      benefit: "Balanced Formula",
      image: "/images/feed-bag-green-mixture.png",
      className: "",
      details: "Saanjh Premium Mineral Mixture is enriched with highly bio-available chelated minerals, essential vitamins, and probiotics. It improves herd reproductive performance, increases conception rates, strengthens bones, and ensures consistent daily milk yield.",
    },
    {
      name: "Bypass Protein",
      desc: "High bypass protein for higher milk yield & better fertility.",
      tag: "PROTEIN",
      label: "HIGH BYPASS VALUE",
      labelColor: "bg-blue-600",
      weight: "25kg",
      benefit: "High Protein",
      image: "/images/feed-bag-blue-protein.png",
      className: "",
      details: "Saanjh Bypass Protein consists of high-quality proteins treated to escape rumen degradation. They are absorbed directly in the lower gut, leading to higher milk output, increased milk protein percentage, and better post-calving health.",
    },
    {
      name: "Bypass Fat",
      desc: "Protected fat to improve energy & body condition.",
      tag: "FAT",
      label: "RUMEN BYPASS FAT",
      labelColor: "bg-amber-500",
      weight: "20kg",
      benefit: "Protected Fat",
      image: "/images/feed-bag-yellow-fat.png",
      className: "",
      details: "Specially processed dry fats designed to bypass the rumen and deliver pure energy directly to high-producing dairy cows. Prevents post-calving metabolic issues, reduces weight loss, and improves fat content of milk.",
    },
    {
      name: "Calf Starter",
      desc: "Complete nutrition for healthy calf growth & immunity.",
      tag: "GROWTH",
      label: "CRUMBLE FOR CALVES",
      labelColor: "bg-teal-600",
      weight: "25kg",
      benefit: "Easy to Digest",
      image: "/images/feed-bag-green-starter.png",
      className: "",
      details: "A premium formulated starter crumble feed for young calves from 2 weeks of age. Boosts early development of rumen papillae, enhances daily weight gain, and strengthens structural immune defenses.",
    },
    {
      name: "Energy Booster",
      desc: "High energy supplement for peak milk production.",
      tag: "ENERGY",
      label: "GLUCOGENIC ENERGY",
      labelColor: "bg-orange-500",
      weight: "25kg",
      benefit: "High Energy",
      image: "/images/feed-bag-orange-energy.png",
      className: "",
      details: "A concentrated glucogenic energy supplement that provides instant glucose precursor supply. Prevents risk of clinical and subclinical ketosis, optimizes liver health, and supports high lactation persistence.",
    },
    {
      name: "Toxin Binder",
      desc: "Binds mycotoxins & improves animal performance.",
      tag: "SHIELD",
      label: "MYCOTOXIN CONTROL",
      labelColor: "bg-purple-600",
      weight: "1kg / 5kg",
      benefit: "Mycotoxin Control",
      image: "/images/feed-bag-purple-binder.png",
      className: "",
      details: "A premium multi-action toxin binder combining activated clays, yeast cell wall extracts, and organic acids. Effectively neutralizes a broad range of mycotoxins in feed, protecting the liver, optimizing milk safety, and boosting daily performance.",
    },
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#0C1E3A] flex flex-col items-center justify-center">
        {/* Outer glowing pulsing circle */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-20 h-20 rounded-full border-4 border-[#38BDF8]/10 animate-ping" />
          <div className="absolute w-16 h-16 rounded-full border-4 border-t-[#38BDF8] border-r-transparent border-l-transparent border-b-transparent animate-spin" />

          <div className="w-12 h-12 bg-[#003B8E] rounded-full flex items-center justify-center shadow-lg border border-white/10">
            <Sparkles className="h-6 w-6 text-[#38BDF8] animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      {/* Toast Notification */}
      {showSuccessToast && (
        <div className="fixed bottom-5 right-5 z-[10000] bg-emerald-600 text-white rounded-2xl p-4 shadow-2xl flex items-center space-x-3 max-w-sm animate-bounce">
          <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0" />
          <div>
            <div className="font-bold">Inquiry Submitted!</div>
            <div className="text-xs opacity-90">Thank you! We will get in touch with you shortly.</div>
          </div>
          <button onClick={() => setShowSuccessToast(false)} className="text-white hover:opacity-85">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Hero Banner Section */}
      <section className="relative min-h-[520px] sm:min-h-[480px] lg:h-[420px] bg-[#f5f7f4] overflow-hidden flex items-center py-8 sm:py-10 lg:py-0">
        {/* Right Side Image Container (Desktop only) - Confined to right 55% to prevent zoom/crop */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] select-none hidden lg:block">
          <Image
            src="/images/nutrition-hero-bg.png"
            alt="Dairy Nutrition Solutions"
            fill
            priority
            className="object-cover object-bottom"
          />
          {/* Fade gradient to blend left edge of image into the solid beige bg */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f5f7f4] to-transparent z-10" />
        </div>

        {/* Mobile Background Image (full width with opacity) */}
        <div className="absolute inset-0 select-none lg:hidden">
          <Image
            src="/images/nutrition-hero-bg.png"
            alt="Dairy Nutrition Solutions"
            fill
            priority
            className="object-cover object-bottom opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f7f4] via-[#f5f7f4]/80 to-transparent z-10" />
        </div>

        {/* Hero Content (Floating over background) */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:pl-16 lg:pr-8 w-full flex items-center">
          <div className="max-w-xl lg:max-w-[48%] space-y-4">
            {/* Emerald Subtitle */}
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#1b5e20]">
              PREMIUM NUTRITION
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight">
              <TypewriterHeading text="BETTER NUTRITION. BETTER PRODUCTION." />
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
              Balanced nutrition for healthier animals, higher milk yield and better profitability.
            </p>

            {/* Inline Icon Badges Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-[10px] sm:text-xs font-bold text-slate-800">
              <div className="flex items-center space-x-1.5">
                <CowHeadIcon className="h-4.5 w-4.5 text-[#1b5e20] flex-shrink-0" />
                <span>Balanced Nutrition</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-slate-200" />
              <div className="flex items-center space-x-1.5">
                <MilkChurnIcon className="h-4.5 w-4.5 text-[#1b5e20] flex-shrink-0" />
                <span>Higher Milk Production</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-slate-200" />
              <div className="flex items-center space-x-1.5">
                <ShieldCheckIcon className="h-4.5 w-4.5 text-[#1b5e20] flex-shrink-0" />
                <span>Better Health & Immunity</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-slate-200" />
              <div className="flex items-center space-x-1.5">
                <FertilityIcon className="h-4.5 w-4.5 text-[#1b5e20] flex-shrink-0" />
                <span>Improved Fertility</span>
              </div>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-4">
              <a
                href="#featured-products"
                className="rounded-lg bg-[#1b5e20] hover:bg-[#0f3d14] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <ClipboardCheck className="h-4.5 w-4.5" />
                Explore Nutrition Products
              </a>
              <a
                href="/Dairy-Brochure.pdf"
                download="Dairy-Brochure.pdf"
                className="rounded-lg border border-[#1b5e20] bg-white/80 hover:bg-[#1b5e20]/5 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#1b5e20] shadow-sm transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Download className="h-4.5 w-4.5" />
                Download Nutrition Guide
              </a>
              <a
                href="/Kemin-product-list.pdf"
                download="Kemin-product-list.pdf"
                className="rounded-lg border border-[#1b5e20] bg-white/80 hover:bg-[#1b5e20]/5 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#1b5e20] shadow-sm transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <FileText className="h-4.5 w-4.5 text-[#1b5e20]" />
                Kemin Product List
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-emerald-600" />
              <TypewriterHeading text="Our Nutrition Categories" />
              <span className="h-[2px] w-8 bg-emerald-600" />
            </h3>
          </div>

          {/* Categories Automatic Carousel Auto-Scroll Row (no dots or arrow keys) */}
          <div
            ref={categoryScrollRef}
            onMouseEnter={() => setIsCategoryPaused(true)}
            onMouseLeave={() => setIsCategoryPaused(false)}
            onTouchStart={() => setIsCategoryPaused(true)}
            onTouchEnd={() => setIsCategoryPaused(false)}
            className="flex gap-4 overflow-x-auto pb-2 justify-start xl:justify-center select-none px-4 md:px-8 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat, idx) => {
              const isActive = selectedCategory?.name === cat.name;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedCategory(isActive ? null : cat)}
                  className={`flex-shrink-0 w-32 border rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 text-center cursor-pointer group ${isActive ? 'border-emerald-600 bg-emerald-50/20 shadow-premium' : 'bg-white border-slate-100 hover:border-emerald-600'}`}
                >
                  <div className={`h-12 w-12 mx-auto flex items-center justify-center transition-all duration-300 ${isActive ? 'text-emerald-600 scale-110' : 'text-emerald-700 group-hover:text-emerald-600 group-hover:scale-110'}`}>
                    {cat.isImage ? (
                      <Image
                        src={cat.iconPath}
                        alt={cat.name}
                        width={32}
                        height={32}
                        className={`object-contain category-image-icon ${isActive ? 'active' : ''}`}
                      />
                    ) : cat.icon}
                  </div>
                  <h4 className="text-xs font-extrabold text-slate-800 mt-3 leading-tight line-clamp-2 h-8 flex items-center justify-center">
                    {cat.name}
                  </h4>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center mb-12">
            <div className="space-y-1">
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-600 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Featured Products
              </span>
              <h2 className="text-2xl font-black text-navy-blue uppercase">
                <TypewriterHeading text="Our Featured Nutrition Products" />
              </h2>
            </div>

            <button
              disabled
              className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-400 flex items-center gap-1.5 cursor-not-allowed opacity-60"
            >
              View All Products
              <MoveRight className="h-3.5 w-3.5 text-slate-400" />
            </button>
          </div>

          {/* Grid of Featured Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {featuredProducts.map((p, idx) => (
              <div
                key={idx}
                className="flex flex-col border border-slate-100 rounded-2xl bg-white shadow-premium hover:shadow-xl overflow-hidden transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative aspect-[3/4] w-full bg-slate-50 border-b border-slate-100 flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className={`object-contain ${p.className || ""}`}
                      sizes="(max-width: 768px) 100vw, 20vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-grow flex flex-col justify-between space-y-4 text-center">
                  <div className="space-y-1">
                    <h4 className="text-xs font-black text-navy-blue line-clamp-1 leading-snug uppercase">
                      {p.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-bold line-clamp-2 h-7">{p.desc}</p>

                    {/* Tags */}
                    <div className="flex gap-1 justify-center pt-1 flex-wrap">
                      <span className="bg-slate-50 border border-slate-100 text-slate-700 text-[8px] font-black uppercase px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                        <Scale className="h-2.5 w-2.5 text-emerald-600 flex-shrink-0" />
                        {p.weight}
                      </span>
                      <span className="bg-slate-50 border border-slate-100 text-slate-700 text-[8px] font-black uppercase px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                        <CheckCircle2 className="h-2.5 w-2.5 text-emerald-600 flex-shrink-0" />
                        {p.benefit}
                      </span>
                    </div>
                  </div>

                  {/* Detail Trigger */}
                  <button
                    onClick={() => setSelectedProduct(p)}
                    className="w-full border border-emerald-600 hover:bg-emerald-600 text-emerald-600 hover:text-white rounded-lg py-2.5 text-[10px] font-black transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
                    <MoveRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Nutrition That Makes a Difference */}
      <section className="py-16 bg-[#EEF4FC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h3 className="text-xl sm:text-2xl font-black text-navy-blue uppercase">Nutrition That Makes a Difference</h3>
            <p className="text-xs text-slate-500 font-bold">Scientific formulation for visible improvements in health, growth, and production.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Milk className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs sm:text-sm font-black text-slate-800">Higher Milk Yield</h4>
                <p className="text-[10px] text-slate-400 font-semibold leading-tight">Improves feed efficiency & increases milk yield.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Dna className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs sm:text-sm font-black text-slate-800">Better Fertility</h4>
                <p className="text-[10px] text-slate-400 font-semibold leading-tight">Balanced nutrients for better reproduction.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs sm:text-sm font-black text-slate-800">Strong Immunity</h4>
                <p className="text-[10px] text-slate-400 font-semibold leading-tight">Strengthens immunity for disease resistance.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Activity className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs sm:text-sm font-black text-slate-800">Healthy Rumen</h4>
                <p className="text-[10px] text-slate-400 font-semibold leading-tight">Supports rumen health & better digestion.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Nutrition Programs for Every Stage */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-emerald-600" />
              Nutrition Programs for Every Stage
              <span className="h-[2px] w-6 bg-emerald-600" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="flex flex-col border border-slate-100 rounded-3xl bg-white shadow-premium hover:shadow-xl overflow-hidden transition-all duration-300">
              <div className="relative aspect-[16/10] w-full bg-slate-50 border-b border-slate-100">
                <Image src="/images/nutrition-calf.png" alt="Calf Nutrition" fill className="object-cover" />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[9px] font-black uppercase text-emerald-600">Stage 1</span>
                  <h4 className="text-xs sm:text-sm font-black text-navy-blue uppercase">CALF NUTRITION</h4>
                  <p className="text-[10px] text-slate-400 font-bold leading-normal">Complete & balanced nutrition for strong start and healthy growth.</p>
                  <ul className="space-y-1 text-[9px] font-black text-slate-600 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-600" /> Better Growth</li>
                    <li className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-600" /> Stronger Immunity</li>
                    <li className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-600" /> Healthy Development</li>
                  </ul>
                </div>
                <button onClick={() => setIsConsultationOpen(true)} className="w-full text-center text-xs font-black text-emerald-600 hover:text-emerald-700 flex items-center justify-center gap-1 cursor-pointer">
                  Learn More <MoveRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col border border-slate-100 rounded-3xl bg-white shadow-premium hover:shadow-xl overflow-hidden transition-all duration-300">
              <div className="relative aspect-[16/10] w-full bg-slate-50 border-b border-slate-100">
                <Image src="/images/nutrition-heifer.png" alt="Heifer Nutrition" fill className="object-cover" />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[9px] font-black uppercase text-emerald-600">Stage 2</span>
                  <h4 className="text-xs sm:text-sm font-black text-navy-blue uppercase">HEIFER NUTRITION</h4>
                  <p className="text-[10px] text-slate-400 font-bold leading-normal">Optimized nutrition for better growth & early maturity.</p>
                  <ul className="space-y-1 text-[9px] font-black text-slate-600 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-600" /> Proper Body Development</li>
                    <li className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-600" /> Improved Fertility</li>
                    <li className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-600" /> Early Conception</li>
                  </ul>
                </div>
                <button onClick={() => setIsConsultationOpen(true)} className="w-full text-center text-xs font-black text-emerald-600 hover:text-emerald-700 flex items-center justify-center gap-1 cursor-pointer">
                  Learn More <MoveRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col border border-slate-100 rounded-3xl bg-white shadow-premium hover:shadow-xl overflow-hidden transition-all duration-300">
              <div className="relative aspect-[16/10] w-full bg-slate-50 border-b border-slate-100">
                <Image src="/images/nutrition-lactating-cow.png" alt="Lactating Cow" fill className="object-cover" />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[9px] font-black uppercase text-emerald-600">Stage 3</span>
                  <h4 className="text-xs sm:text-sm font-black text-navy-blue uppercase">LACTATING COW NUTRITION</h4>
                  <p className="text-[10px] text-slate-400 font-bold leading-normal">High performance nutrition for more milk & better fat.</p>
                  <ul className="space-y-1 text-[9px] font-black text-slate-600 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-600" /> Higher Milk Yield</li>
                    <li className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-600" /> Better Feed Conversion</li>
                    <li className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-600" /> Persistent Peak Lactation</li>
                  </ul>
                </div>
                <button onClick={() => setIsConsultationOpen(true)} className="w-full text-center text-xs font-black text-emerald-600 hover:text-emerald-700 flex items-center justify-center gap-1 cursor-pointer">
                  Learn More <MoveRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col border border-slate-100 rounded-3xl bg-white shadow-premium hover:shadow-xl overflow-hidden transition-all duration-300">
              <div className="relative aspect-[16/10] w-full bg-slate-50 border-b border-slate-100">
                <Image src="/images/nutrition-dry-cow.png" alt="Dry Cow" fill className="object-cover" />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[9px] font-black uppercase text-emerald-600">Stage 4</span>
                  <h4 className="text-xs sm:text-sm font-black text-navy-blue uppercase">DRY COW NUTRITION</h4>
                  <p className="text-[10px] text-slate-400 font-bold leading-normal">Prepares cow for next lactation & maintains body condition.</p>
                  <ul className="space-y-1 text-[9px] font-black text-slate-600 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-600" /> Better Transition</li>
                    <li className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-600" /> Higher Next Lactation</li>
                    <li className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-600" /> Healthy Safe Calving</li>
                  </ul>
                </div>
                <button onClick={() => setIsConsultationOpen(true)} className="w-full text-center text-xs font-black text-emerald-600 hover:text-emerald-700 flex items-center justify-center gap-1 cursor-pointer">
                  Learn More <MoveRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom Consultation Ribbon */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-150 overflow-hidden shadow-premium grid grid-cols-1 lg:grid-cols-12 bg-slate-50">

            {/* Left Expert Avatar Card */}
            <div className="lg:col-span-4 p-8 bg-[#0C1E3A] text-white flex items-center gap-5 border-r border-slate-100">
              <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
                <Image src="/images/nutrition-expert-avatar.png" alt="Nutrition Expert" fill className="object-cover" />
              </div>
              <div className="space-y-2">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-black uppercase text-white leading-tight">Need Help Choosing the Right Nutrition?</h4>
                  <p className="text-[10px] text-slate-300 font-medium">Our animal nutrition experts are here to help you select the best products.</p>
                </div>
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="rounded-xl bg-[#D90000] hover:bg-red-700 text-white px-4 py-2.5 text-[10px] font-black shadow-md flex items-center gap-1 transition-all duration-300 cursor-pointer"
                >
                  Talk to Our Nutrition Expert
                  <MoveRight className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Right 4 Columns Values */}
            <div className="lg:col-span-8 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">

              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-emerald-600">
                  <Award className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide">Expert Guidance</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">Personalized supplements solutions</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-emerald-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide">Quality Assured</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">Tested & proven supplements</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-emerald-600">
                  <Truck className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide">Timely Delivery</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">Fast & safe dispatch to farms</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-emerald-600">
                  <PhoneCall className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide">Customer Support</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">24/7 dedicated call line</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Consultation Modal (Uses FormSubmit Native POST integration) */}
      {isConsultationOpen && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setIsConsultationOpen(false)}
        >
          <div className="flex min-h-full items-start justify-center p-4">
            <div
              ref={consultationModalRef}
              tabIndex={-1}
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100/80 z-10 transform scale-100 transition-all duration-300 focus:outline-none my-8"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                onClick={() => setIsConsultationOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-navy-blue hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <form
                action="https://formsubmit.co/info@saanjhdairysolutions.com"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="New Dairy Nutrition Consultation Inquiry!" />
                <input type="hidden" name="_next" value={redirectUrl} />
                <input type="hidden" name="_captcha" value="false" />

                <div className="space-y-1.5">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-600">
                    Consultation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#003B8E] uppercase leading-tight">
                    Nutrition Consultation
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Leave your contact details and our nutrition specialist will get back to you with custom feed recipes and recommendations.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-emerald-600 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-emerald-600 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-navy-blue hover:bg-emerald-600 text-white py-3.5 text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Send Inquiry
                </button>
              </form>

            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Product Details Modal */}
      {selectedProduct && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="flex min-h-full items-start justify-center p-4">
            <div
              ref={productDetailsModalRef}
              tabIndex={-1}
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100/80 z-10 transform scale-100 transition-all duration-300 focus:outline-none my-8"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#003B8E] hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-5">

                <div className="space-y-1.5">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-600">
                    Product Specifications
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-navy-blue uppercase leading-tight">
                    {selectedProduct.name}
                  </h3>
                  <div className="text-xs text-slate-400 font-bold uppercase">{selectedProduct.tag}</div>
                </div>

                {/* Image */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center p-4">
                  <div className="relative w-44 h-44">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className={`object-contain ${selectedProduct.className || ""}`}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <SaanjhLogoOverlay />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider">Features & Scientific Benefits</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {selectedProduct.details}
                  </p>

                  {/* Detailed Stats */}
                  <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 text-center text-xs font-bold mt-2">
                    <div className="bg-slate-50 rounded-xl p-2.5">
                      <div className="text-[10px] text-slate-400 uppercase">Available Packing</div>
                      <div className="text-slate-700 text-sm mt-1">{selectedProduct.weight}</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-2.5">
                      <div className="text-[10px] text-slate-400 uppercase">Core Benefit</div>
                      <div className="text-emerald-600 text-sm mt-1">{selectedProduct.benefit}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="w-full rounded-xl border border-slate-200 hover:bg-slate-50 py-3 text-xs font-bold text-slate-500 transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Category Details Modal */}
      {selectedCategory && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setSelectedCategory(null)}
        >
          <div className="flex min-h-full items-start justify-center p-4">
            <div
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100/80 z-10 transform scale-100 transition-all duration-300 focus:outline-none my-8"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-navy-blue hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-600">
                    Category Overview
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-navy-blue uppercase leading-tight">
                    {selectedCategory.name}
                  </h3>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider">Scientific Description</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {selectedCategory.name === "Mineral Mixture" && "Chelated mineral mixtures offer much higher biological utilization compared to inorganic minerals. Essential for structural health, enzyme synthesis, hormone balance, and consistent daily reproductive functions."}
                    {selectedCategory.name === "Bypass Fat" && "Bypass fat delivers dense energy directly to the small intestine without disturbing rumen microbial fermentation. Extremely vital for high yield cows during early lactation to combat negative energy balance."}
                    {selectedCategory.name === "Bypass Protein" && "Highly digestible proteins processed to escape degradation in the rumen. Delivers balanced amino acids directly to the abomasum for maximizing milk protein syntheses."}
                    {selectedCategory.name === "Calf Starter" && "A nutrient-rich feed starter specifically balanced to stimulate early growth of rumen papillae, accelerating calves transition to solid feeds and promoting fast, safe weaning."}
                    {selectedCategory.name === "Silage Additives" && "Natural inoculants and stabilizers that drive lactic acid fermentation, quickly dropping pH, preventing aerobic spoilage, and maximizing nutrient retention of stored silage."}
                    {selectedCategory.name === "Toxin Binder" && "Specially structured clays and organic components that lock onto mold toxins (Aflatoxins, T-2) inside the digestive tract, preventing absorption and protecting organ health."}
                    {selectedCategory.name === "Dry Cow Supplement" && "High-potency transition formulas administered during the critical dry period. Minimizes risks of milk fever, ketosis, and retained placenta post calving."}
                    {selectedCategory.name === "Vitamin & Bolus" && "Concentrated reproductive health boluses packed with organic Vitamin E, A, and Selenium. Boosts uterine tone, supports heat cycle regulation, and helps achieve optimal calving intervals."}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="w-full rounded-xl border border-slate-200 hover:bg-slate-50 py-3 text-xs font-bold text-slate-500 transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}
