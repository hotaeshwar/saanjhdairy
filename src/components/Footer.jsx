import Image from "next/image";
import { Phone, Mail, MapPin, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Products", to: "/products" },
    { name: "Services & Expertise", to: "/services" },
    { name: "Why Choose Us", to: "/why-choose" },
    { name: "Contact Us", to: "/contact" },
  ];

  const services = [
    "Complete Dairy Farm Setup",
    "Dairy Shed Design & Planning",
    "Cow Comfort Setup",
    "Milking Machines & Parlors",
    "Dairy Hygiene Solutions",
    "Sorted Semen & AI Equipment",
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t-4 border-navy-blue">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Logo & Tagline Column */}
          <div className="md:col-span-1 flex flex-col space-y-4">
            <div className="relative h-24 w-64 bg-white rounded-lg p-2 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="SAANJH Dairy Solutions"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-sm italic text-slate-400 font-medium pt-2">
              "Caring For Cows… Delivering Excellence"
            </p>
            <div className="text-xs text-slate-500 pt-4">
              <span className="font-semibold text-slate-400">GSTIN:</span> 03AFNPS1267B1Z8
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-4 border-brand-red pl-3 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-4 border-brand-red pl-3 mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-slate-400 flex items-center">
                  <CheckCircle className="h-4 w-4 text-sky-blue mr-2 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-4 border-brand-red pl-3 mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-red mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  Sito Bypass, Near Marrie Villa,<br />
                  Abohar-152116 (PB.)
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-brand-red mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-slate-400">
                  <a href="tel:91224-96000" className="hover:text-white block">91224-96000</a>
                  <a href="tel:94656-17949" className="hover:text-white block">94656-17949</a>
                  <a href="tel:97807-66438" className="hover:text-white block">97807-66438</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-red mr-3 flex-shrink-0" />
                <a
                  href="mailto:saanjhdairysolutions@gmail.com"
                  className="text-sm text-slate-400 hover:text-white break-all"
                >
                  saanjhdairysolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-6 text-center text-xs text-slate-500 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} SAANJH Dairy Solutions. All rights reserved.</p>
          <p className="flex items-center">
            <Award className="h-4 w-4 text-sky-blue mr-1" />
            Dairy Farm Setup Experts Since 1964
          </p>
        </div>
      </div>
    </footer>
  );
}
