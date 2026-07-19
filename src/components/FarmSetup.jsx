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
  FileText
} from "lucide-react";

export default function FarmSetup() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");
  
  const projectModalRef = useRef(null);
  const consultationModalRef = useRef(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

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
    if (isConsultationOpen || selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isConsultationOpen, selectedProject]);

  useEffect(() => {
    if (selectedProject && projectModalRef.current) {
      projectModalRef.current.focus();
      projectModalRef.current.scrollTop = 0;
    }
  }, [selectedProject]);

  useEffect(() => {
    if (isConsultationOpen && consultationModalRef.current) {
      consultationModalRef.current.focus();
      consultationModalRef.current.scrollTop = 0;
    }
  }, [isConsultationOpen]);

  const solutions = [
    {
      name: "Dairy Farm Construction",
      icon: <Warehouse className="h-7 w-7 text-[#003B8E]" />,
    },
    {
      name: "Milking Parlour Setup",
      icon: <Settings className="h-7 w-7 text-[#003B8E]" />,
    },
    {
      name: "Ventilation & Cooling Systems",
      icon: <Wind className="h-7 w-7 text-[#003B8E]" />,
    },
    {
      name: "Water Supply & Management",
      icon: <Droplet className="h-7 w-7 text-[#003B8E]" />,
    },
    {
      name: "Feeding & Fodder Management",
      icon: <Sprout className="h-7 w-7 text-[#003B8E]" />,
    },
    {
      name: "Waste Management Solutions",
      icon: <RefreshCw className="h-7 w-7 text-[#003B8E]" />,
    },
  ];

  const projects = [
    {
      title: "500 Cow Dairy Farm",
      location: "Punjab",
      area: "1.5 Acres",
      image: "/images/project-500-cow.png",
      details: "A comprehensive turnkey farm architecture designed for 500 cattle. Key features include: fully automated rapid-exit milking parlor, integrated cubicle housing systems, automatic cow mattresses, manure scrapers, large ventilation fans, and misting lines to eliminate heat stress.",
    },
    {
      title: "250 Cow Dairy Farm",
      location: "Haryana",
      area: "0.75 Acres",
      image: "/images/project-250-cow.png",
      details: "A custom modern dairy shed design optimizing animal traffic and space efficiency. Key features include: 2x6 herringbone milking parlor, high-grade rubber comfort mats, automatic scraper alleys, direct sub-surface fresh water systems, and advanced cooling panels.",
    },
    {
      title: "Milking Parlour Setup",
      location: "Uttar Pradesh",
      area: "10,000 Sq.ft.",
      image: "/images/project-milking-parlour.png",
      details: "State of the art milking facility constructed to handle rapid herd rotation. Key features include: vacuum pump stations, electronic flow meters, sanitary line wash automation, cow identification sensors, and automated herd management interfaces.",
    },
  ];

  const expertise = [
    "Customized turnkey dairy farm projects",
    "Modern infrastructure with international standards",
    "Expert guidance from planning to execution",
    "High quality materials and equipment",
    "After sales support and maintenance",
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Toast Notification for native FormSubmit success redirect */}
      {showSuccessToast && (
        <div className="fixed bottom-5 right-5 z-[10000] bg-emerald-600 text-white rounded-2xl p-4 shadow-2xl flex items-center space-x-3 max-w-sm animate-bounce">
          <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0" />
          <div>
            <div className="font-bold">Consultation Requested!</div>
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
            src="/images/farm-setup-hero.png"
            alt="Modern Open Dairy Shed"
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
              <span className="text-[#38BDF8]">Farm Setup</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Farm Setup
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-medium">
              End-to-end dairy farm setup solutions tailored to your needs. We design, build and deliver modern, efficient and profitable dairy farms.
            </p>

            {/* Icon Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="flex items-center space-x-2 text-white">
                <div className="p-1.5 bg-[#38BDF8]/15 border border-[#38BDF8]/20 rounded-lg">
                  <Warehouse className="h-4.5 w-4.5 text-[#38BDF8]" />
                </div>
                <span className="text-xs sm:text-sm font-bold">Custom Design</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <div className="p-1.5 bg-[#38BDF8]/15 border border-[#38BDF8]/20 rounded-lg">
                  <Hammer className="h-4.5 w-4.5 text-[#38BDF8]" />
                </div>
                <span className="text-xs sm:text-sm font-bold">High Quality Construction</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <div className="p-1.5 bg-[#38BDF8]/15 border border-[#38BDF8]/20 rounded-lg">
                  <Coins className="h-4.5 w-4.5 text-[#38BDF8]" />
                </div>
                <span className="text-xs sm:text-sm font-bold">Cost Effective</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <div className="p-1.5 bg-[#38BDF8]/15 border border-[#38BDF8]/20 rounded-lg">
                  <Clock className="h-4.5 w-4.5 text-[#38BDF8]" />
                </div>
                <span className="text-xs sm:text-sm font-bold">On-time Delivery</span>
              </div>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="rounded-xl bg-[#0056D2] hover:bg-brand-red px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Get a Free Consultation
              </button>
              <a
                href="#recent-projects"
                className="rounded-xl border border-white bg-transparent hover:bg-white hover:text-navy-blue px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-sm transition-all duration-300 flex items-center gap-2"
              >
                View Our Projects
                <MoveRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>

        {/* Hero Image Right Column (Desktop only) */}
        <div className="hidden lg:block lg:w-[45%] relative select-none z-10">
          <Image
            src="/images/farm-setup-hero.png"
            alt="Modern Open Dairy Shed"
            fill
            priority
            className="object-cover object-right"
          />
          {/* Overlay to fade image left edge into the left bg */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0C1E3A] to-transparent z-20" />
        </div>
      </section>

      {/* Solutions & Farm Layout Planning Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Our Farm Setup Solutions */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black text-navy-blue flex items-center gap-2.5">
                  Our Farm Setup Solutions
                  <span className="h-[3px] w-10 bg-navy-blue rounded-full" />
                </h2>
                <p className="text-sm text-slate-500 font-bold leading-relaxed">
                  We provide complete solutions for all types and sizes of dairy farms.
                </p>
              </div>

              {/* Grid of 6 Service Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {solutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-premium hover:border-[#003B8E]/10 transition-all duration-300 flex flex-col items-center justify-center text-center space-y-3"
                  >
                    <div className="p-3 bg-slate-50 rounded-xl">
                      {item.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold text-[#003B8E] leading-snug">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: Farm Layout Planning Card */}
            <div className="lg:col-span-5 border border-slate-100 rounded-3xl bg-slate-50/50 p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Text Info */}
                <div className="sm:col-span-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-black text-[#003B8E] uppercase tracking-tight">
                      Farm Layout Planning
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      Efficient layout planning for better animal flow, hygiene and productivity.
                    </p>
                  </div>
                  
                  <button
                    disabled
                    className="w-full rounded-xl bg-slate-200 text-slate-500 py-3 text-xs font-bold flex items-center justify-center gap-2 cursor-not-allowed shadow-inner"
                  >
                    <FileText className="h-4 w-4" />
                    Download Brochure
                  </button>
                </div>

                {/* 3D Visual */}
                <div className="sm:col-span-6 relative aspect-square w-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-md bg-white">
                  <Image
                    src="/images/farm-setup.png"
                    alt="3D Farm Layout Plan"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 1024px) 100vw, 20vw"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Expertise & Recent Projects */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Our Expertise & Interior visual */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="h-1.5 w-12 bg-navy-blue rounded-full" />
                <h2 className="text-2xl sm:text-3xl font-black text-navy-blue uppercase">
                  Our Expertise
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center relative border border-slate-100 rounded-3xl p-6 shadow-sm bg-white overflow-hidden">
                {/* List items */}
                <div className="sm:col-span-7 space-y-4 relative z-20">
                  {expertise.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#003B8E] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-bold text-slate-700 leading-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Faded image of cows */}
                <div className="sm:col-span-5 relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
                  <Image
                    src="/images/farm-setup-interior.png"
                    alt="Dairy Farm Shed Interior Alley view"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 15vw"
                  />
                  {/* Soft left overlay to fade image into white background */}
                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
                </div>
              </div>
            </div>

            {/* Right Column: Our Recent Projects & Details Cards */}
            <div id="recent-projects" className="lg:col-span-7 space-y-8">
              
              <div className="flex justify-between items-end border-b border-slate-100 pb-4">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-black text-navy-blue uppercase">
                    Our Recent Projects
                  </h2>
                </div>
                {/* View All Projects */}
                <button
                  className="text-xs font-bold text-[#003B8E] hover:text-brand-red hover:underline transition-all cursor-pointer pb-1"
                >
                  View All Projects
                </button>
              </div>

              {/* Projects Vertical stack / grid of 3 cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col border border-slate-100 rounded-2xl bg-white shadow-premium hover:shadow-xl overflow-hidden transition-all duration-300"
                  >
                    {/* Project card image */}
                    <div className="relative aspect-[4/3] w-full bg-slate-50">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 20vw"
                      />
                    </div>
                    {/* Card Content */}
                    <div className="p-4 flex-grow flex flex-col justify-between space-y-3.5">
                      <div className="space-y-1.5">
                        <h3 className="text-sm font-black text-navy-blue uppercase tracking-wide leading-tight line-clamp-1">
                          {proj.title}
                        </h3>
                        <div className="space-y-0.5 text-xs text-slate-500 font-bold">
                          <div>Location: {proj.location}</div>
                          <div>Project Area: {proj.area}</div>
                        </div>
                      </div>

                      {/* View Details modal trigger */}
                      <button
                        onClick={() => setSelectedProject(proj)}
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

          </div>

        </div>
      </section>

      {/* Floating Bottom Navy Banner Callout */}
      <section className="bg-[#0C1E3A] text-white py-6 border-t-4 border-brand-red/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left Headline */}
            <div className="flex items-center space-x-4 max-w-md text-center lg:text-left">
              <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex-shrink-0 hidden sm:block">
                <Headphones className="h-6 w-6 text-[#38BDF8]" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-base font-black uppercase tracking-wider text-white">
                  Need Expert Guidance?
                </h4>
                <p className="text-xs text-slate-300 leading-normal">
                  Our experts are here to help you build the perfect dairy farm.
                </p>
              </div>
            </div>

            {/* Direct contact info tags */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {/* Call */}
              <div className="flex items-center space-x-2.5">
                <Phone className="h-4.5 w-4.5 text-[#38BDF8]" />
                <div className="text-xs">
                  <div className="font-bold text-slate-400">Call Us</div>
                  <div className="font-extrabold text-white text-xs sm:text-sm">+91 99960 12345</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2.5">
                <Mail className="h-4.5 w-4.5 text-[#38BDF8]" />
                <div className="text-xs">
                  <div className="font-bold text-slate-400">Email Us</div>
                  <div className="font-extrabold text-white text-xs sm:text-sm">info@saanjhdairysolutions.com</div>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-center space-x-2.5">
                <MapPin className="h-4.5 w-4.5 text-[#38BDF8]" />
                <div className="text-xs">
                  <div className="font-bold text-slate-400">Our Office</div>
                  <div className="font-extrabold text-white text-xs sm:text-sm">Aligarh, Uttar Pradesh, India</div>
                </div>
              </div>
            </div>

            {/* Free Consultation CTA */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="w-full sm:w-auto rounded-xl bg-white hover:bg-brand-red text-navy-blue hover:text-white px-5 py-3 text-xs sm:text-sm font-black shadow-md flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer"
              >
                Get a Free Consultation
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
              <input type="hidden" name="_subject" value="New Farm Setup Consultation Request!" />
              <input type="hidden" name="_next" value={redirectUrl} />
              <input type="hidden" name="_captcha" value="false" />

              <div className="space-y-1.5">
                <span className="text-xs uppercase font-extrabold tracking-wider text-brand-red">
                  Consultation
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-navy-blue uppercase leading-tight">
                  Get a Free Consultation
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Enter your contact details below. Our engineering team will receive this request through FormSubmit and connect with you.
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

      {/* Project Details Modal */}
      {selectedProject && typeof document !== "undefined" && createPortal(
        <div 
          className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div className="flex min-h-full items-start justify-center p-4">
            {/* Details Modal Box */}
            <div 
              ref={projectModalRef}
              tabIndex={-1}
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100/80 z-10 transform scale-100 transition-all duration-300 animate-fade-in-up focus:outline-none my-8"
              onClick={(e) => e.stopPropagation()}
            >
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-navy-blue hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-5">
              
              {/* Product Category badge */}
              <div className="space-y-1.5">
                <span className="text-xs uppercase font-extrabold tracking-wider text-brand-red">
                  Project Case Study
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-navy-blue uppercase leading-tight">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Image */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-100">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Project Specs */}
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</span>
                  <div className="text-sm font-extrabold text-[#003B8E]">{selectedProject.location}</div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project Area</span>
                  <div className="text-sm font-extrabold text-[#003B8E]">{selectedProject.area}</div>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider">Overview & Integration</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {selectedProject.details}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full rounded-xl border border-slate-200 hover:bg-slate-50 py-3 text-xs font-bold text-slate-500 transition-colors cursor-pointer"
                >
                  Close Case Study
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
