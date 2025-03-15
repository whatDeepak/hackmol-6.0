import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Trophy,
  Zap,
  Lightbulb,
  Code,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
export default function AboutUs() {
  const images = [
    {
      src: "https://res.cloudinary.com/ddd4ftror/image/upload/v1741551607/hackmol/otfahhaq0c2psi8hipl3.png",
      alt: "HackMol 5.0 - Memories from Another Realm",
      caption: "HackMol 5.0 • Memories from Another Realm",
    },
    {
      src: "https://res.cloudinary.com/ddd4ftror/image/upload/v1741584529/hackmol/jdu0gsockhfokokiud6l.jpg",
      alt: "IOTA Event Image",
      caption: "Another Amazing Event",
    },
    {
      src: "https://res.cloudinary.com/ddd4ftror/image/upload/v1741584529/hackmol/jdu0gsockhfokokiud6l.jpg",
      alt: "Third Event Image",
      caption: "More Exciting Moments",
    },
    {
      src: "https://res.cloudinary.com/ddd4ftror/image/upload/v1741584529/hackmol/jdu0gsockhfokokiud6l.jpg",
      alt: "Fourth Event Image",
      caption: "Final Celebration",
    },
    {
      src: "https://res.cloudinary.com/ddd4ftror/image/upload/v1741584529/hackmol/jdu0gsockhfokokiud6l.jpg",
      alt: "Fifth Event Image",
      caption: "Team Photo",
    },
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Functions to navigate between images
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  const [bgDots, setBgDots] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const dots = [...Array(25)].map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setBgDots(dots);
  }, []);

  return (
    <main
      className={cn(
        "min-h-screen bg-[#0f1524] py-20 text-white overflow-hidden relative "
      )}
      id="about"
    >
      {/* Background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bgDots.slice(0, 20).map((dot, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-1 h-1  rounded-full animate-float",
              i % 4 == 0 ? "bg-[#0ce3ff]" : "bg-white/20"
            )}
            style={{
              top: dot.top,
              left: dot.left,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bgDots.slice(-5).map((dot, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-[#4fd2d942] rounded-full animate-float "
            style={{
              top: dot.top,
              left: dot.left,
            }}
          >
            <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-1 h-1 bg-[#4fd2d9] rounded-full animate-float " />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-12 py-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-5xl md:text-6xl font-bold font-custom w-full">
            <span className="event-timeline-title">About HackMol 6.0 </span>
          </div>
          <div className="h-0.5 max-w-xl bg-gradient-to-r from-transparent via-[#0ce3ff] to-transparent mx-auto mb-2"></div>
          <p className="text-[#0ce3ff] text-lg tracking-wider font-sans uppercase">
            explore the realm of coding
          </p>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start  font-sans">
          {/* Left column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-2">
                <span className="text-xl text-[#0ce3ff]">◇</span>
                <span className="text-[#0ce3ff]">
                  {/* Code Like a God, Leave a Legacy! */}
                  Forge Your Code,</span> Leave Your Mark!
              </h2>
              <p className="text-gray-300 leading-relaxed text-justify">
                The sixth edition of HackMol, organised by IOTA & GDGC NIT
                Jalandhar, is your battleground for innovation. This 30-hour
                hackathon unites warriors of code—both seasoned champions and
                rising contenders—to forge groundbreaking solutions across
                digital realms.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[#0ce3ff]/30 rounded-lg p-6 relative bg-[#131b2e] group hover:bg-[#172038] transition-colors">
                <div className="absolute right-4 top-4 text-[#0ce3ff]">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-[#0ce3ff] text-4xl font-bold">200+</h3>
                <p className="text-gray-400 mt-1">Projects Submitted</p>
              </div>

              <div className="border border-[#0ce3ff]/30 rounded-lg p-6 relative bg-[#131b2e] group hover:bg-[#172038] transition-colors">
                <div className="absolute right-4 top-4 text-[#0ce3ff]">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-[#0ce3ff] text-4xl font-bold">150+</h3>
                <p className="text-gray-400 mt-1">Participating Teams</p>
              </div>

              <div className="border border-[#0ce3ff]/30 rounded-lg p-6 relative bg-[#131b2e] group hover:bg-[#172038] transition-colors">
                <div className="absolute right-4 top-4 text-[#0ce3ff]">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-[#0ce3ff] text-4xl font-bold">₹5L+</h3>
                <p className="text-gray-400 mt-1">Prize Pool</p>
              </div>

              <div className="border border-[#0ce3ff]/30 rounded-lg p-6 relative bg-[#131b2e] group hover:bg-[#172038] transition-colors">
                <div className="absolute right-4 top-4 text-[#0ce3ff]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-[#0ce3ff] text-4xl font-bold">25+</h3>
                <p className="text-gray-400 mt-1">Mentors & Judges</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
                <span className="text-[#0ce3ff]  text-xl  inline-block">
                  ◇
                </span>
                <span className="text-[#0ce3ff] ">Legends </span> Carved in Code{" "}
              </h2>
            </div>

            {/* Image carousel - updated to match design */}
            <div className="relative border overflow-hidden border-transparent transition-colors p-3">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#0ce3ff]"></div>
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#0ce3ff]"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#0ce3ff]"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#0ce3ff]"></div>
              <div className="relative aspect-video">
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full rounded-lg"
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-[#0ce3ff]">
                    {images[currentIndex].caption}
                  </p>
                </div>
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-[#0ce3ff] hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-[#0ce3ff] hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-4 right-4 flex gap-1">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`w-2 h-2 rounded-full cursor-pointer ${
                        i === currentIndex ? "bg-[#0ce3ff]" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="flex items-start gap-4 p-4">
            <div className="relative w-12 h-12 rounded-lg border border-[#0ce3ff78] bg-[#0ce3ff12] flex items-center justify-center text-[#0ce3ff] shrink-0">
              <Clock className="w-6 h-6" />
              <div className="absolute top-[1px] right-[1px] transform translate-x-[50%] -translate-y-[50%] w-1.5 h-1.5 bg-[#4fd2d9] rounded-full animate-float" />
              <div className="absolute bottom-[1px] left-[1px] transform -translate-x-[50%] translate-y-[50%] w-1.5 h-1.5 bg-[#4fd2d9] rounded-full animate-float" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1 font-custom">30 Hours</h3>
              <p className="text-gray-400 font-sans">Non-stop coding journey</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4">
            <div className="relative w-12 h-12 rounded-lg border border-[#0ce3ff78] bg-[#0ce3ff12] flex items-center justify-center text-[#0ce3ff] shrink-0">
              <Trophy className="w-6 h-6" />
              <div className="absolute top-[1px] right-[1px] transform translate-x-[50%] -translate-y-[50%] w-1.5 h-1.5 bg-[#4fd2d9] rounded-full animate-float" />
              <div className="absolute bottom-[1px] left-[1px] transform -translate-x-[50%] translate-y-[50%] w-1.5 h-1.5 bg-[#4fd2d9] rounded-full animate-float" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1 font-custom">Amazing Prizes</h3>
              <p className="text-gray-400 font-sans">Legendary rewards await</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4">
            <div className="relative w-12 h-12 rounded-lg border border-[#0ce3ff78] bg-[#0ce3ff12] flex items-center justify-center text-[#0ce3ff] shrink-0">
              <Zap className="w-6 h-6" />
              <div className="absolute top-[1px] right-[1px] transform translate-x-[50%] -translate-y-[50%] w-1.5 h-1.5 bg-[#4fd2d9] rounded-full animate-float" />
              <div className="absolute bottom-[1px] left-[1px] transform -translate-x-[50%] translate-y-[50%] w-1.5 h-1.5 bg-[#4fd2d9] rounded-full animate-float" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1 font-custom">Workshops</h3>
              <p className="text-gray-400 font-sans">Master new technologies</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4">
            <div className="relative w-12 h-12 rounded-lg border border-[#0ce3ff78] bg-[#0ce3ff12] flex items-center justify-center text-[#0ce3ff] shrink-0">
              <Lightbulb className="w-6 h-6" />
              <div className="absolute top-[1px] right-[1px] transform translate-x-[50%] -translate-y-[50%] w-1.5 h-1.5 bg-[#4fd2d9] rounded-full animate-float" />
              <div className="absolute bottom-[1px] left-[1px] transform -translate-x-[50%] translate-y-[50%] w-1.5 h-1.5 bg-[#4fd2d9] rounded-full animate-float" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1 font-custom">Mentorship</h3>
              <p className="text-gray-400 font-sans">Guidance from tech wizards</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
