import Image from "next/image";
import { Hammer, CircleAlert, CheckSquare } from "lucide-react";

export default function ToolsAccessories() {
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

  return (
    <section id="tools-accessories" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-red">
            Dairy Tools & Veterinary Accessories
          </span>
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl">
            Essential Farm Accessories & Equipment
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
                  className="flex items-center space-x-3 p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-sky-blue/30 transition-all duration-200"
                >
                  <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-sky-accent text-navy-blue flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </div>
                  <span className="font-bold text-slate-700 text-sm leading-snug">
                    {tool}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact quick callout */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-navy-blue hover:bg-brand-red text-white px-6 py-3 font-bold transition-all duration-300 text-sm"
              >
                Inquire For Tools Catalog
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
