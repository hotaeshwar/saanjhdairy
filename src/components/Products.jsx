"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("all");

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
      image: "/images/hero-dairy-farm.jpg",
      description: "Complete design, metal shed construction, and setup orchestration.",
    },
    {
      name: "Cow Comfort",
      category: "comfort",
      image: "/images/why-choose.jpg",
      description: "Includes high quality rubber mats, dynamic scratching brushes, and beds.",
    },
    {
      name: "Manure Management",
      category: "comfort",
      image: "/images/why-choose.jpg",
      description: "Automatic scrapers and separation systems for quick organic waste clearing.",
    },
    {
      name: "Cooling & Ventilation",
      category: "comfort",
      image: "/images/hero-dairy-farm.jpg",
      description: "Large dynamic ceiling fans and high-pressure atomized misting systems.",
    },
    {
      name: "Milk Storage",
      category: "infrastructure",
      image: "/images/milking-machines.jpg",
      description: "Bulk milk cooling tanks with high-efficiency stainless steel build.",
    },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? productsList
      : productsList.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-red">
            Premium Product Catalog
          </span>
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl">
            Our High-Quality Dairy Equipment
          </h2>
          <p className="text-base text-slate-600">
            Engineered for reliability, ease of operation, and long lifetime. Explore our range of farm setup solutions.
          </p>
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
                
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-bold text-navy-blue hover:text-brand-red transition-colors group"
                >
                  Inquire Now
                  <MoveRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
