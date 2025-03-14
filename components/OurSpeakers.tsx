"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import SpeakerCard from "./SpeakerCard";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
  };
}

const SpeakersSection: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Function to handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  // Function to handle mouse enter/leave
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const speakers: Speaker[] = [
    {
      id: 1,
      name: "ABC DEF",
      role: "Software Dev",
      company: "ABC",
      image: "/speakers/speaker1.jpg",
      socials: {
        twitter: "https://twitter.com/abcdef",
        linkedin: "https://linkedin.com/in/abcdef",
      },
    },
    {
      id: 2,
      name: "ABC DEF",
      role: "Software Dev",
      company: "ABC",
      image: "/speakers/speaker1.jpg",
      socials: {
        twitter: "https://twitter.com/abcdef",
        linkedin: "https://linkedin.com/in/abcdef",
      },
    },
    {
      id: 3,
      name: "ABC DEF",
      role: "Software Dev",
      company: "ABC",
      image: "/speakers/speaker1.jpg",
      socials: {
        twitter: "https://twitter.com/abcdef",
        linkedin: "https://linkedin.com/in/abcdef",
      },
    },
    {
      id: 4,
      name: "ABC DEF",
      role: "Software Dev",
      company: "ABC",
      image: "/speakers/speaker1.jpg",
      socials: {
        twitter: "https://twitter.com/abcdef",
        linkedin: "https://linkedin.com/in/abcdef",
      },
    },
    // Add more speakers as needed
  ];

  return (
    <div
      className="min-h-screen relative bg-black py-16 px-4 flex flex-col items-center overflow-hidden select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background base add radial gradient if you want*/}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle, #0c1930 0%,#0c1930 50%,#0c1930 100%)",//add more colours if you want
        }}
      ></div>{" "}
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute z-10 inset-0 opacity-0 transition duration-300"
        style={{
          backgroundColor: "#5CE5FA10",
          maskImage: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 70%
            )
          `,
          opacity: isHovering ? 1 : 0,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={2}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [92, 229, 250], // #5CE5FA - Light blue accent
              [34, 205, 250], // #22CDFA - Cyan accent
            ]}
            dotSize={2}
            showGradient={false}
          />
        )}
      </motion.div>
      {/* Content - increased z-index to appear above the spotlight effect */}
      <div className="z-20 relative w-full flex flex-col items-center">
        {/* Header with crossed axes decorations */}
        <div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center relative sm:gap-4">
            <Image
              src="/axes.png"
              alt="Crossed axes"
              width={96}
              height={96}
              className="h-16 w-16 md:w-24 md:h-24"
            />
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-custom flex-col justify-center items-center block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <center className="text-white">
                Our <span className="text-[#5CE5FA]">Speakers</span>
              </center>
              <div className="h-0.5 w-52 md:w-auto md:max-w-xl bg-gradient-to-r from-transparent via-[#0ce3ff] to-transparent mx-auto"></div>
            </motion.h2>
            <Image
              src="/axes.png"
              alt="Crossed axes"
              width={96}
              height={96}
              className="h-16 w-16 md:w-24 md:h-24"
            />
          </div>
          <p className="text-[#0ce3ff] text-md xs:text-lg tracking-wider">
            Meet Speakers for Hackmol 6.0
          </p>
        </div>

        {/* Speakers carousel with responsive controls */}
        <div className="w-full max-w-7xl relative px-4 sm:px-8 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            {/* Left button - hidden on mobile, visible on tablets and desktop */}
            <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <CarouselPrevious
                className="border border-[#5CE5FA] text-[#5CE5FA]
                        hover:bg-[#5CE5FA]/10 hover:shadow-[0_0_10px_3px_rgba(92,229,250,0.4)] 
                        transition-all duration-300 h-10 w-10 hover:text-[#5CE5FA] bg-[#5CE5FA]/10"
              />
            </div>

            <CarouselContent className="">
              {speakers.map((speaker, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 flex items-center justify-center"
                >
                  <SpeakerCard speaker={speaker} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Right button - hidden on mobile, visible on tablets and desktop */}
            <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <CarouselNext
                className="border border-[#5CE5FA] text-[#5CE5FA]
                        hover:bg-[#5CE5FA]/10 hover:shadow-[0_0_10px_3px_rgba(92,229,250,0.4)] 
                        transition-all duration-300 h-10 w-10 hover:text-[#5CE5FA] bg-[#5CE5FA]/10"
              />
            </div>

            {/* Mobile buttons - visible on mobile only */}
            <div className="flex sm:hidden items-center justify-center gap-6 mt-6">
              <CarouselPrevious
                className="static translate-x-0 translate-y-0 
                          bg-transparent border border-[#5CE5FA] text-[#5CE5FA]
                          hover:bg-[#5CE5FA]/10 transition-colors"
              />
              <CarouselNext
                className="static translate-x-0 translate-y-0 
                          bg-transparent border border-[#5CE5FA] text-[#5CE5FA]
                          hover:bg-[#5CE5FA]/10 transition-colors"
              />
            </div>
          </Carousel>

          {/* Custom pagination dots with glow effect - always showing all speakers */}
          <div className="flex justify-center mt-8 space-x-3 flex-wrap max-w-md mx-auto">
            {speakers.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 mb-2
                           ${
                             current === index
                               ? "bg-white shadow-[0_0_15px_5px_rgba(92,229,250,0.7)]"
                               : "bg-[#5CE5FA]/50 hover:shadow-[0_0_10px_2px_rgba(92,229,250,0.4)]"
                           }`}
                aria-label={`Go to speaker ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;
