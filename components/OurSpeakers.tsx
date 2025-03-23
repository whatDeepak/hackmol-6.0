"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SpeakerCard from "./SpeakerCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

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
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayInterval = 5000; // 5 seconds
  const autoPlayResumeDelay = 10000; // 10 seconds after interaction

  const speakers: Speaker[] = [
    { id: 1, name: "Umang", role: "Developer and Maintainer", company: "zop.dev", image: "/speakers/sp1.jpeg", socials: { twitter: "https://www.instagram.com/umang_iam/", linkedin: "https://www.linkedin.com/in/umang01-hash/" } },
    { id: 2, name: "Ankita", role: "Software Developer", company: "Pocket FM", image: "/speakers/sp2.jpeg", socials: { twitter: "https://www.instagram.com/ankitach_23/", linkedin: "https://www.linkedin.com/in/ankita-chaudhary-9a55201bb/" } },
    { id: 3, name: "Yajur", role: "Product Manager", company: "Builder.ai", image: "/speakers/sp3.jpeg", socials: { twitter: "https://www.instagram.com/yajurbajaj01/", linkedin: "https://www.linkedin.com/in/yajurbajaj/" } },
    { id: 4, name: "Nishant", role: "Software Engineer", company: "Pocket FM", image: "/speakers/sp4.jpg", socials: { twitter: "https://www.instagram.com/iinishantxchandel/", linkedin: "https://www.linkedin.com/in/inishantxchandel/" } },
  ];

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => setCurrent(api.selectedScrollSnap());
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  // Autoplay effect
  useEffect(() => {
    if (!isAutoPlaying || !api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, api]);

  // Handles user interaction to pause autoplay
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), autoPlayResumeDelay);
  };

  return (
    <div id="speakers" className="min-h-screen relative bg-black py-16 px-4 flex flex-col items-center overflow-hidden select-none">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-800 via-[#0c1930] to-[#0c1930]"></div>

      <div className="z-20 relative w-full flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center relative sm:gap-4">
            <Image src="/axes.png" alt="Crossed axes" width={96} height={96} className="h-16 w-16 md:w-24 md:h-24 -scale-x-100" />
            <h2 className="text-5xl md:text-6xl font-custom flex-col justify-center items-center block text-white">
              <center className="event-timeline-title">Our Speakers</center>
              <div className="h-0.5 w-52 md:w-auto md:max-w-xl bg-gradient-to-r from-transparent via-[#0ce3ff] to-transparent mx-auto"></div>
            </h2>
            <Image src="/axes.png" alt="Crossed axes" width={96} height={96} className="h-16 w-16 md:w-24 md:h-24" />
          </div>
          <p className="text-[#0ce3ff] text-lg tracking-wider font-sans uppercase">Keepers of Knowledge</p>
        </div>

        {/* Speakers carousel */}
        <div className="w-full max-w-7xl relative px-4 sm:px-8 md:px-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full" setApi={setApi}>
            {/* Left button */}
            <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <CarouselPrevious
                onClick={() => {
                  api?.scrollPrev();
                  handleUserInteraction();
                }}
                className="border border-[#5CE5FA] text-[#5CE5FA] hover:bg-[#5CE5FA]/10 transition-all duration-300 h-10 w-10 hover:text-[#5CE5FA] bg-[#5CE5FA]/10"
              />
            </div>

            <CarouselContent>
              {speakers.map((speaker, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 flex items-center justify-center">
                  <SpeakerCard speaker={speaker} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Right button */}
            <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <CarouselNext
                onClick={() => {
                  api?.scrollNext();
                  handleUserInteraction();
                }}
                className="border border-[#5CE5FA] text-[#5CE5FA] hover:bg-[#5CE5FA]/10 transition-all duration-300 h-10 w-10 hover:text-[#5CE5FA] bg-[#5CE5FA]/10"
              />
            </div>

            {/* Mobile buttons */}
            <div className="flex sm:hidden items-center justify-center gap-6 mt-6">
              <CarouselPrevious
                onClick={() => {
                  api?.scrollPrev();
                  handleUserInteraction();
                }}
                className="static translate-x-0 translate-y-0 bg-transparent border border-[#5CE5FA] text-[#5CE5FA] hover:bg-[#5CE5FA]/10 transition-colors"
              />
              <CarouselNext
                onClick={() => {
                  api?.scrollNext();
                  handleUserInteraction();
                }}
                className="static translate-x-0 translate-y-0 bg-transparent border border-[#5CE5FA] text-[#5CE5FA] hover:bg-[#5CE5FA]/10 transition-colors"
              />
            </div>
          </Carousel>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-3 flex-wrap max-w-md mx-auto">
            {speakers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  api?.scrollTo(index);
                  handleUserInteraction();
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 mb-2 ${
                  current === index ? "bg-white shadow-[0_0_15px_5px_rgba(92,229,250,0.7)]" : "bg-[#5CE5FA]/50 hover:shadow-[0_0_10px_2px_rgba(92,229,250,0.4)]"
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
