"use client";

import { useEffect, useState, useRef, use } from "react";
import Image from "next/image";
import { Meteors } from "@/components/magicui/meteors";
import AboutUs from "@/components/About";
import OurSpeakers from "@/components/OurSpeakers";
import FAQSection from "@/components/Faq";
import MainTracks from "@/components/MainTrack";
import SponserTrackCarousel from "@/components/SponserTrack";
import Footer from "@/components/Footer";
import PrizesSection from "@/components/Prize_Section/PrizesSection";
import EventTimeline from "@/components/eventTimeline/EventTimeLine";
import Navbar from "@/components/Navbar";
import DevfolioButton from "@/components/DevfolioButton";


export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Add stars state
  const [stars, setStars] = useState<
    { x: number; y: number; size: number; opacity: number; speed: number }[]
  >([]);
  // const [aboutUsSmallStars, setAboutUsStars] = useState<
  //   { top: string; left: string }[]
  // >([]);
  // const [aboutUsBigStars, setAboutUsBigStars] = useState<
  //   { top: string; left: string }[]
  // >([]);

  // Add countdown timer state and logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Event start date: April 10th, 2025 at 8 AM
  const eventDate = new Date("April 10, 2025 08:00:00").getTime()

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [eventDate])

  useEffect(() => {
    setIsMounted(true);
    // Generate random stars
    const adjustedSize = window.innerWidth < 768 ? 0.5 : 1.5;
    const generatedStars = Array.from({ length: 220 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + adjustedSize,
      opacity: Math.random() * 0.5 + 0.3,
      speed: Math.random() * 0.05 + 0.01,
    }));
    setStars(generatedStars);
    // const stars = [...Array(20)].map((_, i) => ({
    //   top: `${Math.random() * 100}%`,
    //   left: `${Math.random() * 100}%`,
    // }));
    // if (aboutUsSmallStars.length == 0) setAboutUsStars(stars);
    // const bigstars = [...Array(5)].map((_, i) => ({
    //   top: `${Math.random() * 100}%`,
    //   left: `${Math.random() * 100}%`,
    // }));
    // if (aboutUsBigStars.length == 0) setAboutUsBigStars(bigstars);
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        setScrollY(scrollPosition);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax positions based on scroll
  const sunPosition = isMounted ? -20 + scrollY * -0.1 : -20;
  const backMountainPosition = isMounted ? 0 + scrollY * 0.09 : 0;
  const axePosition = isMounted ? 0 + scrollY * 0.22 : 0;
  const frontMountainPosition = isMounted ? 0 + scrollY * 0.25 : 0;
  const crowPosition = isMounted ? scrollY * 0.3 : 0;

  const titleOpacity = isMounted ? 1 - scrollY * 0.002 : 1;
  const titlePosition = isMounted ? 0 + scrollY * 0.4 : 0;

  return (
    <>
      <Navbar />
      <main className="relative h-[100vh] overflow-x-hidden bg-gradient-to-b from-[#1e5b6e] to-[#0a2a35]">
        <div
          ref={parallaxRef}
          className="sticky top-0 h-screen w-full overflow-hidden"
        >
          {/* Sky background */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#3a7d93] to-[#1e5b6e] z-0"
            style={{
              background:
                "linear-gradient(180deg, #000 1%, #152126 21%, #385867 55%, #2A424D 100%)",
            }}
          ></div>
          <Meteors number={8} className="z-0 pointer-events-none " />
          {/* Stars */}
          {stars.map((star, index) => (

            <div
              key={index}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                transform: `translateY(${scrollY * star.speed}px)`,
                animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2
                  }s`,
                zIndex: 5,
              }}
            />
          ))}

          {/* Sun with glow effect and rotation */}
          <div
            className="absolute left-1/2 top-[10%] sm:top-20 md:top-22 lg:top-10 z-10 aspect-square w-44 sm:w-60 md:w-72 bg-[#FAFCE3] rounded-full"
            style={{
              transform: `translate(-50%, calc(50% + ${sunPosition}px))`,
              filter: "drop-shadow(0 0 40px rgba(255, 255, 200, 0.5))",
              transition: "transform 0.1s ease-out",
            }}
          ></div>

          {/* Back mountains with subtle hover */}
          <div
            className="absolute bottom-0 left-0 right-0 z-20"
            style={{
              transform: `translateY(${backMountainPosition}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/backlayer-I6BQRQHXbTQQLhT6rQaKs9YbszCin9.png"
              alt="Background mountains"
              width={1920}
              height={300}
              className="w-full h-auto"
            />
          </div>

          {/* Axe with circuit patterns and silhouette */}
          <div
            className="absolute left-0 -top-16 sm:-top-12 md:top-0 transform z-20 w-full h-full"
            style={{
              transform: `translate(0%, calc(${axePosition}px))`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <Image
              src="https://res.cloudinary.com/doipplfld/image/upload/v1741532525/hackmol6/rzd8osl7lrua2drixhqb.png"
              alt="Axe with circuit patterns and silhouette"
              fill
              style={{
                objectFit: "contain",
                transform: `scale(2) translateY(-8%)`,
              }}
            />
          </div>

          {/* Front mountains with hover effect */}
          <div
            className="absolute bottom-0 left-0 right-0 z-30"
            style={{
              transform: `translateY(${frontMountainPosition}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frontlayer-N2eWkzfFSsYQNmxD741kXbp5E87Osx.png"
              alt="Foreground mountains"
              width={1920}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Flying crows with wing flap animation */}
          <div
            className="absolute top-[8%] left-[2%] md:top-[15%] md:left-[5%] lg:left-[10%] lg:top-[20%] z-50 w-32 md:w-48"
            style={{
              transform: `translate(${crowPosition}px, ${-crowPosition * 0.5
                }px)`,
              animation: "fly 15s linear infinite",
              transition: "transform 0.1s ease-out",
              filter: "invert(1)",
            }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crows-VT717SQl0gNqdv6BZbPZ6UtLnDdGhc.png"
              alt="Flying crows"
              width={100}
              height={50}
              className="w-full h-auto animate-wingFlap"
            />
          </div>

          {/* Title and button */}
          <div
            className="absolute font-custom left-1/2 bottom-20 md:bottom-10 lg:bottom-4 z-50 text-center w-full px-4 flex flex-col items-center gap-2"
            style={{
              transform: `translate(-50%, ${titlePosition}px)`,
              opacity: titleOpacity,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <h1 className="text-4xl sm:text-7xl font-bold text-base-dark tracking-wider">
              HackMol <span className="text-[#4fd1d9]">6.0</span>
            </h1>
            <p className="text-md sm:text-2xl text-[#a8d5e3] tracking-widest mb-4">
              hack the realms
            </p>

            {/* Countdown Timer */}
            <div className="flex flex-col items-center gap-2 mb-4">
              <div className="flex gap-3 sm:gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="bg-[#0a2a35] bg-opacity-70 border border-[#4fd1d9] rounded-lg w-14 sm:w-20 h-14 sm:h-20 flex items-center justify-center">
                    <span className="text-xl sm:text-3xl font-bold text-[#4fd1d9]">{timeLeft.days}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-[#a8d5e3] mt-1">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#0a2a35] bg-opacity-70 border border-[#4fd1d9] rounded-lg w-14 sm:w-20 h-14 sm:h-20 flex items-center justify-center">
                    <span className="text-xl sm:text-3xl font-bold text-[#4fd1d9]">{timeLeft.hours}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-[#a8d5e3] mt-1">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#0a2a35] bg-opacity-70 border border-[#4fd1d9] rounded-lg w-14 sm:w-20 h-14 sm:h-20 flex items-center justify-center">
                    <span className="text-xl sm:text-3xl font-bold text-[#4fd1d9]">{timeLeft.minutes}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-[#a8d5e3] mt-1">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#0a2a35] bg-opacity-70 border border-[#4fd1d9] rounded-lg w-14 sm:w-20 h-14 sm:h-20 flex items-center justify-center">
                    <span className="text-xl sm:text-3xl font-bold text-[#4fd1d9]">{timeLeft.seconds}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-[#a8d5e3] mt-1">Seconds</span>
                </div>
              </div>
            </div>


            {/* Enhanced scroll indicator */}
            {/* <div className="fixed bottom-4 right-4 animate-bounce">
              <div className="w-8 h-12 rounded-full border-2 border-[#4fd1d9] flex justify-center relative overflow-hidden">
                <div className="w-1 h-3 bg-[#4fd1d9] rounded-full mt-2 animate-scrollPulse"></div>
                <div className="absolute inset-0 bg-[#4fd1d9] opacity-10 animate-glow"></div>
              </div>
            </div> */}

          </div>
        </div>

        {/* Add CSS animations */}
        <style jsx global>{`
          @keyframes float {
            0%,
            100% {
              transform: translate(-50%, calc(-50% + ${axePosition}px));
            }
            50% {
              transform: translate(-50%, calc(-50% + ${axePosition - 10}px));
            }
          }

          @keyframes twinkle {
            0%,
            100% {
              opacity: 0.1;
            }
            50% {
              opacity: 0.8;
            }
          }

          @keyframes cometMove {
            0% {
              transform: translateX(0) translateY(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              transform: translateX(200px) translateY(100px);
              opacity: 0;
            }
          }

          // .comet-tail {
          //   background: linear-gradient(
          //     90deg,
          //     rgba(255, 255, 255, 0.8) 0%,
          //     rgba(255, 255, 255, 0) 100%
          //   );
          //   border-radius: 100px;
          // }

          @keyframes wingFlap {
            0%,
            100% {
              transform: scaleY(1);
            }
            50% {
              transform: scaleY(0.9);
            }
          }

          @keyframes textGlow {
            0%,
            100% {
              text-shadow: 0 0 5px rgba(79, 209, 217, 0.3);
            }
            50% {
              text-shadow: 0 0 20px rgba(79, 209, 217, 0.6);
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scrollPulse {
            0%,
            100% {
              opacity: 0.5;
              height: 3px;
            }
            50% {
              opacity: 1;
              height: 6px;
            }
          }

          @keyframes glow {
            0%,
            100% {
              opacity: 0.1;
            }
            50% {
              opacity: 0.3;
            }
          }

          @keyframes fly {
            0% {
              transform: translate(${crowPosition}px, ${-crowPosition * 0.5}px);
            }
            50% {
              transform: translate(
                ${crowPosition + 20}px,
                ${-crowPosition * 0.5 - 15}px
              );
            }
            100% {
              transform: translate(${crowPosition}px, ${-crowPosition * 0.5}px);
            }
          }

          @keyframes glitch {
            0%,
            100% {
              opacity: 0;
            }
            10%,
            15% {
              opacity: 0.1;
              transform: translate(-3px, 0);
            }
            20%,
            25% {
              opacity: 0.1;
              transform: translate(3px, 0);
            }
            30%,
            35% {
              opacity: 0.1;
              transform: translate(-3px, 0);
            }
            40%,
            45% {
              opacity: 0.1;
              transform: translate(3px, 0);
            }
            46% {
              opacity: 0;
            }
          }

          .animate-wingFlap {
            animation: wingFlap 1s ease-in-out infinite;
          }

          .animate-textGlow {
            animation: textGlow 3s ease-in-out infinite;
          }

          .animate-fadeIn {
            animation: fadeIn 1.5s ease-out forwards;
          }

          .animate-scrollPulse {
            animation: scrollPulse 2s ease-in-out infinite;
          }

          .animate-glitch {
            animation: glitch 2s ease-in-out;
          }
        `}</style>
      </main>
      <AboutUs />
      <EventTimeline events={[]} />
      <MainTracks />
      <SponserTrackCarousel />
      {/* <PrizesSection/> */}
      <OurSpeakers />
      <FAQSection />
      <Footer />
    </>
  );
}
