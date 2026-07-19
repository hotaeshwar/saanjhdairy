"use client";

import { useState, useEffect, useRef } from "react";
import { useTransition } from "@/components/AppRouter";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";

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
    <span ref={elementRef} className="tabular-nums font-black text-navy-blue">
      {count}
      {suffix}
    </span>
  );
}

export default function Solutions() {
  const { triggerTransition } = useTransition();

  const solutions = [
    {
      title: "FARM SETUP",
      desc: "Custom Dairy Farm Design, Construction & Turnkey Projects",
      buttonText: "Explore Now",
      image: "/images/modern-dairy-farm.png",
      path: "/farm-setup",
    },
    {
      title: "DAIRY EQUIPMENT",
      desc: "Milking Machines, Cooling Tanks, Fans & More",
      buttonText: "View Products",
      image: "/images/milking-machines.jpg",
      path: "/dairy-equipment",
    },
    {
      title: "SUPER GENETICS",
      desc: "High Genetic Merit Semen for Better Productivity",
      buttonText: "Explore Genetics",
      image: "/images/sorted-semen.jpg",
      path: "/super-genetics",
    },
    {
      title: "NUTRITION",
      desc: "Balanced Nutrition for Healthier & Higher Yield",
      buttonText: "View Nutrition",
      image: "/images/dairy-nutrition.jpg",
      path: "/dairy-nutrition",
    },
  ];

  const stats = [
    {
      number: 500,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      number: 100,
      suffix: "+",
      label: "Farm Projects",
    },
    {
      number: 10,
      suffix: "+",
      label: "Years of Experience",
    },
    {
      number: 24,
      suffix: "/7",
      label: "Customer Support",
    },
  ];

  const handleAction = (e, path) => {
    e.preventDefault();
    e.stopPropagation();
    triggerTransition(path);
  };

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 bg-sky-blue/50" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#003B8E]">
              OUR SOLUTIONS
            </span>
            <div className="h-[2px] w-12 bg-sky-blue/50" />
          </div>
          <h2 className="text-3xl font-black text-[#003B8E] sm:text-4xl tracking-tight leading-tight uppercase">
            <TypewriterHeading text="Everything You Need, Under One Roof" cursorClassName="text-[#003B8E] animate-pulse ml-0.5" />
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            High quality products and services to build a more productive and profitable dairy farm.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, index) => (
            <div
              key={index}
              onClick={(e) => handleAction(e, item.path)}
              className="group cursor-pointer rounded-2xl bg-white border border-slate-100 shadow-premium shadow-premium-hover flex flex-col h-full overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative w-full aspect-[4/3] bg-slate-50 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>

              {/* Text & Action Section */}
              <div className="pt-6 pb-6 px-6 flex flex-col flex-grow space-y-4">
                <div className="space-y-2 flex-grow">
                  <h3 className="text-sm sm:text-base font-black text-[#003B8E] tracking-wider uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-sky-blue/30 bg-white px-4.5 py-2 text-xs font-bold text-[#003B8E] group-hover:border-brand-red group-hover:bg-[#003B8E] group-hover:text-white transition-all duration-300 shadow-sm">
                    <span>{item.buttonText}</span>
                    <ArrowRight className="h-3.5 w-3.5 animate-pulse" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner Row */}
        <div className="mt-20 rounded-3xl border border-slate-100/80 bg-slate-50/80 backdrop-blur-md p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:gap-8 lg:divide-x divide-slate-200">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center lg:px-4"
              >
                <div className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-none tracking-tight">
                  <Counter value={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-2.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
