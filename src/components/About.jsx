import Image from "next/image";
import { ShieldCheck, Target, Heart } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-navy-blue" />,
      title: "Sustainable Methods",
      description: "Implementing eco-friendly and sustainable farm plans that endure for generations.",
    },
    {
      icon: <Target className="h-6 w-6 text-brand-red" />,
      title: "Profitable Design",
      description: "Optimizing animal housing, feed lines, and automated milking to maximize yields.",
    },
    {
      icon: <Heart className="h-6 w-6 text-sky-blue" />,
      title: "Cow Welfare First",
      description: "Focusing heavily on ventilation, soft cubicle bedding, and premium cow comfort.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-[4/3] w-full border border-slate-100 bg-slate-100">
              <Image
                src="/images/hero-dairy-farm.jpg"
                alt="Modern Dairy Farm Setup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 md:right-4 bg-navy-blue text-white p-6 rounded-xl shadow-lg border border-white max-w-[200px]">
              <div className="text-3xl font-extrabold text-brand-red">1964</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-300 mt-1">
                Establishment Year
              </div>
              <div className="text-sm font-bold mt-2 border-t border-white/20 pt-2">
                Farm Values... Future Ready
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-red">
                About Our Enterprise
              </span>
              <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl">
                Building Modern, Profitable & Sustainable Dairy Farms
              </h2>
            </div>
            
            <p className="text-base text-slate-600 leading-relaxed">
              SAANJH Dairy Solutions provides complete dairy farm setup, farm planning, cow comfort systems, milking solutions, dairy hygiene products, dairy nutrition, AI & breeding equipment, sorted semen, and farm equipment under one roof.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Our engineering plans prioritize herd longevity, optimal milking hygiene, and operational efficiency. By blending traditional farming values with state-of-the-art technological automation, we make your dairy enterprise ready for the challenges of tomorrow.
            </p>

            {/* Micro highlights list */}
            <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-3">
              {highlights.map((h, i) => (
                <div key={i} className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="p-2 w-fit rounded-lg bg-white shadow-sm border border-slate-100">
                    {h.icon}
                  </div>
                  <h4 className="font-bold text-navy-blue text-sm">{h.title}</h4>
                  <p className="text-xs text-slate-500">{h.description}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
