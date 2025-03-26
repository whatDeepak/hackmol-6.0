"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const partners = [
  {
    id: 1,
    logo: "/partners/p1.png",
    title: "Geek Room",
  },
  {
    id: 2,
    logo: "/partners/p2.png",
    title: "engineerHUB",
  },
  {
    id: 3,
    logo: "/partners/p3.png",
    title: "GDG Jalandhar",
  },
  {
    id: 4,
    logo: "/partners/p4.png",
    title: "GDG Chandigarh",
  },
  {
    id: 5,
    logo: "/partners/p5.png",
    title: "GDG DAV",
  },
  {
    id: 6,
    logo: "/partners/p6.png",
    title: "GDG UICT",
  },
  {
    id: 7,
    logo: "/partners/p7.png",
    title: "GDG UIET",
  },
  {
    id: 8,
    logo: "/partners/p8.png",
    title: "GDG Chandigarh",
  },
  {
    id: 9,
    logo: "/partners/p9.png",
    title: "GDG GLA",
  },
];


export default function PartnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayInterval = 5000; // 5 seconds

  useEffect(() => {
    let interval: any;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % partners.length);
      }, autoPlayInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const handlePrevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const handleNextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % partners.length);
  };

  const handleDotClick = (index: any) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto z-10">

      {/* Header withOUT animation */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-2 event-timeline-title font-custom">
          Community Partners
        </h1>
        <div className="h-0.5 max-w-xl bg-gradient-to-r from-transparent via-[#0ce3ff] to-transparent mx-auto mb-2"></div>
        <p className="text-[#0ce3ff] text-lg tracking-wider font-sans uppercase">
          The Titans Who Strengthen Our Saga
        </p>
      </div>

      {/* Carousel Navigation */}
      <motion.button
        whileHover={{ scale: 1.2, x: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={handlePrevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 transition-opacity pl-4"
        aria-label="Previous slide"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wUjH4zsjzytydGCmqYr1Ww0hR4irhr.png"
          alt="Previous"
          width={48}
          height={48}
          className="w-12 h-12 filter drop-shadow-glow"
        />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.2, x: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 transition-opacity pr-4"
        aria-label="Next slide"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NunwGBrsksCnxoaBdbmGmuq0I2iKrQ.png"
          alt="Next"
          width={48}
          height={48}
          className="w-12 h-12 filter drop-shadow-glow"
        />
      </motion.button>

      {/* Carousel Content */}
      <div className="overflow-hidden font-sans backdrop-blur-sm rounded-xl border border-[#00e5ff20] bg-slate-900/30 p-8 shadow-lg h-72 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <div className="flex flex-col items-center">
              <motion.div
                className="mb-8 w-96 h-40 relative"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Image
                  src={partners[currentSlide].logo || "/placeholder.svg"}
                  alt={partners[currentSlide].title}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-12 space-x-2">
        {partners.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-[#00e5ff]" : "bg-white/50"
              }`}
            animate={
              index === currentSlide
                ? {
                  boxShadow: [
                    "0 0 0px #00e5ff",
                    "0 0 8px #00e5ff",
                    "0 0 0px #00e5ff",
                  ],
                  scale: [1, 1.1, 1],
                }
                : {}
            }
            transition={{ duration: 2, repeat: Infinity }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Stats or counter at bottom */}
      <motion.div
        className="mt-8 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-slate-800/50 border border-slate-700/30 px-3 py-2 rounded-md flex items-center space-x-2">
          <span className="text-[#00e5ff] text-sm">{currentSlide + 1}</span>
          <span className="text-white/40">⎯</span>
          <span className="text-white/80 text-sm">
            {partners.length} <span className="pl-0.5 text-lg">𐎄</span>
          </span>
        </div>
      </motion.div>
    </div>

  );
}
