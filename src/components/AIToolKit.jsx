import Image from "next/image";
import { Thermometer, Layers, Check } from "lucide-react";

export default function AIToolKit() {
  const kitItems = [
    { name: "Semen Tank", desc: "Liquid nitrogen cryo-containers for reliable semen preservation." },
    { name: "Straw Cutter", desc: "Precision cutters ensuring clean, perpendicular cuts for semen straws." },
    { name: "Semen", desc: "High quality genetics straw stocks from leading worldwide brands." },
    { name: "Tweezer", desc: "Surgical grade tweezers for safe handling during extraction." },
    { name: "AI Gun", desc: "Premium sheath-locking insemination guns built to standard sizes." },
    { name: "Thermos to Thaw with Thermometer", desc: "Maintains optimal 37°C thawing temperatures with scale precision." },
    { name: "Plastic Sleeves", desc: "Disposable shoulder-length protective gloves for sanitation." },
    { name: "Sheaths", desc: "Sanitary plastic sheaths with split or non-split adaptors." },
    { name: "Dipstick Measurer", desc: "Manual ruler tool for checking liquid nitrogen level safely." },
  ];

  return (
    <section id="ai-tool-kit" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-red">
            Artificial Insemination Setup
          </span>
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl">
            A.I. Tool Kit & Equipment
          </h2>
          <p className="text-base text-slate-600">
            Basic materials and specialized diagnostic equipment required for successful artificial breeding programs on your dairy farm.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content Grid */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl font-extrabold text-navy-blue mb-4">
              Basic Materials for Artificial Insemination
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {kitItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-100 shadow-premium flex items-start space-x-3.5"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-navy-blue/10 text-navy-blue flex items-center justify-center mt-0.5 font-bold text-xs">
                    <Check className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 text-sm leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Media Frame */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-square w-full bg-slate-100">
              <Image
                src="/images/ai-tool-kit.jpg"
                alt="AI Insemination Kit Equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-navy-blue/10" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
