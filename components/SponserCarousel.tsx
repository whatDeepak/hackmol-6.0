"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const sponsors = [
  {
    id: 1,
    logo: "/sponsors/gofr.png",
    title: "Gofr (Gold Sponsor)",
    description: "GoFr is an opinionated web framework written in Go (Golang) designed to build robust and scalable applications. It prioritizes simplicity, offering a user-friendly abstraction for developers, with built-in support for logging, monitoring, and tracing.",
    features: [
      "Efficient logging and monitoring",
      "Seamless API development",
      "Gold Sponsor",
    ],
  },
  {
    id: 2,
    logo: "/sponsors/Devfolio.png",
    title: "Devfolio (Gold Sponsor)",
    description: "Devfolio is the leading hackathon platform that empowers developers worldwide. By providing a seamless project submission experience, fostering innovation, and connecting creators with opportunities, Devfolio continues to shape the future of tech communities.",
    features: [
      "Leading hackathon platform",
      "Empowering developers worldwide",
      "Gold Sponsor",
    ],
  },
  {
    id: 3,
    logo: "/sponsors/ethindia.png",
    title: "ETHIndia (Silver Sponsor)",
    description: "ETHIndia is India's premier Ethereum hackathon, bringing together blockchain pioneers, developers, and visionaries to build the decentralized future. With a strong focus on innovation and collaboration, ETHIndia is the hub for cutting-edge Web3 advancements.",
    features: [
      "India's premier Ethereum hackathon",
      "Building the decentralized future",
      "Silver Sponsor",
    ],
  },
  {
    id: 4,
    logo: "/sponsors/csharp.png",
    title: "CSharp (Silver Sponsor)",
    description:
      "CSharp.com is a global community focused on members' education and growth through tutorials, videos, podcasts, conferences, hackathons, certifications, speaking opportunities, and mentorship programs.",
    features: [
      "Modern, open-source programming language",
      "Global community for developer education",
      "Silver Sponsor",
    ],
  },
];

export default function SponserCarousel() {
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
      <div className="relative w-full max-w-6xl mx-auto z-10">

        {/* Header withOUT animation */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 event-timeline-title font-custom">
            Event Sponsors
          </h1>
          <div className="h-0.5 max-w-xl bg-gradient-to-r from-transparent via-[#0ce3ff] to-transparent mx-auto mb-2"></div>
          <p className="text-[#0ce3ff] text-lg tracking-wider font-sans uppercase">
          The Gods Who Fuel the Battle
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
                        <span className="text-[#00e5ff] text-lg">◆</span>
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
  );
}
