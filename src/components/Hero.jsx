import AnimatedButton from "@/components/AnimatedButton";
import Image from "next/image";
import { Award, Wrench, Dna, ShieldCheck, Warehouse, Compass } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";

export default function Hero() {
  const trustBadges = [
    {
      icon: <Award className="h-6 w-6 text-navy-blue" />,
      text: "Quality Products",
    },
    {
      icon: <Wrench className="h-6 w-6 text-navy-blue" />,
      text: "Expert Support",
    },
    {
      icon: <Dna className="h-6 w-6 text-navy-blue" />,
      text: "Super Genetics",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-navy-blue" />,
      text: "Trusted by Farmers",
    },
  ];

  return (
    <section id="home" className="relative bg-white min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      
      {/* Right-side absolute background image representing the modern dairy farm */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] h-full hidden lg:block select-none pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/modern-dairy-farm.png"
            alt="Modern Dairy Farm Barn and Cows feeding"
            fill
            priority
            className="object-cover object-left"
          />
          {/* Subtle gradient overlay to blend into the white background on the left.
              Only covers the left 35% of the image container to keep the right side fully vibrant! */}
          <div className="absolute left-0 top-0 bottom-0 w-[35%] bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Information, taglines, buttons, and trust badges */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in-up lg:self-center">
            
            {/* Tagline Badge with Red Separator */}
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-brand-red rounded-full" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#003B8E]">
                ONE STOP SOLUTION FOR MODERN DAIRY FARMING
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#003B8E] tracking-tight leading-[1.1] uppercase">
                <TypewriterHeading text="COMPLETE SOLUTIONS FOR PROFITABLE DAIRY FARM" cursorClassName="text-[#003B8E] animate-pulse ml-0.5" />
              </h1>
              <p className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed">
                From Farm Setup to Super Genetics – We provide end-to-end
                solutions to increase productivity and profitability.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <AnimatedButton
                href="/services"
                className="rounded-lg bg-[#003B8E] hover:bg-brand-red px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-premium flex items-center gap-2"
              >
                <Warehouse className="h-5 w-5" />
                Explore Farm Setup
              </AnimatedButton>
              <AnimatedButton
                href="/products"
                className="rounded-lg border border-[#003B8E] bg-white px-6 py-3.5 text-sm sm:text-base font-bold text-[#003B8E] shadow-sm hover:bg-slate-50 flex items-center gap-2"
              >
                <Compass className="h-5 w-5" />
                View Our Products
              </AnimatedButton>
            </div>

            {/* Bottom Trust Badges in a single horizontal rounded container */}
            <div className="pt-6">
              <div className="inline-flex flex-wrap md:flex-nowrap items-center bg-slate-50/90 backdrop-blur-md border border-slate-100 rounded-2xl p-4 gap-6 shadow-sm">
                
                {/* Item 1 */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 p-2 bg-[#E0F2FE] rounded-xl">
                    <Award className="h-5 w-5 text-[#003B8E]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#003B8E] whitespace-nowrap">
                    Quality Products
                  </span>
                </div>
                
                <div className="hidden md:block w-px h-8 bg-slate-200" />
                
                {/* Item 2 */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 p-2 bg-[#E0F2FE] rounded-xl">
                    <Wrench className="h-5 w-5 text-[#003B8E]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#003B8E] whitespace-nowrap">
                    Expert Support
                  </span>
                </div>
                
                <div className="hidden md:block w-px h-8 bg-slate-200" />
                
                {/* Item 3 */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 p-2 bg-[#E0F2FE] rounded-xl">
                    <Dna className="h-5 w-5 text-[#003B8E]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#003B8E] whitespace-nowrap">
                    Super Genetics
                  </span>
                </div>
                
                <div className="hidden md:block w-px h-8 bg-slate-200" />
                
                {/* Item 4 */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 p-2 bg-[#E0F2FE] rounded-xl">
                    <ShieldCheck className="h-5 w-5 text-[#003B8E]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#003B8E] whitespace-nowrap">
                    Trusted by Farmers
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Upper-Right aligned card layout (on desktop) - Moved slightly up (lg:pt-2) */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center lg:items-end justify-start lg:self-start lg:pt-2 z-20">
            
            {/* Mobile/Tablet fallback image */}
            <div className="block lg:hidden w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg border border-slate-100 mb-6">
              <Image
                src="/images/modern-dairy-farm.png"
                alt="Modern Dairy Farm Barn"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Overlaid Card (BUILD | EQUIP | SUPPORT) - Aligned to upper right, small & transparent */}
            <div className="w-full sm:max-w-[320px] bg-[#003B8E]/80 backdrop-blur-md text-white rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden select-none border border-white/15">
              {/* Decorative radial background shimmers */}
              <div className="absolute top-0 right-0 -mt-12 -mr-12 w-32 h-32 rounded-full bg-sky-blue/20 blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-3.5">
                {/* Tagline */}
                <div className="text-[10px] font-bold tracking-widest text-[#38BDF8] uppercase">
                  BUILD | EQUIP | SUPPORT
                </div>
                
                {/* Icon & Title Group */}
                <div className="flex items-center space-x-3 py-1">
                  <div className="p-2 border border-white/20 rounded-xl bg-white/5 flex-shrink-0">
                    <Warehouse className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold tracking-wide uppercase leading-tight text-white">
                      COMPLETE <br />
                      FARM SETUP
                    </h3>
                  </div>
                </div>

                {/* Divider between title and description */}
                <div className="border-t border-white/15 w-full pt-1" />
                
                <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-medium">
                  End-to-end dairy farm setup solutions tailored to your needs.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
