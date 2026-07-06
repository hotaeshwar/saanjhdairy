import Image from "next/image";
import { Milk, Sparkles, TrendingUp, ShieldCheck, Heart, Award } from "lucide-react";

export default function DairyNutrition() {
  const products = [
    { name: "Yeast", desc: "Enhances rumen fermentation, stabilization, and digestion." },
    { name: "Buffer", desc: "Maintains optimal pH levels in the rumen to avoid acidosis." },
    { name: "Bypass Fat", desc: "Energy-dense fat source for high-yield dairy cows." },
    { name: "BP GLU", desc: "Glucose boosters to mitigate ketosis risk post-calving." },
    { name: "Toxin Binder", desc: "Protects herd from mold and feeds contaminated with mycotoxins." },
    { name: "Minerals", desc: "Chelated trace minerals for bones, skin, and overall vitality." },
    { name: "Vitamins", desc: "Essential A, D3, E supplements for reproductive strength." },
  ];

  const benefits = [
    { text: "Higher Milk Production", icon: <Milk className="h-5 w-5 text-navy-blue" /> },
    { text: "Better Feed Efficiency", icon: <TrendingUp className="h-5 w-5 text-brand-red" /> },
    { text: "Stronger Immunity & Health", icon: <ShieldCheck className="h-5 w-5 text-sky-blue" /> },
    { text: "Improved Rumen Function", icon: <Sparkles className="h-5 w-5 text-brand-red" /> },
    { text: "Better Reproduction & Fertility", icon: <Heart className="h-5 w-5 text-navy-blue" /> },
    { text: "Higher Profitability & ROI", icon: <Award className="h-5 w-5 text-sky-blue" /> },
  ];

  return (
    <section id="dairy-nutrition" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-red">
            Animal Health & Feed Supplements
          </span>
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl">
            Dairy Nutrition Products
          </h2>
          <p className="text-base text-slate-600">
            Formulated feed additives and specialty mineral supplements to boost lactation, improve immunity, and optimize digestion.
          </p>
        </div>

        {/* Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Product Cards Grid */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <h3 className="text-xl font-bold text-navy-blue border-l-4 border-brand-red pl-3 mb-6">
              Our Nutrition Range
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.map((p, i) => (
                <div
                  key={i}
                  className="p-5 bg-white border border-slate-150 rounded-2xl shadow-premium shadow-premium-hover flex items-start space-x-3.5"
                >
                  <div className="h-8 w-8 rounded-lg bg-sky-accent flex items-center justify-center text-navy-blue font-bold text-xs flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 text-sm">{p.name}</h4>
                    <p className="text-xs text-slate-500 leading-normal">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image and Benefits Panel */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
            {/* Main Section Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] w-full bg-slate-100">
              <Image
                src="/images/dairy-nutrition.jpg"
                alt="Dairy Nutrition Products and Supplements"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-navy-blue/10" />
            </div>

            {/* Benefits Highlight Box */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-premium">
              <h4 className="font-bold text-navy-blue text-sm uppercase tracking-wider mb-4">
                Nutritional Health Benefits:
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center space-x-2 text-slate-700 font-semibold text-xs">
                    <div className="p-1 rounded bg-slate-50 border border-slate-150 flex-shrink-0">
                      {b.icon}
                    </div>
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
