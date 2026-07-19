"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, BadgeCheck, FileText, Send, CalendarDays } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";
import AnimatedButton from "@/components/AnimatedButton";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "Complete Farm Setup",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: "",
        phone: "",
        email: "",
        requirement: "Complete Farm Setup",
        message: "",
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-red">
            Get In Touch
          </span>
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl">
            <TypewriterHeading text="Contact SAANJH Dairy Solutions" cursorClassName="text-brand-red animate-pulse ml-0.5" />
          </h2>
          <p className="text-base text-slate-600">
            Submit your queries, request blueprints, or consult with our project developers.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Address */}
            <div className="p-6 bg-white border border-slate-150 rounded-2xl shadow-premium flex items-start space-x-4">
              <div className="p-3.5 bg-sky-accent rounded-xl text-navy-blue flex-shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-navy-blue text-base">Office Address</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Sito Bypass, Near Marrie Villa,<br />
                  Abohar-152116 (PB.)
                </p>
              </div>
            </div>

            {/* Card 2: Phone */}
            <div className="p-6 bg-white border border-slate-150 rounded-2xl shadow-premium flex items-start space-x-4">
              <div className="p-3.5 bg-sky-accent rounded-xl text-navy-blue flex-shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-navy-blue text-base">Phone Numbers</h4>
                <div className="text-sm text-slate-600 space-y-1 font-semibold">
                  <a href="tel:91224-96000" className="hover:text-brand-red block">91224-96000</a>
                  <a href="tel:94656-17949" className="hover:text-brand-red block">94656-17949</a>
                  <a href="tel:97807-66438" className="hover:text-brand-red block">97807-66438</a>
                </div>
              </div>
            </div>

            {/* Card 3: Email */}
            <div className="p-6 bg-white border border-slate-150 rounded-2xl shadow-premium flex items-start space-x-4">
              <div className="p-3.5 bg-sky-accent rounded-xl text-navy-blue flex-shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-navy-blue text-base">Email Support</h4>
                <a
                  href="mailto:saanjhdairysolutions@gmail.com"
                  className="text-sm text-slate-600 hover:text-brand-red font-semibold break-all"
                >
                  saanjhdairysolutions@gmail.com
                </a>
              </div>
            </div>

            {/* Card 4: Business Details */}
            <div className="p-6 bg-white border border-slate-150 rounded-2xl shadow-premium flex items-start space-x-4">
              <div className="p-3.5 bg-sky-accent rounded-xl text-navy-blue flex-shrink-0">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-navy-blue text-base">GST Details</h4>
                <div className="text-sm text-slate-600 font-mono font-semibold">
                  GSTIN: 03AFNPS1267B1Z8
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 shadow-premium">
            <h3 className="text-xl font-bold text-navy-blue mb-6 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-brand-red" /> Request pricing or details
            </h3>

            <form action="https://formsubmit.co/saanjhdairysolutions@gmail.com" method="POST" className="space-y-5">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Website Inquiry - SAANJH Dairy" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-navy-blue focus:outline-none transition-colors"
                  />
                </div>
                
                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-navy-blue focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-navy-blue focus:outline-none transition-colors"
                  />
                </div>

                {/* Requirement Selector */}
                <div className="space-y-2">
                  <label htmlFor="requirement" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Requirement Type
                  </label>
                  <select
                    id="requirement"
                    name="requirement"
                    value={formState.requirement}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm bg-white focus:border-navy-blue focus:outline-none transition-colors"
                  >
                    <option value="Complete Farm Setup">Complete Farm Setup</option>
                    <option value="Milking Machine/Parlor">Milking Machine/Parlor</option>
                    <option value="Cow Comfort mats">Cow Comfort Mats</option>
                    <option value="AI Equipment & Sorted Semen">AI Equipment & Sorted Semen</option>
                    <option value="Dairy Nutrition supplements">Dairy Nutrition Supplements</option>
                    <option value="Other Farm Accessories">Other Farm Accessories</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Message / Detailed Query
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Specify your land details, herd size, or equipment questions here..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-navy-blue focus:outline-none transition-colors"
                />
              </div>

              {/* Submit Alerts */}
              {submitSuccess && (
                <div className="p-4 bg-emerald-50 text-emerald-800 text-sm font-semibold rounded-xl border border-emerald-250 flex items-center space-x-2">
                  <CalendarDays className="h-5 w-5 text-emerald-600" />
                  <span>Thank you! Your request has been sent. Our team will contact you shortly.</span>
                </div>
              )}

              <AnimatedButton
                type="submit"
                className="w-full rounded-xl bg-navy-blue text-white px-6 py-4 font-bold hover:bg-brand-red shadow-md"
              >
                <Send className="mr-2 h-4 w-4" /> Send Inquiry
              </AnimatedButton>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
