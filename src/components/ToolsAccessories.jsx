"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Hammer, X, CheckCircle2, FileText, ClipboardCheck } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";

export default function ToolsAccessories() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const modalRef = useRef(null);

  const tools = [
    "Cow Lifter",
    "Castration Tool Kit",
    "Dose Syringe",
    "Animal Number Belt",
    "Tag",
    "Metal Detector",
    "Puller with Rubber Bands",
    "Tag Applicator",
    "37°C Constant Temperature Heater Mug",
    "Trimmer",
    "Yemzer Teat Cleaning Brush",
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRedirectUrl(window.location.origin + window.location.pathname + "?submitted=true");

      const queryParams = new URLSearchParams(window.location.search);
      if (queryParams.get("submitted") === "true") {
        setShowSuccessToast(true);
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, []);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isInquiryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isInquiryOpen]);

  useEffect(() => {
    if (isInquiryOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isInquiryOpen]);

  const handleOpenInquiry = (toolName = null) => {
    setSelectedTool(toolName);
    setIsInquiryOpen(true);
  };

  return (
    <section id="tools-accessories" className="py-20 bg-white relative">
      
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
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-red">
            Dairy Tools & Veterinary Accessories
          </span>
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl">
            <TypewriterHeading text="Essential Farm Accessories & Equipment" cursorClassName="text-brand-red animate-pulse ml-0.5" />
          </h2>
          <p className="text-base text-slate-600">
            High-utility operational tools designed to assist in animal treatment, identification, and daily farm maintenance tasks.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-[4/5] border border-slate-100 bg-white">
              <Image
                src="/images/dairy-tools-accessories.jpg"
                alt="Dairy Tools and Accessories Group"
                fill
                className="object-contain bg-white"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            {/* Clean caption below the image */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-150 flex items-center justify-between shadow-sm">
              <div className="space-y-1">
                <h4 className="font-bold text-navy-blue text-sm">Standard Utility Accessories</h4>
                <p className="text-xs text-slate-500">Precision built for safety & durability</p>
              </div>
              <span className="rounded-full bg-brand-red px-2.5 py-1 text-xs font-bold text-white uppercase tracking-wider">
                In Stock
              </span>
            </div>
          </div>

          {/* Right Column: Grid List */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-150 flex items-start space-x-4">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-200 text-brand-red">
                <Hammer className="h-6 w-6 text-brand-red" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-navy-blue text-base">High-Utility Operations</h4>
                <p className="text-sm text-slate-600">
                  From marking kits to veterinary lifting devices, we keep critical accessories ready for prompt delivery to keep your farm operating smoothly.
                </p>
              </div>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOpenInquiry(tool)}
                  className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-brand-red/40 hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-sky-accent text-navy-blue flex items-center justify-center font-bold text-xs group-hover:bg-brand-red group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <span className="font-bold text-slate-700 text-sm leading-snug group-hover:text-navy-blue transition-colors">
                      {tool}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                    Inquire &rarr;
                  </span>
                </div>
              ))}
            </div>

            {/* Contact quick callout button */}
            <div className="pt-2">
              <button
                onClick={() => handleOpenInquiry()}
                className="inline-flex items-center justify-center rounded-xl bg-navy-blue hover:bg-brand-red text-white px-6 py-3.5 font-bold transition-all duration-300 text-sm shadow-md hover:shadow-lg gap-2 cursor-pointer"
              >
                <ClipboardCheck className="h-4.5 w-4.5" />
                Inquire For Tools Catalog
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Inquiry Modal Overlay */}
      {isInquiryOpen && typeof document !== "undefined" && createPortal(
        <div 
          className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setIsInquiryOpen(false)}
        >
          <div className="flex min-h-full items-center justify-center p-4">
            <div 
              ref={modalRef}
              tabIndex={-1}
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100/80 z-10 transform scale-100 transition-all duration-300 animate-fade-in-up focus:outline-none my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsInquiryOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-navy-blue hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-red flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5 text-brand-red" />
                  Official Catalog Inquiry
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-navy-blue uppercase">
                  {selectedTool ? `Inquire: ${selectedTool}` : "Tools & Veterinary Catalog Inquiry"}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Fill in your details to receive our complete Dairy Tools & Veterinary Accessories price catalog and availability details.
                </p>
              </div>

              {/* FormSubmit Integration Form */}
              <form 
                action="https://formsubmit.co/HOTESHWARDAIRYFARM@GMAIL.COM" 
                method="POST"
                className="space-y-4"
              >
                {/* FormSubmit Config Hidden Inputs */}
                <input 
                  type="hidden" 
                  name="_subject" 
                  value={selectedTool ? `New Inquiry for ${selectedTool} - Saanjh Dairy Tools` : "New Inquiry - Dairy Tools & Veterinary Accessories Catalog"} 
                />
                <input type="hidden" name="_next" value={redirectUrl} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                {selectedTool && (
                  <input type="hidden" name="requested_tool" value={selectedTool} />
                )}

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-navy-blue focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-navy-blue focus:outline-none transition-colors"
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
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-navy-blue focus:outline-none transition-colors"
                  />
                </div>

                {/* Message / Remarks */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Inquiry Details / Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    defaultValue={selectedTool ? `I would like to inquire about pricing, specifications, and delivery for: ${selectedTool}.` : "Please send me the full Dairy Tools & Veterinary Accessories catalog and price list."}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-navy-blue focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-navy-blue hover:bg-brand-red text-white py-3.5 text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  Send Inquiry Now
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
