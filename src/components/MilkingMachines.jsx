import Image from "next/image";
import { Shield, Sparkles, Check } from "lucide-react";

export default function MilkingMachines() {
  const ssFeatures = [
    "Stainless Steel Build",
    "Rust Proof",
    "Durable & Long Lasting",
    "Vacuum Efficiency",
    "Easy Mobility",
  ];

  const msFeatures = [
    "Mild Steel Build",
    "Strong & Reliable",
    "Cost Effective",
    "Easy To Operate",
    "Low Maintenance",
  ];

  const specifications = [
    { spec: "Body Material", ss: "Premium Food-Grade Stainless Steel (SS)", ms: "High-Strength Coated Mild Steel (MS)" },
    { spec: "Milk Can Capacity", ss: "20L / 25L (SS-304)", ms: "20L / 25L (Standard Aluminum / SS)" },
    { spec: "Vacuum Pump", ss: "Heavy-duty Oil lubricated / Dry", ms: "Oil-lubricated High Performance" },
    { spec: "Vacuum Range", ss: "350 - 500 mmHg", ms: "350 - 450 mmHg" },
    { spec: "Bucket Type", ss: "Stainless Steel Double / Single", ms: "Stainless Steel / Aluminum Single" },
    { spec: "Pulsation", ss: "Pneumatic / Electronic Pulsator", ms: "Standard Pneumatic Pulsator" },
    { spec: "Mobility", ss: "Heavy-duty caster wheels with lock", ssAccent: true, ms: "Two rubber trolley wheels" },
    { spec: "Usage", ss: "Perfect for high-humidity & heavy commercial use", ms: "Cost-effective choice for small/medium farms" },
  ];

  return (
    <section id="milking-machines" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-red">
            Milking Equipment Comparison
          </span>
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl">
            SS Milking Machine vs MS Milking Machine
          </h2>
          <p className="text-base text-slate-600">
            Compare our two premium build configurations to select the best match for your operational demands and budget.
          </p>
        </div>

        {/* Side by Side Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          
          {/* SS Milking Machine Card */}
          <div className="bg-white border-2 border-sky-blue/30 rounded-3xl p-8 shadow-premium shadow-premium-hover relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-sky-accent text-navy-blue text-xs font-bold uppercase px-4 py-2 rounded-bl-2xl flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> Premium Choice
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-navy-blue">SS Milking Machine</h3>
                <p className="text-sm text-slate-500">Stainless Steel Build Configuration</p>
              </div>

              {/* Product Placeholder Image */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                <Image
                  src="/images/milking-machines.jpg"
                  alt="SS Milking Machine"
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 pt-4">
                {ssFeatures.map((f, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <div className="h-5 w-5 rounded-full bg-sky-accent text-navy-blue flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <a
                href="#contact"
                className="w-full inline-flex justify-center items-center rounded-xl bg-navy-blue text-white px-5 py-3 font-bold hover:bg-brand-red transition-all duration-300 shadow-sm"
              >
                Inquire SS Model
              </a>
            </div>
          </div>

          {/* MS Milking Machine Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-premium shadow-premium-hover flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-slate-800">MS Milking Machine</h3>
                <p className="text-sm text-slate-500">Mild Steel Build Configuration</p>
              </div>

              {/* Product Placeholder Image */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                <Image
                  src="/images/milking-machines.jpg"
                  alt="MS Milking Machine"
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 pt-4">
                {msFeatures.map((f, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <div className="h-5 w-5 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <a
                href="#contact"
                className="w-full inline-flex justify-center items-center rounded-xl border border-slate-300 bg-white text-slate-700 px-5 py-3 font-bold hover:bg-slate-50 transition-all duration-300"
              >
                Inquire MS Model
              </a>
            </div>
          </div>

        </div>

        {/* Specifications Table */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-premium">
          <div className="p-6 bg-slate-900 border-b border-slate-850">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Shield className="h-5 w-5 text-sky-blue mr-2" /> Technical Specifications
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <th className="p-4 pl-6">Specification</th>
                  <th className="p-4">SS Milking Machine</th>
                  <th className="p-4 pr-6">MS Milking Machine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-600">
                {specifications.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 pl-6 font-bold text-slate-700">{row.spec}</td>
                    <td className="p-4 text-navy-blue font-semibold">{row.ss}</td>
                    <td className="p-4">{row.ms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
