"use client";

import { useReducedMotion } from "framer-motion";

const heroVideoSource = "https://www.pexels.com/download/video/6473944/";

export function HeroMedia() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#292a28]" aria-hidden="true">
      <div
        className="absolute inset-0 scale-[1.02] bg-cover bg-center"
        style={{ backgroundImage: "url('/media/services/interior-painting.webp')" }}
      />

      {!shouldReduceMotion ? (
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/services/interior-painting.webp"
        >
          <source src={heroVideoSource} type="video/mp4" />
        </video>
      ) : null}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,9,0.78)_0%,rgba(10,10,9,0.58)_48%,rgba(10,10,9,0.34)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,9,0.18)_0%,rgba(10,10,9,0.12)_58%,rgba(10,10,9,0.5)_100%)]" />
    </div>
  );
}
