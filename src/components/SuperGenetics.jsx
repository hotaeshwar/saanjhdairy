"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { 
  Dna,
  TrendingUp,
  ShieldCheck,
  Coins,
  Globe,
  Snowflake,
  Activity,
  Award,
  ChevronRight,
  ChevronLeft,
  X,
  CheckCircle2,
  Headphones,
  MoveRight,
  FileText,
  Download,
  UserCheck,
  Users,
  Handshake,
  Syringe
} from "lucide-react";
import { useTransition } from "./AppRouter";
import TypewriterHeading from "@/components/TypewriterHeading";

const CowIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    {/* Head outline */}
    <path d="M12 21c-2.5 0-4-1.5-4-4v-5h8v5c0 2.5-1.5 4-4 4z" />
    {/* Top head bridge */}
    <path d="M8 12V8a4 4 0 0 1 8 0v4" />
    {/* Horns curving outward and upward */}
    <path d="M7 8C6 6.5 4.5 5 4 2.5c2.5.5 3.5 2 4 4.5" />
    <path d="M17 8C18 6.5 19.5 5 20 2.5c-2.5.5-3.5 2-4 4.5" />
    {/* Ears hanging downwards and out */}
    <path d="M3 9.5c.5-.5 2 .5 3 2.5" />
    <path d="M21 9.5c-.5-.5-2 .5-3 2.5" />
    {/* Nostrils */}
    <line x1="10.5" y1="17.5" x2="10.5" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="13.5" y1="17.5" x2="13.5" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Count-up stats counter component triggered on scroll visibility
function Counter({ value, suffix, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const end = parseInt(value, 10);
    if (isNaN(end)) {
      setCount(value);
      return;
    }

    const totalSteps = 50;
    const stepTime = duration / totalSteps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      // Smooth ease-out cubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeProgress * end);
      
      if (step >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(currentCount);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, value, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const ExpertIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    {/* Outer headphones band */}
    <path d="M6 11c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    {/* Head profile */}
    <circle cx="12" cy="11" r="3.5" />
    {/* Ear cups */}
    <rect x="4.5" y="9.5" width="2" height="3" rx="1" />
    <rect x="17.5" y="9.5" width="2" height="3" rx="1" />
    {/* Mic wire */}
    <path d="M18.5 12c0 1.5-1 2.5-2.5 2.5" />
    {/* Shoulders */}
    <path d="M5 20a7 7 0 0 1 14 0" />
  </svg>
);

export default function SuperGenetics() {
  const { triggerTransition } = useTransition();
  const [selectedBull, setSelectedBull] = useState(null);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isDownloadsModalOpen, setIsDownloadsModalOpen] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  const bullDetailsModalRef = useRef(null);
  const consultationModalRef = useRef(null);
  const downloadsModalRef = useRef(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    // Simulate loading/buffering transition
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(loadingTimer);
  }, []);

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
    if (isConsultationOpen || selectedBull || selectedSolution || isDownloadsModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isConsultationOpen, selectedBull, selectedSolution, isDownloadsModalOpen]);

  useEffect(() => {
    if (selectedBull && bullDetailsModalRef.current) {
      bullDetailsModalRef.current.focus();
      bullDetailsModalRef.current.scrollTop = 0;
    }
  }, [selectedBull]);

  useEffect(() => {
    if (isConsultationOpen && consultationModalRef.current) {
      consultationModalRef.current.focus();
      consultationModalRef.current.scrollTop = 0;
    }
  }, [isConsultationOpen]);

  const solutions = [
    { name: "HF (Holstein Friesian)", desc: "High milk yield & efficiency" },
    { name: "Jersey", desc: "High fat & protein yield" },
    { name: "Crossbred", desc: "Adaptability & productivity" },
    { name: "Indigenous Breeds", desc: "Disease resistance & fertility" },
    { name: "Sexed Semen", desc: "More heifer calves, better future" },
    { name: "Conventional Semen", desc: "Proven & reliable results" },
  ];

  const featuredBulls = [
    {
      name: "PEAK ALTAROBSON",
      code: "840003200123456",
      tag: "HF",
      tpi: "3200",
      label: "TOP TPI",
      labelColor: "bg-[#D90000]",
      milk: "+1256 kg",
      fat: "+0.18%",
      ppr: "+154",
      image: "/images/bull-altarobson.png",
      details: "Top-ranking TPI sire with outstanding genetic values for milk production, longevity, and overall health. Best suited for high-production commercial operations seeking to maximize milk output.",
    },
    {
      name: "ABS ACHIEVER-ET",
      code: "566H012850",
      tag: "HF",
      tpi: "3010",
      label: "HIGH PRODUCTION",
      labelColor: "bg-[#0056D2]",
      milk: "+1100 kg",
      fat: "+0.09%",
      ppr: "+142",
      image: "/images/bull-achiever.png",
      details: "High production HF sire with proven track record in commercial herds. Promotes excellent udder health, daughter fertility, and stable growth.",
    },
    {
      name: "S-S-I DOC HAVE NOT 8784",
      code: "84000314665789",
      tag: "HF",
      tpi: "2980",
      label: "A2A2",
      labelColor: "bg-orange-500",
      milk: "+1078 kg",
      fat: "+0.10%",
      ppr: "+133",
      image: "/images/bull-doc-have-not.png",
      details: "Certified A2A2 sire indicating premium beta-casein protein yield. Ensures high milk components, sturdy limbs, and easy calving score.",
    },
    {
      name: "JX AHLEM VICTORIOUS",
      code: "JE84000314012367",
      tag: "JERSEY",
      tpi: "165",
      label: "HIGH PLI",
      labelColor: "bg-sky-500",
      milk: "+875 kg",
      fat: "+0.26%",
      ppr: "+98",
      image: "/images/bull-victorious.png",
      details: "Premium Jersey sire with excellent fat and protein transmission characteristics. Enhances components percentage, cow lifetime efficiency, and calf vigor.",
    },
    {
      name: "SANDY-VALLEY R CONWAY",
      code: "84000301234578",
      tag: "HF",
      tpi: "2850",
      label: "FERTILITY",
      labelColor: "bg-emerald-600",
      milk: "+950 kg",
      fat: "+0.12%",
      ppr: "+120",
      image: "/images/bull-conway.png",
      details: "Daughter fertility specialist sire designed to improve reproduction rates in high-yield cows. Promotes low somatic cell counts and high longevity index.",
    },
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#0C1E3A] flex flex-col items-center justify-center">
        {/* Outer glowing pulsing circle */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-20 h-20 rounded-full border-4 border-[#38BDF8]/10 animate-ping" />
          <div className="absolute w-16 h-16 rounded-full border-4 border-t-[#38BDF8] border-r-transparent border-l-transparent border-b-transparent animate-spin" />
          
          {/* Inner circle with logo symbol or custom icon */}
          <div className="w-12 h-12 bg-[#003B8E] rounded-full flex items-center justify-center shadow-lg border border-white/10">
            <Dna className="h-6 w-6 text-[#38BDF8] animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* Toast Notification for native FormSubmit success redirect */}
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
      <section className="relative min-h-[500px] lg:min-h-[550px] flex flex-col lg:flex-row bg-[#0C1E3A] overflow-hidden">
        {/* Background Image of Cows (Mobile overlay) */}
        <div className="absolute inset-0 select-none lg:hidden">
          <Image
            src="/images/super-genetics-hero.png"
            alt="Super Genetics"
            fill
            priority
            className="object-cover opacity-35 object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1E3A] via-[#0C1E3A]/90 to-transparent z-10" />
        </div>

        {/* Hero Content Left Column */}
        <div className="w-full lg:w-[55%] flex items-center bg-[#0C1E3A] relative z-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:pl-16 lg:pr-8 w-full py-16 lg:py-24 space-y-6">
            
            {/* Red Subtitle */}
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#D90000]">
              Super Genetics
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              <TypewriterHeading text="Better Genetics. Better Productivity." cursorClassName="text-[#D90000] animate-pulse ml-0.5" />
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-medium">
              High genetic merit semen for healthier animals, higher milk yield and better profit.
            </p>

            {/* Icon Badges Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="flex items-center space-x-2 text-white">
                <Dna className="h-5 w-5 text-slate-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">High Genetic Merit</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <TrendingUp className="h-5 w-5 text-slate-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">Higher Milk Yield</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <ShieldCheck className="h-5 w-5 text-slate-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">Better Health & Fertility</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Coins className="h-5 w-5 text-slate-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">More Profit for Farmers</span>
              </div>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#premium-genetics"
                className="rounded-xl bg-[#D90000] hover:bg-red-700 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                Explore Genetics
                <MoveRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => setIsDownloadsModalOpen(true)}
                className="rounded-xl border border-white bg-transparent hover:bg-white hover:text-navy-blue px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-sm transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                Download Bull Catalogues
                <FileText className="h-4 w-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Hero Image Right Column (Desktop only) */}
        <div className="hidden lg:block lg:w-[45%] relative select-none z-10">
          <Image
            src="/images/super-genetics-hero.png"
            alt="Super Genetics"
            fill
            priority
            className="object-cover object-right"
          />
          {/* Overlay to fade image left edge into the left bg */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0C1E3A] to-transparent z-20" />
          
          {/* Mathematical DNA double helix SVG overlay */}
          <svg className="absolute inset-y-0 left-0 w-[180px] h-full text-[#38BDF8]/20 z-10 pointer-events-none" viewBox="0 0 100 400" preserveAspectRatio="none">
            <path d="M30,0 Q70,50 30,100 T30,200 T30,300 T30,400" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M70,0 Q30,50 70,100 T70,200 T70,300 T70,400" fill="none" stroke="currentColor" strokeWidth="3" />
            <line x1="45" y1="25" x2="55" y2="25" stroke="currentColor" strokeWidth="2" />
            <line x1="32" y1="75" x2="68" y2="75" stroke="currentColor" strokeWidth="2" />
            <line x1="45" y1="125" x2="55" y2="125" stroke="currentColor" strokeWidth="2" />
            <line x1="32" y1="175" x2="68" y2="175" stroke="currentColor" strokeWidth="2" />
            <line x1="45" y1="225" x2="55" y2="225" stroke="currentColor" strokeWidth="2" />
            <line x1="32" y1="275" x2="68" y2="275" stroke="currentColor" strokeWidth="2" />
            <line x1="45" y1="325" x2="55" y2="325" stroke="currentColor" strokeWidth="2" />
            <line x1="32" y1="375" x2="68" y2="375" stroke="currentColor" strokeWidth="2" />
          </svg>

          {/* Floating Card */}
          <div className="absolute top-8 right-8 z-30 max-w-[280px] bg-white text-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-100/50">
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-slate-700">
                <Globe className="h-5 w-5 text-[#003B8E] flex-shrink-0" />
                <div>
                  <div>Proven Global Genetics</div>
                  <div className="text-[10px] text-slate-400 font-semibold leading-none mt-0.5">From world leading genetics</div>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-slate-700">
                <Activity className="h-5 w-5 text-[#003B8E] flex-shrink-0" />
                <span>Sexed & Conventional Semen</span>
              </li>
              <li className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-slate-700">
                <Award className="h-5 w-5 text-[#003B8E] flex-shrink-0" />
                <div>
                  <div>A2A2 & High PLI Bulls</div>
                  <div className="text-[10px] text-slate-400 font-semibold leading-none mt-0.5">For Future Ready Herd</div>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-slate-700">
                <Snowflake className="h-5 w-5 text-[#003B8E] flex-shrink-0" />
                <span>Cold Chain Maintained</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section id="premium-genetics" className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-lg font-black text-navy-blue flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-[#D90000]" />
              <TypewriterHeading text="Premium Genetics for Every Herd" cursorClassName="text-[#D90000] animate-pulse ml-0.5" />
              <span className="h-[2px] w-6 bg-[#D90000]" />
            </div>
            <p className="text-sm text-slate-500 font-bold leading-relaxed">
              We offer a wide range of high genetic merit bulls to improve milk production, fertility, longevity and overall herd performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Sidebar Menu */}
            <div className="lg:col-span-3 border border-slate-150 rounded-2xl bg-white p-5 shadow-premium space-y-4">
              <h3 className="text-xs uppercase font-extrabold tracking-wider text-[#D90000] border-b border-slate-100 pb-2">
                Our Genetic Solutions
              </h3>
              <ul className="space-y-2">
                {solutions.map((item, idx) => (
                  <li 
                    key={idx}
                    onClick={() => setSelectedSolution(item)}
                    className="group flex items-center justify-between p-3.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200 cursor-pointer text-left"
                  >
                    <div className="space-y-0.5">
                      <div className="text-xs sm:text-sm font-black text-slate-700 group-hover:text-navy-blue">{item.name}</div>
                      <div className="text-[10px] text-slate-400 font-semibold">{item.desc}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-navy-blue group-hover:translate-x-0.5 transition-all" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Featured Bulls Grid/Slider */}
            <div className="lg:col-span-9 space-y-6 relative">
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#D90000] flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D90000] animate-pulse" />
                  Featured Bulls
                </span>
                
                <div className="flex items-center gap-2">
                  <button
                    disabled
                    className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-400 flex items-center gap-1 cursor-not-allowed"
                  >
                    View All Bulls
                    <MoveRight className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => setIsDownloadsModalOpen(true)}
                    className="rounded-lg bg-[#D90000] hover:bg-red-700 px-3 py-1.5 text-xs font-bold text-white flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow transition-all duration-300"
                  >
                    Download Catalogues
                    <FileText className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Slider View Container */}
              <div className="relative group">
                {/* Horizontal scroll container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 overflow-x-auto pb-4 scrollbar-thin">
                  {featuredBulls.map((bull, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col border border-slate-100 rounded-2xl bg-white shadow-premium hover:shadow-xl overflow-hidden transition-all duration-300"
                    >
                      {/* Image and Badge */}
                      <div className="relative aspect-[4/3] w-full bg-slate-50 border-b border-slate-100">
                        <Image
                          src={bull.image}
                          alt={bull.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 20vw"
                        />
                        <div className={`absolute top-2 left-2 ${bull.labelColor} text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-md`}>
                          {bull.label}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 flex-grow flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h4 className="text-xs font-black text-navy-blue line-clamp-1 leading-snug">
                            {bull.name}
                          </h4>
                          <div className="text-[10px] text-slate-400 font-bold leading-none">{bull.code}</div>
                          
                          {/* Tags */}
                          <div className="flex gap-1">
                            <span className="bg-slate-100 text-slate-600 text-[8px] font-black uppercase px-1.5 py-0.5 rounded-md">
                              {bull.tag}
                            </span>
                            <span className="bg-slate-100 text-slate-600 text-[8px] font-black uppercase px-1.5 py-0.5 rounded-md">
                              TPI {bull.tpi}
                            </span>
                          </div>

                          {/* Stats Grid */}
                          <div className="grid grid-cols-3 gap-1 border-t border-slate-100 pt-2 text-center text-[10px] font-bold">
                            <div>
                              <div className="text-[8px] text-slate-400">Milk</div>
                              <div className="text-slate-700">{bull.milk}</div>
                            </div>
                            <div>
                              <div className="text-[8px] text-slate-400">Fat</div>
                              <div className="text-slate-700">{bull.fat}</div>
                            </div>
                            <div>
                              <div className="text-[8px] text-slate-400">PPR</div>
                              <div className="text-[#0056D2]">{bull.ppr}</div>
                            </div>
                          </div>
                        </div>

                        {/* Detail Trigger */}
                        <button
                          onClick={() => setSelectedBull(bull)}
                          className="w-full text-center border border-slate-100 hover:border-brand-red rounded-lg py-2 text-[10px] font-black text-slate-500 hover:text-brand-red transition-all cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Left/Right Slider Nav Indicators */}
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 p-2 bg-white rounded-full shadow-md border border-slate-100 text-slate-400 hover:text-navy-blue cursor-pointer hidden lg:block">
                  <ChevronLeft className="h-5 w-5" />
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 p-2 bg-white rounded-full shadow-md border border-slate-100 text-slate-400 hover:text-navy-blue cursor-pointer hidden lg:block">
                  <ChevronRight className="h-5 w-5" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom Ribbon 1: Contact Callout & Help */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            
            {/* Left 4 Column Info (Light Blue/Grey Background) */}
            <div className="lg:col-span-8 bg-[#EEF4FC] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-[#D90000]">
                  <Dna className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide">Top Genetics</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">From world leading genetics companies</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-[#D90000]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide">Quality Assured</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">Stringent quality control & processing</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-[#D90000]">
                  <Snowflake className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide">Cold Chain System</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">Maintained at every step for best results</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-[#D90000]">
                  <UserCheck className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide">Technical Support</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">Expert guidance for breeding results</p>
                </div>
              </div>
            </div>

            {/* Right Banner Card (Dark Blue Background) */}
            <div className="lg:col-span-4 bg-[#0C1E3A] text-white p-6 sm:p-8 flex items-center justify-between gap-4 border-l border-white/5">
              <div className="space-y-4 text-left flex-grow">
                <div className="space-y-1.5">
                  <h4 className="text-sm font-black uppercase tracking-wide text-white leading-snug">Need Help Choosing Right Genetics?</h4>
                  <p className="text-[10px] sm:text-xs text-slate-300 leading-normal font-medium">
                    Our experts are here to help you select the best genetics for your herd.
                  </p>
                </div>
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="rounded-xl bg-[#D90000] hover:bg-red-700 text-white px-5 py-3 text-xs font-black shadow-md flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer w-fit"
                >
                  Talk to Our Expert
                  <MoveRight className="h-4 w-4" />
                </button>
              </div>
              
              {/* Expert Headset Icon */}
              <div className="flex-shrink-0 text-slate-300/80 hidden sm:block">
                <ExpertIcon className="h-16 w-16" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Ribbon 2: Stats Ribbon */}
      <section className="bg-[#F8FAFC] py-10 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
            
            <div className="flex flex-col items-center space-y-2 md:border-r border-slate-200 last:border-r-0 md:px-4">
              <div className="text-slate-800">
                <CowIcon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-navy-blue leading-none">
                  <Counter value="500" suffix="+" />
                </div>
                <div className="text-[10px] text-slate-500 font-bold mt-1">Premium Bulls</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 md:border-r border-slate-200 last:border-r-0 md:px-4">
              <div className="text-slate-800">
                <Syringe className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-navy-blue leading-none">
                  <Counter value="10" suffix="M+" />
                </div>
                <div className="text-[10px] text-slate-500 font-bold mt-1">Doses Supplied</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 md:border-r border-slate-200 last:border-r-0 md:px-4">
              <div className="text-slate-800">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-[#003B8E] leading-none">
                  <Counter value="1000" suffix="+" />
                </div>
                <div className="text-[10px] text-slate-500 font-bold mt-1">Happy Farmers</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 md:border-r border-slate-200 last:border-r-0 md:px-4">
              <div className="text-slate-800">
                <Handshake className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-navy-blue leading-none">
                  <Counter value="20" suffix="+" />
                </div>
                <div className="text-[10px] text-slate-500 font-bold mt-1">Genetic Partners</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 col-span-2 md:col-span-1 md:px-4">
              <div className="text-slate-800">
                <Headphones className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-[#003B8E] leading-none">
                  <Counter value="24" suffix="/7" />
                </div>
                <div className="text-[10px] text-slate-500 font-bold mt-1">Expert Support</div>
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
            {/* Form Modal Box */}
            <div 
              ref={consultationModalRef}
              tabIndex={-1}
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100/80 z-10 transform scale-100 transition-all duration-300 focus:outline-none my-8"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close */}
              <button
                onClick={() => setIsConsultationOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-navy-blue hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Form submission directed natively to FormSubmit.co */}
              <form 
                action="https://formsubmit.co/info@saanjhdairysolutions.com" 
                method="POST" 
                className="space-y-5"
              >
                {/* FormSubmit custom configurations */}
                <input type="hidden" name="_subject" value="New Genetics Expert Consultation Inquiry!" />
                <input type="hidden" name="_next" value={redirectUrl} />
                <input type="hidden" name="_captcha" value="false" />

                <div className="space-y-1.5">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-brand-red">
                    Consultation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#003B8E] uppercase leading-tight">
                    Talk to our Experts
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Enter your contact details below. Our genetics experts will receive this request through FormSubmit and connect with you.
                  </p>
                </div>

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#003B8E] focus:outline-none transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#003B8E] focus:outline-none transition-colors"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-navy-blue hover:bg-brand-red text-white py-3.5 text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Send Inquiry
                </button>
              </form>

            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Bull Details Modal */}
      {selectedBull && typeof document !== "undefined" && createPortal(
        <div 
          className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setSelectedBull(null)}
        >
          <div className="flex min-h-full items-start justify-center p-4">
            {/* Details Modal Box */}
            <div 
              ref={bullDetailsModalRef}
              tabIndex={-1}
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100/80 z-10 transform scale-100 transition-all duration-300 animate-fade-in-up focus:outline-none my-8"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedBull(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-navy-blue hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-5">
                
                {/* Bull Category badge */}
                <div className="space-y-1.5">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-brand-red">
                    Bull Pedigree & Info
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-navy-blue uppercase leading-tight">
                    {selectedBull.name}
                  </h3>
                  <div className="text-xs text-slate-400 font-bold uppercase">{selectedBull.code}</div>
                </div>

                {/* Image */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-100 bg-white">
                  <Image
                    src={selectedBull.image}
                    alt={selectedBull.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                {/* Detailed Description */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider">Overview & Genetic Merits</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {selectedBull.details}
                  </p>
                  
                  {/* Detailed Stats */}
                  <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-center text-xs font-bold mt-2">
                    <div className="bg-slate-50 rounded-xl p-2">
                      <div className="text-[10px] text-slate-400 uppercase">Milk Transmitted</div>
                      <div className="text-slate-700 text-sm mt-1">{selectedBull.milk}</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-2">
                      <div className="text-[10px] text-slate-400 uppercase">Fat Percentage</div>
                      <div className="text-slate-700 text-sm mt-1">{selectedBull.fat}</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-2">
                      <div className="text-[10px] text-slate-400 uppercase">PPR Score</div>
                      <div className="text-[#0056D2] text-sm mt-1">{selectedBull.ppr}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedBull(null)}
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

      {/* Solution Details Modal */}
      {selectedSolution && typeof document !== "undefined" && createPortal(
        <div 
          className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setSelectedSolution(null)}
        >
          <div className="flex min-h-full items-start justify-center p-4">
            <div 
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100/80 z-10 transform scale-100 transition-all duration-300 focus:outline-none my-8"
              onClick={(e) => e.stopPropagation()}
            >
              
              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-navy-blue hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-brand-red">
                    Genetic Solution Overview
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-navy-blue uppercase leading-tight">
                    {selectedSolution.name}
                  </h3>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider">Solution Description</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {selectedSolution.name === "HF (Holstein Friesian)" && "Holstein Friesians are the world's highest-producing dairy animals. Our high genetic merit HF semen ensures maximum milk volume, high longevity, and exceptional udder conformation for commercial farms."}
                    {selectedSolution.name === "Jersey" && "Jersey cattle are famous for their high butterfat and milk protein content. Our Jersey genetics enhance milk quality, feed conversion efficiency, and tolerance to warmer climates."}
                    {selectedSolution.name === "Crossbred" && "Crossbred solutions combine the high yield of Holstein/Jersey with the resilience of local breeds. Delivers stable production, better disease resistance, and excellent adaptability."}
                    {selectedSolution.name === "Indigenous Breeds" && "Indigenous breeds like Gir, Sahiwal, and Tharparkar are naturally resistant to tropical diseases and tick infestations. Ideal for low-input organic dairying and producing high-quality A2 milk."}
                    {selectedSolution.name === "Sexed Semen" && "Sexed semen technology guarantees over 90% female calves (heifers). Eliminates the cost of rearing male calves, accelerates herd growth, and speeds up genetic progress."}
                    {selectedSolution.name === "Conventional Semen" && "Our conventional semen is sourced from highly ranked progeny-tested bulls. A reliable, cost-effective option for steady genetic progress across milk yield and health traits."}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedSolution(null)}
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

      {/* Catalogue Downloads Modal */}
      {isDownloadsModalOpen && typeof document !== "undefined" && createPortal(
        <div 
          className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setIsDownloadsModalOpen(false)}
        >
          <div className="flex min-h-full items-start justify-center p-4">
            <div 
              ref={downloadsModalRef}
              tabIndex={-1}
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100/80 z-10 transform scale-100 transition-all duration-300 focus:outline-none my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsDownloadsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-navy-blue hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-brand-red">
                    Saanjh Sire Catalogues
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-navy-blue uppercase leading-tight">
                    Download Bull Catalogues
                  </h3>
                  <p className="text-xs text-slate-400 font-bold leading-normal">
                    Select any of our premium genetics and bull directories to save to your local storage.
                  </p>
                </div>

                {/* List of Files */}
                <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1 scrollbar-thin">
                  {[
                    { name: "Upcoming Bulls (Semex)", path: "/Upcoming-Bulls-Semex.pdf" },
                    { name: "ST Genetics (Pro Breed)", path: "/ST-Genetics-Pro-Breed.pdf" },
                    { name: "ABC 2024 Catalogue", path: "/ABC-2024.pdf" },
                    { name: "Imported Sire Directory (Denmark)", path: "/Imported-Sire-Directory-Denmark.pdf" },
                    { name: "Sire Directory 2023", path: "/Sire-Directory-2023.pdf" },
                    { name: "Imported Sire Directory 2026", path: "/Imported-Sire-Directory-2026.pdf" }
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-slate-100/50 transition-all duration-200">
                      <div className="flex items-center space-x-3 min-w-0">
                        <div className="h-9 w-9 rounded-xl bg-red-50 flex items-center justify-center text-[#D90000] flex-shrink-0">
                          <FileText className="h-4.5 w-4.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-black text-slate-700 truncate leading-snug">{doc.name}</div>
                          <div className="text-[10px] text-slate-400 font-bold">PDF Document</div>
                        </div>
                      </div>
                      <a
                        href={doc.path}
                        download={doc.path.substring(1)}
                        className="rounded-xl bg-[#D90000] hover:bg-red-700 p-2.5 text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center flex-shrink-0"
                        title="Download Document"
                      >
                        <Download className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsDownloadsModalOpen(false)}
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
