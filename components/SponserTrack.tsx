"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SponserCarousel from "@/components/SponserCarousel";
import PartnersSection from "./PartnersSection";

const decorativeIcons = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JVMrr6YvMxE2971tJm2DSnLvZzxTXd.png",
    className: "absolute top-20 left-40 w-20 h-20 opacity-70",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cE4VTyjZaT5pyPhR3JbtYnZUi3VxUb.png",
    className: "absolute bottom-20 right-40 w-16 h-16 opacity-70",
  },
];

export default function SponserTrackCarousel() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden flex flex-col items-center justify-center py-12 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGU1ZmYxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-6xl rounded-full bg-[#00e5ff] opacity-5 blur-[100px]"></div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto z-10">
        {/* Floating Decorative Elements */}
        {decorativeIcons.map((icon, index) => (
          <motion.div
            key={index}
            className={icon.className}
            animate={{
              y: [0, 15, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={icon.src || "/placeholder.svg"}
              alt="Decorative icon"
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}

        {/* Small particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[#00e5ff]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="space-y-16">
          <SponserCarousel />
          <PartnersSection />
        </div>
      </div>

      <motion.div
        className="absolute bottom-4 right-4 text-[#00e5ff]/30 text-2xl"
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ⟁
      </motion.div>

    </main>
  );
}
