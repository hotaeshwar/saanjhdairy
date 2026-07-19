"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import Image from "next/image";
import { 
  Warehouse, 
  Settings, 
  Wind, 
  Droplet, 
  Sprout, 
  RefreshCw, 
  CheckCircle2, 
  X, 
  Headphones, 
  Phone, 
  Mail, 
  MapPin, 
  MoveRight, 
  Clock, 
  Coins, 
  Hammer,
  FileText,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Award
} from "lucide-react";
import { useTransition } from "./AppRouter";
import TypewriterHeading from "@/components/TypewriterHeading";

export default function DairyEquipment() {
  const { triggerTransition } = useTransition();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  const productDetailsModalRef = useRef(null);
  const consultationModalRef = useRef(null);
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
    if (isConsultationOpen || selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isConsultationOpen, selectedProduct]);

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
    { name: "Milking Machines", image: "/images/product-milking-machine.png" },
    { name: "Cooling Solutions", image: "/images/product-milk-cooling-tank.png" },
    { name: "Milk Handling", image: "/images/product-milk-handling.png" },
    { name: "Ventilation", image: "/images/product-dairy-fan.png" },
    { name: "Animal Comfort", image: "/images/product-cow-mat.svg" },
    { name: "Feeding Solutions", image: "/images/product-feed-trough.png" },
    { name: "Hygiene & Cleaning", image: "/images/product-hygiene-cleaning.png" },
    { name: "AI & Accessories", image: "/images/product-ai-accessories.png" },
    { name: "Spare Parts", image: "/images/product-spare-parts.png" },
  ];

  const featuredProducts = [
    {
      title: "Milking Machine (Double Bucket)",
      desc: "High vacuum & efficient milking performance.",
      image: "/images/product-milking-machine.png",
      details: "Commercial grade double bucket milking machine designed for medium to large herds. Features high-quality vacuum pump, dual pulsators, and stainless steel buckets for sanitary and rapid milking.",
    },
    {
      title: "Vacuum Pump",
      desc: "High efficiency vacuum pumps for smooth operation.",
      image: "/images/product-vacuum-pump.png",
      details: "Heavy-duty oil-lubricated vacuum pump ensuring stable vacuum levels for automated milking systems. Engineered for low noise, low vibration, and extended service life.",
    },
    {
      title: "Milk Cooling Tank",
      desc: "Energy efficient cooling tank to maintain milk quality.",
      image: "/images/product-milk-cooling-tank.png",
      details: "Direct expansion milk cooling tank with rapid cooling rates and high insulation capability. Preserves milk hygiene and prevents bacterial growth efficiently.",
    },
    {
      title: "Dairy Fan (54 Inch)",
      desc: "High air delivery for better ventilation & animal comfort.",
      image: "/images/product-dairy-fan.png",
      details: "Heavy-duty industrial ventilation fan designed to create optimal cross-ventilation in open barns. High volume air delivery helps lower cattle body temperature and keep flies away.",
    },
    {
      title: "Cow Mat",
      desc: "Comfortable & durable mats for animal health & productivity.",
      image: "/images/product-cow-mat.svg",
      details: "Premium anti-slip rubber comfort mats for dairy stalls. Reduces joint strain, prevents slip-and-fall injuries, and significantly improves overall milk yield through resting comfort.",
    },
    {
      title: "Feed Trough",
      desc: "Strong & durable troughs for clean and safe feeding.",
      image: "/images/product-feed-trough.png",
      details: "Molded heavy-duty plastic or concrete feed troughs designed to optimize feed delivery. Easy to clean, impact-resistant, and prevents feed wastage.",
    },
    {
      title: "Drinking Bowl",
      desc: "Automatic water bowl for clean & fresh water always.",
      image: "/images/product-drinking-bowl.png",
      details: "Cast iron or stainless steel automatic drinking bowls with touch-sensitive valves. Ensures cattle have round-the-clock access to fresh, clean water for optimal hydration.",
    },
    {
      title: "Milking Claw Set",
      desc: "Stainless steel claw with silicon liners for better milking.",
      image: "/images/product-milking-claw.png",
      details: "High-capacity milking claw with food-grade silicone liners. Optimizes milk flow paths, reduces vacuum fluctuations, and protects udder health during milking.",
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
            <Settings className="h-6 w-6 text-[#38BDF8] animate-pulse" />
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
        {/* Background Image of Modern Dairy Barn (Mobile overlay) */}
        <div className="absolute inset-0 select-none lg:hidden">
          <Image
            src="/images/dairy-equipment-hero.png"
            alt="Dairy Equipments"
            fill
            priority
            className="object-cover opacity-35 object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1E3A] via-[#0C1E3A]/90 to-transparent z-10" />
        </div>

        {/* Hero Content Left Column */}
        <div className="w-full lg:w-[55%] flex items-center bg-[#0C1E3A] relative z-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:pl-16 lg:pr-8 w-full py-16 lg:py-24 space-y-6">
            
            {/* Breadcrumbs */}
            <div className="text-slate-300 text-xs sm:text-sm font-semibold flex items-center gap-2">
              <Link to="/" className="hover:text-white hover:underline transition-colors">Home</Link>
              <span>&gt;</span>
              <span className="text-[#38BDF8]">Dairy Equipments</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              <TypewriterHeading text="Dairy Equipments" cursorClassName="text-[#38BDF8] animate-pulse ml-0.5" />
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-medium">
              High quality equipment for modern dairy farming. From milking to cooling, feeding to hygiene – we provide everything you need for efficient and profitable dairy farming.
            </p>

            {/* Icon Badges Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="flex items-center space-x-2 text-white">
                <Award className="h-5 w-5 text-slate-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Settings className="h-5 w-5 text-slate-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">Reliable Performance</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <ShieldCheck className="h-5 w-5 text-slate-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">Long Lasting</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Coins className="h-5 w-5 text-slate-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">Best Value for Money</span>
              </div>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => triggerTransition("/products")}
                className="rounded-xl bg-[#0056D2] hover:bg-[#003B8E] px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                View All Products
                <MoveRight className="h-4 w-4" />
              </button>
              <a
                href="/Rubber-mat-saanjh.pdf"
                download="Rubber-mat-saanjh.pdf"
                className="rounded-xl border border-white bg-transparent hover:bg-white hover:text-navy-blue px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-sm transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                Download Catalogue
                <FileText className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>

        {/* Hero Image Right Column (Desktop only) */}
        <div className="hidden lg:block lg:w-[45%] relative select-none z-10">
          <Image
            src="/images/dairy-equipment-hero.png"
            alt="Dairy Equipments"
            fill
            priority
            className="object-cover object-right"
          />
          {/* Overlay to fade image left edge into the left bg */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0C1E3A] to-transparent z-20" />
          
          {/* Floating Card */}
          <div className="absolute top-8 right-8 z-30 max-w-[280px] bg-white text-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-100/50">
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-slate-700">
                <Warehouse className="h-5 w-5 text-[#003B8E] flex-shrink-0" />
                <span>Complete Range Under One Roof</span>
              </li>
              <li className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-slate-700">
                <Headphones className="h-5 w-5 text-[#003B8E] flex-shrink-0" />
                <span>Expert Guidance & Support</span>
              </li>
              <li className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-slate-700">
                <Settings className="h-5 w-5 text-[#003B8E] flex-shrink-0" />
                <span>Installation Assistance</span>
              </li>
              <li className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-[#003B8E] flex-shrink-0" />
                <span>After Sales Service</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Categories Row Section */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-between text-center min-h-[120px] shadow-sm hover:shadow-premium hover:border-[#003B8E]/20 transition-all duration-300"
              >
                <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain"
                    sizes="50px"
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-extrabold text-slate-700 leading-snug mt-2">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-end border-b border-slate-100 pb-4 mb-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-navy-blue flex items-center gap-2.5">
                Our Featured Products
                <span className="h-[3px] w-10 bg-navy-blue rounded-full" />
              </h2>
            </div>
            {/* View All Products */}
            <button
              onClick={() => triggerTransition("/products")}
              className="text-xs font-bold text-[#003B8E] hover:text-brand-red hover:underline transition-all cursor-pointer pb-1 flex items-center gap-1"
            >
              View All Products
              <MoveRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Grid of 8 Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((prod, idx) => (
              <div
                key={idx}
                className="flex flex-col border border-slate-100 rounded-2xl bg-white shadow-premium hover:shadow-xl overflow-hidden transition-all duration-300"
              >
                {/* Product image */}
                <div className="relative aspect-[4/3] w-full bg-white border-b border-slate-100/50 p-4">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>
                {/* Card Content */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-black text-navy-blue uppercase tracking-wide leading-tight line-clamp-1">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed line-clamp-2">
                      {prod.desc}
                    </p>
                  </div>

                  {/* View Details modal trigger */}
                  <button
                    onClick={() => setSelectedProduct(prod)}
                    className="text-xs font-bold text-[#003B8E] hover:text-brand-red flex items-center gap-1 cursor-pointer w-fit text-left"
                  >
                    View Details
                    <MoveRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Bar / Contact Callout Ribbon */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            
            {/* Left 4 Column Info (Light Blue/Grey Background) */}
            <div className="lg:col-span-8 bg-[#EEF4FC] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-[#003B8E]">
                  <ShoppingCart className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide">Bulk Orders</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">Best prices for bulk purchases</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-[#003B8E]">
                  <Award className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide">Trusted Brands</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">We deal in trusted & quality brands</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-[#003B8E]">
                  <Truck className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide">Fast Delivery</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">Timely delivery across India</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-[#003B8E]">
                  <Headphones className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wide">Expert Support</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold leading-tight">Our experts are always here to help</p>
                </div>
              </div>
            </div>

            {/* Right Banner Card (Dark Blue Background) */}
            <div className="lg:col-span-4 bg-[#0C1E3A] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-l border-white/5">
              <div className="space-y-1.5 text-center sm:text-left">
                <h4 className="text-sm font-black uppercase tracking-wide text-white leading-snug">Need Help Choosing Right Equipment?</h4>
                <p className="text-[10px] sm:text-xs text-slate-300 leading-normal font-medium">
                  Our experts will help you select the best equipment for your farm needs.
                </p>
              </div>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="w-full sm:w-auto rounded-xl bg-white hover:bg-[#38BDF8] text-[#0C1E3A] hover:text-[#0C1E3A] px-5 py-3 text-xs font-black shadow-md flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer flex-shrink-0"
              >
                Talk to Expert
                <MoveRight className="h-4 w-4" />
              </button>
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
                <input type="hidden" name="_subject" value="New Dairy Equipment Expert Inquiry!" />
                <input type="hidden" name="_next" value={redirectUrl} />
                <input type="hidden" name="_captcha" value="false" />

                <div className="space-y-1.5">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-brand-red">
                    Consultation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-navy-blue uppercase leading-tight">
                    Talk to our Experts
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Enter your contact details below. Our dairy equipment experts will receive this request through FormSubmit and connect with you.
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

      {/* Product Details Modal */}
      {selectedProduct && typeof document !== "undefined" && createPortal(
        <div 
          className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="flex min-h-full items-start justify-center p-4">
            {/* Details Modal Box */}
            <div 
              ref={productDetailsModalRef}
              tabIndex={-1}
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100/80 z-10 transform scale-100 transition-all duration-300 animate-fade-in-up focus:outline-none my-8"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-navy-blue hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-5">
                
                {/* Product Category badge */}
                <div className="space-y-1.5">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-brand-red">
                    Product Detail
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-navy-blue uppercase leading-tight">
                    {selectedProduct.title}
                  </h3>
                </div>

                {/* Image */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-100 bg-white p-6">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                {/* Detailed Description */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider">Overview & Specifications</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {selectedProduct.details}
                  </p>
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

    </div>
  );
}
