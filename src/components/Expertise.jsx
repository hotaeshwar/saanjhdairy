import { CheckCircle2, ChevronRight } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";

export default function Expertise() {
  const expertiseItems = [
    "Complete Dairy Farm Setup",
    "Dairy Shed Design & Planning",
    "Cubicle Housing Systems",
    "Cow Comfort Products",
    "Milking Machines & Accessories",
    "Automatic Milking Parlours",
    "Feeding Management Solutions",
    "Watering Systems",
    "Dairy Farm Automation",
    "Ventilation & Cooling Systems",
    "Artificial Insemination Equipment",
    "Herd Management Solutions",
    "Dairy Hygiene & Sanitation Products",
    "Farm Consultancy & Technical Support",
  ];

  return (
    <section id="expertise" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-red">
            Our Expertise & Services
          </span>
          <h2 className="text-3xl font-extrabold text-navy-blue sm:text-4xl">
            <TypewriterHeading text="Professional Solutions Tailored to Your Farm Need" cursorClassName="text-brand-red animate-pulse ml-0.5" />
          </h2>
          <p className="text-base text-slate-600">
            From design to automation, we deliver comprehensive setup engineering to help establish productive dairy farming operations.
          </p>
        </div>

        {/* Grid of Checklist Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-premium shadow-premium-hover"
            >
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-sky-accent text-navy-blue">
                <CheckCircle2 className="h-6 w-6 text-navy-blue" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-slate-800 text-base">{item}</h3>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-300 flex-shrink-0" />
            </div>
          ))}
        </div>

        {/* Consultancy CTA Box */}
        <div className="mt-16 bg-navy-blue text-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 rounded-full bg-brand-red/10 blur-xl" />
          
          <div className="space-y-3 z-10 text-center md:text-left max-w-2xl">
            <h3 className="text-2xl font-bold sm:text-3xl">Need a Customized Layout for Your Shed?</h3>
            <p className="text-sm text-slate-300">
              Get in touch with our experts today. We provide professional consultancy, site planning, and blueprint drafting to optimize cow flow and automation.
            </p>
          </div>
          
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-brand-red hover:bg-white hover:text-navy-blue text-white px-6 py-3.5 text-base font-bold shadow-md transition-all duration-300 z-10 whitespace-nowrap"
          >
            Get Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
