"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const sponsors = [
  {
    id: 1,
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RYxjSFYbUEYtkjcC7Ysz6qPh0jLnaJ.png",
    title: "polygon",
    description:
      "Dab Dab Dub Dub Bimboom Tiding Dhanda Ksdas Yasu Ka Gar Oda Ghar Mera Ghar Aai La Jaadu Beem Boom Ting Ding Fing Ding Z Zing Yam Hu Mai",
    features: [
      "Ye Use Krna Adbas Adadljnad Sdjajdda",
      "Ye Use Krna Adbas Adadljnad Sdjajdda",
      "Ye Use Krna Adbas Adadljnad Sdjajdda",
    ],
  },
  {
    id: 2,
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RYxjSFYbUEYtkjcC7Ysz6qPh0jLnaJ.png",
    title: "Sponsor 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: [
      "Feature 1 for Sponsor 2",
      "Feature 2 for Sponsor 2",
      "Feature 3 for Sponsor 2",
    ],
  },
  {
    id: 3,
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RYxjSFYbUEYtkjcC7Ysz6qPh0jLnaJ.png",
    title: "Sponsor 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    features: [
      "Feature 1 for Sponsor 3",
      "Feature 2 for Sponsor 3",
      "Feature 3 for Sponsor 3",
    ],
  },
  {
    id: 4,
    logo: "/placeholder.svg?height=100&width=200",
    title: "Sponsor 4",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    features: [
      "Feature 1 for Sponsor 4",
      "Feature 2 for Sponsor 4",
      "Feature 3 for Sponsor 4",
    ],
  },
];

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayInterval = 5000; // 5 seconds

  useEffect(() => {
    let interval:any;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sponsors.length);
      }, autoPlayInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const handlePrevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + sponsors.length) % sponsors.length);
  };

  const handleNextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % sponsors.length);
  };

  const handleDotClick = (index:any) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

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

        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl font-bold mb-2 font-custom"
            animate={{
              textShadow: [
                "0 0 0px #00e5ff",
                "0 0 8px #00e5ff",
                "0 0 0px #00e5ff",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-[#00e5ff]">Sponser</span>{" "}
            <span className="text-white">Tracks</span>
          </motion.h1>

          <motion.div
            className="h-0.5 max-w-xl bg-gradient-to-r from-transparent via-[#0ce3ff] to-transparent mx-auto mb-2"
            animate={{
              scaleX: [0.6, 1, 0.6],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          ></motion.div>

          <motion.p
            className="text-[#00e5ff] text-lg tracking-wider"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            YOUR GUIDE TO HACKMOL 6.0
          </motion.p>
        </motion.div>

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
        <div className="overflow-hidden font-sans backdrop-blur-sm rounded-xl border border-[#00e5ff20] bg-slate-900/30 p-8 shadow-lg">
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
                  className="mb-8 w-64 h-24 relative"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Image
                    src={sponsors[currentSlide].logo || "/placeholder.svg"}
                    alt={sponsors[currentSlide].title}
                    fill
                    className="object-contain"
                  />
                </motion.div>

                <motion.div
                  className="text-white text-center mb-12 max-w-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-xl leading-relaxed bg-gradient-to-r from-white to-[#00e5ff] bg-clip-text text-transparent">
                    {sponsors[currentSlide].description}
                  </p>
                </motion.div>

                {/* Sponsor Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                  {sponsors[currentSlide].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="text-white text-center backdrop-blur-sm bg-slate-800/30 border border-slate-700/30 p-6 rounded-lg hover:border-[#00e5ff50] transition-all duration-300"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 229, 255, 0.1)",
                      }}
                    >
                      <motion.div
                        className="flex items-center justify-center mb-4"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotateZ: [0, 5, 0, -5, 0],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <span className="text-[#00e5ff] text-2xl">◆</span>
                      </motion.div>
                      <p>{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {sponsors.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-[#00e5ff]" : "bg-white/50"
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
              {sponsors.length} <span className="pl-0.5 text-lg">𐎄</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Corner decorations */}
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
