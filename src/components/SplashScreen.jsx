"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock background scroll during splash
    document.body.style.overflow = "hidden";

    // Progress bar animation timer (smooth build-up over ~2.4 seconds)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 90);

    // Start fade out at 2.4 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2400);

    // Hide splash screen completely at 3.0 seconds
    const hideTimer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-radial from-[#003B8E]/5 via-transparent to-transparent pointer-events-none" />

      {/* Main Splash Container */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 space-y-10 max-w-2xl w-full text-center">
        
        {/* Saanjh Logo Container - 80% Bigger Sizing */}
        <div className="relative w-[320px] sm:w-[480px] md:w-[576px] h-36 sm:h-44 md:h-52 flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="SAANJH Dairy Solutions"
            fill
            priority
            className="object-contain drop-shadow-xl transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Dual-ring Glowing Buffer Spinner */}
        <div className="relative flex items-center justify-center my-1">
          {/* Outer glowing ring */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-slate-100 border-t-[#003B8E] border-r-[#D90000] animate-spin shadow-lg" />
          
          {/* Inner pulse ring */}
          <div className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-200 border-b-[#003B8E] animate-ping opacity-60" />
          
          {/* Center brand dot */}
          <div className="absolute w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#003B8E] shadow-sm animate-pulse" />
        </div>

        {/* Thick Filled Dynamic Progress Bar */}
        <div className="w-64 sm:w-80 md:w-96 space-y-3">
          {/* Outer track */}
          <div className="h-4 sm:h-5 w-full bg-slate-100 rounded-full overflow-hidden p-1 shadow-inner border border-slate-200 relative">
            {/* Inner fill bar */}
            <div
              className="h-full bg-gradient-to-r from-[#003B8E] via-[#0056D2] to-[#D90000] rounded-full transition-all duration-150 ease-out shadow-md relative overflow-hidden flex items-center justify-end"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect inside fill bar */}
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
          
          {/* Progress Percentage Badge */}
          <div className="flex items-center justify-between text-xs sm:text-sm font-black uppercase tracking-wider text-slate-500 pt-0.5">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#003B8E] animate-ping" />
              Loading Experience
            </span>
            <span className="text-[#003B8E] font-black text-sm sm:text-base px-2.5 py-0.5 bg-slate-100 rounded-lg border border-slate-200">
              {progress}%
            </span>
          </div>
        </div>

      </div>

      {/* Footer Tagline */}
      <div className="absolute bottom-8 text-center text-[11px] sm:text-xs font-black text-slate-400 tracking-widest uppercase">
        SAANJH DAIRY SOLUTIONS &bull; ESTD 1964
      </div>
    </div>
  );
}
