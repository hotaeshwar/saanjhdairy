import Image from "next/image";
import { Check } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    { title: "End-to-End Dairy Farm Solutions", desc: "No need to juggle vendors. We manage planning, sourcing, setup, and support." },
    { title: "Professional Farm Planning", desc: "Shed blueprints designed to optimize cow traffic, ventilation, and cleaning paths." },
    { title: "Premium Quality Equipment", desc: "Engineered using high-quality steel and food-grade components for long lifespans." },
    { title: "Cow Comfort Specialist", desc: "Focus on reducing herd stress through high-quality rubber matting and cubicle dividers." },
    { title: "Complete Milking Solutions", desc: "Configurable parlors and mobile machinery adapted to standard Indian farm conditions." },
    { title: "Reliable Technical Support", desc: "Prompt assistance, installation support, and ready spare parts availability." },
    { title: "Affordable & Practical Designs", desc: "Cost-efficient building architectures that align perfectly with business yields." },
    { title: "Customized Farm Projects", desc: "Tailored to your budget, herd size, land shape, and mechanical automation level." },
    { title: "Dairy Hygiene Expertise", desc: "Specialized brushes, liners, teat dips, and chemicals for clean milk production." },
    { title: "Experienced Team", desc: "Decades of engineering exposure in establishing highly successful dairy projects." },
  ];

  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-red">
            Our Key Strengths
          </span>
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl">
            Why Choose Saanjh Dairy Solutions?
          </h2>
          <p className="text-base text-slate-600">
            With a focus on customer satisfaction and animal welfare, we stand as a trusted engineering partner for dairy farmers.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Points list */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((p, i) => (
                <div
                  key={i}
                  className="flex space-x-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm hover:shadow-premium hover:bg-white hover:border-sky-blue/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-navy-blue text-sm leading-snug">{p.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Graphic frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] w-full bg-slate-50">
              <Image
                src="/images/why-choose.jpg"
                alt="Why Choose Saanjh Dairy Solutions Infographic"
                fill
                className="object-contain bg-white"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-navy-blue/5" />
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-6 -right-6 bg-navy-blue text-white p-6 rounded-2xl shadow-xl border border-white max-w-[200px] text-center">
              <div className="text-lg font-bold text-brand-red uppercase">Since 1964</div>
              <p className="text-xs text-slate-300 mt-1 leading-normal">
                Serving the Indian dairy farming community with absolute integrity.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
