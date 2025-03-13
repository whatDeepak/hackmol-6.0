// SpeakersSection.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SpeakerCard from "./SpeakerCard";
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
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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

  // Calculate the number of pages for pagination
  const itemsPerPage =
    window?.innerWidth >= 768 ? 3 : window?.innerWidth >= 640 ? 2 : 1;
  const pageCount = Math.ceil(speakers.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-[#0c1930] py-16 px-4 flex flex-col items-center">
      {/* Header with crossed axes decorations */}
      <div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
        <div className="flex items-center justify-center  relative gap-4">
          <Image
            src="/axes.png"
            alt="Crossed axes"
            width={96}
            height={96}
            className="h-16 w-16 md:w-24 md:h-24"
          />
          <motion.h2
            className="text-4xl md:text-6xl font-custom flex flex-col justify-center items-center md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white">Our</span>{" "}
            <span className="text-[#5CE5FA]">Speakers</span>
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
        <p className="text-[#0ce3ff] text-lg tracking-wider">
          Meet Speakers for Hackmol 6.0
        </p>
      </div>

      {/* Speakers carousel with side buttons for desktop */}
      <div className="w-full max-w-7xl relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}
        >
          {/* Left button - hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <CarouselPrevious
              className=" border border-[#5CE5FA] text-[#5CE5FA]
                      hover:bg-[#5CE5FA]/10 hover:shadow-[0_0_10px_3px_rgba(92,229,250,0.4)] 
                      transition-all duration-300 h-10 w-10 hover:text-[#5CE5FA] bg-[#5CE5FA]/10"
            />
          </div>

          <CarouselContent className="">
            {speakers.map((speaker, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3 flex items-center justify-center "
              >
                <SpeakerCard speaker={speaker} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Right button - hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <CarouselNext
              className="border border-[#5CE5FA] text-[#5CE5FA]
                      hover:bg-[#5CE5FA]/10 hover:shadow-[0_0_10px_3px_rgba(92,229,250,0.4)] 
                      transition-all duration-300 h-10 w-10 hover:text-[#5CE5FA] bg-[#5CE5FA]/10"
            />
          </div>

          {/* Mobile buttons - visible on mobile only */}
          <div className="flex md:hidden items-center justify-center gap-6 mt-6">
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

        {/* Custom pagination dots with glow effect */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index * itemsPerPage)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                         ${
                           Math.floor(current / itemsPerPage) === index
                             ? "bg-white shadow-[0_0_15px_5px_rgba(92,229,250,0.7)]"
                             : "bg-[#5CE5FA]/50 hover:shadow-[0_0_10px_2px_rgba(92,229,250,0.4)]"
                         }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;
