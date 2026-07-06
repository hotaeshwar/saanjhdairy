"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, PhoneCall } from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredRect, setHoveredRect] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Products", to: "/products" },
    { name: "Services", to: "/services" },
    { name: "Why Choose Us", to: "/why-choose" },
    { name: "Contact", to: "/contact" },
  ];

  const handleMouseEnter = (e) => {
    const linkEl = e.currentTarget;
    const rect = linkEl.getBoundingClientRect();
    const containerEl = containerRef.current;
    if (containerEl) {
      const containerRect = containerEl.getBoundingClientRect();
      setHoveredRect({
        left: rect.left - containerRect.left,
        width: rect.width,
        height: rect.height,
      });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 border-b border-navy-blue/20`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0 py-1">
            <Link to="/" className="flex items-center">
              <div className="relative h-22 w-64 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="SAANJH Dairy Solutions"
                  fill
                  className="object-contain object-left scale-115 origin-left transition-transform duration-300"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div 
            ref={containerRef}
            className="hidden md:flex md:items-center md:space-x-4 relative"
            onMouseLeave={() => setHoveredRect(null)}
          >
            {/* Sliding Highlight Pill */}
            <div
              className="absolute rounded-full bg-sky-accent/70 transition-all duration-300 ease-out -z-10 pointer-events-none"
              style={{
                left: hoveredRect ? `${hoveredRect.left}px` : "0px",
                width: hoveredRect ? `${hoveredRect.width}px` : "0px",
                height: hoveredRect ? `${hoveredRect.height}px` : "0px",
                opacity: hoveredRect ? 1 : 0,
              }}
            />
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onMouseEnter={handleMouseEnter}
                className="text-base font-semibold text-navy-blue hover:text-brand-red px-3 py-2 rounded-full transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <AnimatedButton
              href="/contact"
              className="rounded-full bg-navy-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-red"
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              Contact Us
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-navy-blue hover:bg-slate-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Menu className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 border-t border-slate-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 py-4 bg-white shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-3 text-base font-semibold text-navy-blue hover:bg-sky-accent hover:text-brand-red transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <AnimatedButton
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-full bg-brand-red px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-navy-blue"
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              Contact Us
            </AnimatedButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
