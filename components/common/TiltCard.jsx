"use client";

import { useRef, useState } from "react";

export default function TiltCard({ children, className = "", glare = true }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handleMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 7;

    setStyle({
      transform: `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`,
    });

    if (glare) {
      setGlareStyle({
        opacity: 1,
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.22), transparent 34%)`,
      });
    }
  };

  const handleLeave = () => {
    setStyle({ transform: "perspective(1100px) rotateX(0deg) rotateY(0deg) translateY(0px)" });
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={`relative transform-gpu transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {glare ? (
        <span
          aria-hidden="true"
          style={glareStyle}
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
        />
      ) : null}
      {children}
    </div>
  );
}
