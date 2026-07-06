import Image from "next/image";
import { Star, ShieldCheck, HeartPulse, Sparkles, TrendingUp, CheckCircle } from "lucide-react";

export default function SortedSemen() {
  const brands = [
    "SEMEX",
    "ST Genetics",
    "Uttarakhand Livestock",
    "MPLD",
    "ABS",
    "SAG",
    "Many More",
  ];

  const benefits = [
    {
      icon: <Sparkles className="h-5 w-5 text-brand-red" />,
      text: "More female calves (90%+ female ratio)",
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-navy-blue" />,
      text: "Higher herd replacement & growth rate",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-sky-blue" />,
      text: "Better productivity & overall milk profit",
    },
    {
      icon: <HeartPulse className="h-5 w-5 text-brand-red" />,
      text: "Advanced international sexed semen technology",
    },
    {
      icon: <Star className="h-5 w-5 text-navy-blue" />,
      text: "Trusted by leading dairy farmers across regions",
    },
  ];

  return (
    <section id="sorted-semen" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Split Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Stats overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-[4/5] border border-slate-100 bg-slate-50">
              <Image
                src="/images/sorted-semen.jpg"
                alt="Sorted Semen Straws and Brands"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-navy-blue/15" />
            </div>

            {/* Quick stats floating bubble */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-4 max-w-[240px]">
              <div className="h-12 w-12 rounded-xl bg-brand-red text-white flex items-center justify-center flex-shrink-0 font-bold text-xl">
                90%
              </div>
              <div className="text-xs text-slate-600 font-bold leading-snug">
                Female Calves Probability Rate using Premium Sexed Semen.
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-red">
                Breeding & Genetics Solutions
              </span>
              <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl">
                All Kind of Sorted Semen Available at One Roof
              </h2>
              <p className="text-slate-600 text-sm">
                We supply premium genetic resources imported and sourced from top globally certified laboratories to guarantee high fertility and superior cattle genetics.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 pt-2">
              <h4 className="font-bold text-navy-blue text-base">Key Benefits of Sexed Semen:</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700 font-semibold text-sm">
                    <div className="flex-shrink-0 p-1.5 rounded-lg bg-slate-50 border border-slate-200">
                      {benefit.icon}
                    </div>
                    <span>{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brands Section */}
            <div className="space-y-3 border-t border-slate-100 pt-6">
              <h4 className="font-bold text-navy-blue text-sm uppercase tracking-wider">
                Partner Genetic Brands:
              </h4>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-lg bg-sky-accent/50 px-3.5 py-1.5 text-xs font-bold text-navy-blue border border-navy-blue/5"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
