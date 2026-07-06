import AnimatedButton from "@/components/AnimatedButton";

export default function Hero() {
  const badges = [
    "Farm Planning",
    "Farm Infrastructure",
    "Cow Comfort",
    "Milking Solutions",
    "Dairy Hygiene",
  ];

  return (
    <section id="home" className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
      {/* Background Graphic Decoration */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-sky-accent/40 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-slate-200/50 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8 text-left animate-fade-in-up">
            
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center rounded-full bg-sky-accent px-3 py-1 text-xs font-bold text-navy-blue border border-navy-blue/10 uppercase tracking-wider"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Main Heading & Subheading */}
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-navy-blue sm:text-5xl lg:text-6xl">
                SAANJH <span className="text-brand-red">Dairy Solutions</span>
              </h1>
              <p className="text-xl font-bold text-slate-700 sm:text-2xl">
                Complete Dairy Farm Solutions Under One Roof
              </p>
              <p className="text-base text-slate-600 max-w-xl">
                Empowering modern farmers with high-quality infrastructure, automated milking setups, cow comfort technology, and artificial insemination systems since 1964.
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <AnimatedButton
                href="#products"
                className="rounded-lg bg-navy-blue px-6 py-3 text-base font-bold text-white shadow-premium hover:bg-brand-red"
              >
                Explore Products
              </AnimatedButton>
              <AnimatedButton
                href="#contact"
                className="rounded-lg border-2 border-navy-blue/30 bg-white px-6 py-3 text-base font-bold text-navy-blue shadow-sm hover:bg-slate-50"
              >
                Contact Us
              </AnimatedButton>
            </div>
          </div>

          {/* Right Video Column (No text overlay) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-video lg:aspect-[4/3] w-full">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                <source src="/video/hero-cow-farm.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Soft decorative shadow below the video frame */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-sky-blue/20 to-transparent blur-lg -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
