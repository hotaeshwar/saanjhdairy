"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { MoveRight, X, CheckCircle2, Download, FileText } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Inquiry Modal State
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const productModalRef = useRef(null);

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

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  useEffect(() => {
    if (selectedProduct && productModalRef.current) {
      productModalRef.current.focus();
      productModalRef.current.scrollTop = 0;
    }
  }, [selectedProduct]);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "milking", name: "Milking Solutions" },
    { id: "infrastructure", name: "Farm Infrastructure" },
    { id: "comfort", name: "Comfort & Utilities" },
  ];

  const productsList = [
    {
      name: "Mobile Milking Machine for Two Cow",
      category: "milking",
      image: "/images/mobile-milking-machines.jpg",
      description: "Highly mobile double bucket milking setup for efficient handling.",
    },
    {
      name: "Mobile Milking Machine for Single Cow",
      category: "milking",
      image: "/images/mobile-milking-machines.jpg",
      description: "Sturdy single bucket system, ideal for small to medium scale herds.",
    },
    {
      name: "Fixed Milking Machine Pump Unit",
      category: "milking",
      image: "/images/milking-machines.jpg",
      description: "Stationary heavy-duty vacuum pump systems for permanent barns.",
    },
    {
      name: "Herringbone Milking Parlor",
      category: "milking",
      image: "/images/hero-dairy-farm.jpg",
      description: "Efficient angled milking parlor stalls for medium size herds.",
    },
    {
      name: "Parallel Milking Parlor",
      category: "milking",
      image: "/images/hero-dairy-farm.jpg",
      description: "Side-by-side positioning layout with rapid-exit gates.",
    },
    {
      name: "Rotary Milking Parlor",
      category: "milking",
      image: "/images/hero-dairy-farm.jpg",
      description: "High capacity rotating platform for large-scale enterprise dairy operations.",
    },
    {
      name: "Cubicle Setup",
      category: "infrastructure",
      image: "/images/why-choose.jpg",
      description: "Steel divider cubicle framing for organized cow resting areas.",
    },
    {
      name: "Cow Farm Setup",
      category: "infrastructure",
      image: "/images/product-cow-farm-setup.png",
      description: "Complete design, metal shed construction, and setup orchestration.",
    },
    {
      name: "Cow Comfort",
      category: "comfort",
      image: "/images/product-cow-comfort.png",
      description: "Includes high quality rubber mats, dynamic scratching brushes, and beds.",
    },
    {
      name: "Manure Management",
      category: "comfort",
      image: "/images/product-manure-management.png",
      description: "Automatic scrapers and separation systems for quick organic waste clearing.",
    },
    {
      name: "Cooling & Ventilation",
      category: "comfort",
      image: "/images/product-cooling-ventilation.png",
      description: "Large dynamic ceiling fans and high-pressure atomized misting systems.",
    },
    {
      name: "Milk Storage",
      category: "infrastructure",
      image: "/images/product-milk-storage.png",
      description: "Bulk milk cooling tanks with high-efficiency stainless steel build.",
    },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? productsList
      : productsList.filter((p) => p.category === activeFilter);

  const handleInquireClick = (productName) => {
    setSelectedProduct(productName);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-20 bg-white relative">
      
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-red">
            Premium Product Catalog
          </span>
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl">
            <TypewriterHeading text="Our High-Quality Dairy Equipment" cursorClassName="text-brand-red animate-pulse ml-0.5" />
          </h2>
          <p className="text-base text-slate-600">
            Engineered for reliability, ease of operation, and long lifetime. Explore our range of farm setup solutions.
          </p>

          {/* Catalog Download Button */}
          <div className="flex justify-center pt-2">
            <a
              href="/Product-Catalogue.pdf"
              download="Product-Catalogue.pdf"
              className="rounded-xl bg-navy-blue hover:bg-[#003B8E] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              Download Product Catalogue
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                activeFilter === cat.id
                  ? "bg-navy-blue text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((p, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl bg-white border border-slate-100 shadow-premium shadow-premium-hover overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative aspect-video w-full bg-slate-100">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Product Content */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-brand-red">
                    {categories.find((c) => c.id === p.category)?.name}
                  </span>
                  <h3 className="text-lg font-bold text-navy-blue leading-snug line-clamp-1">
                    {p.name}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2">
                    {p.description}
                  </p>
                </div>
                
                <button
                  onClick={() => handleInquireClick(p.name)}
                  className="inline-flex items-center text-sm font-bold text-navy-blue hover:text-brand-red transition-colors group cursor-pointer w-fit text-left"
                >
                  Inquire Now
                  <MoveRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Inquiry Modal Overlay */}
      {selectedProduct && typeof document !== "undefined" && createPortal(
        <div 
          className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-900/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="flex min-h-full items-start justify-center p-4">
            {/* Modal Dialog Content Container */}
            <div 
              ref={productModalRef}
              tabIndex={-1}
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100/80 z-10 transform scale-100 transition-all duration-300 animate-fade-in-up focus:outline-none my-8"
              onClick={(e) => e.stopPropagation()}
            >
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-navy-blue hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <form 
              action="https://formsubmit.co/info@saanjhdairysolutions.com" 
              method="POST" 
              className="space-y-5"
            >
              {/* FormSubmit custom configurations */}
              <input type="hidden" name="_subject" value={`New Inquiry for ${selectedProduct}`} />
              <input type="hidden" name="_next" value={redirectUrl} />
              <input type="hidden" name="_captcha" value="false" />

              <div className="space-y-1.5">
                <span className="text-xs uppercase font-extrabold tracking-wider text-brand-red">
                  Product Inquiry
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-navy-blue uppercase leading-tight">
                  Submit Inquiry
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Please provide your contact information and details below. Our experts will get in touch with you shortly.
                </p>
              </div>

              {/* Pre-filled Product Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Selected Product
                </label>
                <input
                  type="text"
                  name="product"
                  readOnly
                  value={selectedProduct}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-[#003B8E] focus:outline-none"
                />
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
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#003B8E] focus:outline-none transition-colors"
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#003B8E] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Inquiry Details *
                </label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Describe your farm requirements, herd size, automation needs etc."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#003B8E] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-navy-blue hover:bg-brand-red text-white py-3.5 text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Submit Inquiry
              </button>
            </form>

            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
