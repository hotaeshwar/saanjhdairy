"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Shield, Sparkles, Check, X, CheckCircle2 } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";

export default function MilkingMachines() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const modalRef = useRef(null);

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
    if (selectedProduct && modalRef.current) {
      modalRef.current.focus();
      modalRef.current.scrollTop = 0;
    }
  }, [selectedProduct]);

  const ssFeatures = [
    "Stainless Steel Build",
    "Rust Proof",
    "Durable & Long Lasting",
    "Vacuum Efficiency",
    "Easy Mobility",
  ];

  const msFeatures = [
    "Mild Steel Build",
    "Strong & Reliable",
    "Cost Effective",
    "Easy To Operate",
    "Low Maintenance",
  ];

  const specifications = [
    { spec: "Body Material", ss: "Premium Food-Grade Stainless Steel (SS)", ms: "High-Strength Coated Mild Steel (MS)" },
    { spec: "Milk Can Capacity", ss: "20L / 25L (SS-304)", ms: "20L / 25L (Standard Aluminum / SS)" },
    { spec: "Vacuum Pump", ss: "Heavy-duty Oil lubricated / Dry", ms: "Oil-lubricated High Performance" },
    { spec: "Vacuum Range", ss: "350 - 500 mmHg", ms: "350 - 450 mmHg" },
    { spec: "Bucket Type", ss: "Stainless Steel Double / Single", ms: "Stainless Steel / Aluminum Single" },
    { spec: "Pulsation", ss: "Pneumatic / Electronic Pulsator", ms: "Standard Pneumatic Pulsator" },
    { spec: "Mobility", ss: "Heavy-duty caster wheels with lock", ssAccent: true, ms: "Two rubber trolley wheels" },
    { spec: "Usage", ss: "Perfect for high-humidity & heavy commercial use", ms: "Cost-effective choice for small/medium farms" },
  ];

  return (
    <section id="milking-machines" className="py-20 bg-slate-50 border-t border-slate-100 relative">
      
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
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-red">
            Milking Equipment Comparison
          </span>
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl">
            <TypewriterHeading text="SS Milking Machine vs MS Milking Machine" cursorClassName="text-brand-red animate-pulse ml-0.5" />
          </h2>
          <p className="text-base text-slate-600">
            Compare our two premium build configurations to select the best match for your operational demands and budget.
          </p>
        </div>

        {/* Side by Side Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          
          {/* SS Milking Machine Card */}
          <div className="bg-white border-2 border-sky-blue/30 rounded-3xl p-8 shadow-premium shadow-premium-hover relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-sky-accent text-navy-blue text-xs font-bold uppercase px-4 py-2 rounded-bl-2xl flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> Premium Choice
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-navy-blue">SS Milking Machine</h3>
                <p className="text-sm text-slate-500">Stainless Steel Build Configuration</p>
              </div>

              {/* Product Placeholder Image */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                <Image
                  src="/images/milking-machines.jpg"
                  alt="SS Milking Machine"
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 pt-4">
                {ssFeatures.map((f, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <div className="h-5 w-5 rounded-full bg-sky-accent text-navy-blue flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => setSelectedProduct("SS Milking Machine")}
                className="w-full inline-flex justify-center items-center rounded-xl bg-navy-blue text-white px-5 py-3 font-bold hover:bg-[#38BDF8] hover:text-[#0C1E3A] transition-all duration-300 shadow-sm cursor-pointer"
              >
                Inquire SS Model
              </button>
            </div>
          </div>

          {/* MS Milking Machine Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-premium shadow-premium-hover flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-slate-800">MS Milking Machine</h3>
                <p className="text-sm text-slate-500">Mild Steel Build Configuration</p>
              </div>

              {/* Product Placeholder Image */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                <Image
                  src="/images/milking-machines.jpg"
                  alt="MS Milking Machine"
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 pt-4">
                {msFeatures.map((f, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <div className="h-5 w-5 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => setSelectedProduct("MS Milking Machine")}
                className="w-full inline-flex justify-center items-center rounded-xl border border-slate-300 bg-white text-slate-700 px-5 py-3 font-bold hover:bg-slate-50 transition-all duration-300 cursor-pointer"
              >
                Inquire MS Model
              </button>
            </div>
          </div>

        </div>

        {/* Specifications Table */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-premium">
          <div className="p-6 bg-slate-900 border-b border-slate-850">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Shield className="h-5 w-5 text-sky-blue mr-2" /> Technical Specifications
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <th className="p-4 pl-6">Specification</th>
                  <th className="p-4">SS Milking Machine</th>
                  <th className="p-4 pr-6">MS Milking Machine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-600">
                {specifications.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 pl-6 font-bold text-slate-700">{row.spec}</td>
                    <td className="p-4 text-navy-blue font-semibold">{row.ss}</td>
                    <td className="p-4">{row.ms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Inquiry Modal Overlay */}
      {selectedProduct && typeof document !== "undefined" && createPortal(
        <div 
          className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="flex min-h-full items-start justify-center p-4">
            {/* Modal Dialog Content Container */}
            <div 
              ref={modalRef}
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
                  placeholder="Describe your herd size, installation site, or mechanical requirements..."
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
