"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function AnimatedButton({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) {
  const [particles, setParticles] = useState([]);

  const handleClick = (e) => {
    // Generate particles
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newParticles = Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 360) / 8 + Math.random() * 20 - 10;
      const velocity = 35 + Math.random() * 35;
      return {
        id: Date.now() + Math.random(),
        x,
        y,
        tx: `${Math.cos((angle * Math.PI) / 180) * velocity}px`,
        ty: `${Math.sin((angle * Math.PI) / 180) * velocity}px`,
      };
    });

    setParticles((prev) => [...prev, ...newParticles]);

    // Clean up particles
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 700);

    if (onClick) onClick(e);
  };

  const content = (
    <>
      {/* Background split curtain animation on click (active state) */}
      <span className="absolute inset-y-0 left-0 w-1/2 bg-white/10 -translate-x-full group-active:translate-x-0 transition-transform duration-300 pointer-events-none" />
      <span className="absolute inset-y-0 right-0 w-1/2 bg-white/10 translate-x-full group-active:translate-x-0 transition-transform duration-300 pointer-events-none" />

      {/* Children content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>

      {/* Floating particles parting away */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            "--tx": p.tx,
            "--ty": p.ty,
          }}
        />
      ))}
    </>
  );

  const baseClass = `group relative overflow-hidden inline-flex items-center justify-center font-bold transition-all duration-300 select-none active:scale-95 ${className}`;

  if (href) {
    const isHash = href.startsWith("#");
    if (isHash) {
      return (
        <a href={href} onClick={handleClick} className={baseClass}>
          {content}
        </a>
      );
    }
    return (
      <Link to={href} onClick={handleClick} className={baseClass}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={baseClass}
    >
      {content}
    </button>
  );
}
