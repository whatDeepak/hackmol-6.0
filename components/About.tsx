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
export default function AboutUs() {
  return (
    <main
      className={cn(
        "min-h-screen bg-[#0f1524] text-white overflow-hidden relative "
      )}
    >
      {/* Background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 font-custom">
            <span className={`text-[#0ce3ff] `}>About</span> HackMol 6.0
          </h1>
          <p className="text-[#0ce3ff] text-lg tracking-wider">
            EXPLORE THE DIGITAL UNIVERSE
          </p>
        </header>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-[#0ce3ff]">Code Like a God</span>, Leave a
                Legacy! <span className="text-[#0ce3ff] inline-block ">◇</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The sixth edition of HackMol, organised by IOTA & GDGC NIT Jalandhar,
                is your battleground for innovation. This 30-hour hackathon
                unites warriors of code—both seasoned champions and rising
                contenders—to forge groundbreaking solutions across digital
                realms.
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
                <span className="text-[#0ce3ff]  text-2xl  inline-block">
                  ◇
                </span>
                <span className="text-[#0ce3ff] ">Years of</span> Legacy{" "}
              </h2>
            </div>

            {/* Image carousel - updated to match design */}
            <div className="relative border border-[#0ce3ff]/30 rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/ddd4ftror/image/upload/v1741551607/hackmol/otfahhaq0c2psi8hipl3.png"
                  alt="HackMol 5.0 - Memories from Another Realm"
                  width={800}
                  height={450}
                  className="object-cover w-full h-full"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-[#0ce3ff]">
                    HackMol 5.0 • Memories from Another Realm
                  </p>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="flex items-start gap-4 p-4">
            <div className="w-12 h-12 rounded-full border border-[#0ce3ff] flex items-center justify-center text-[#0ce3ff] shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">30 Hours</h3>
              <p className="text-gray-400">Non-stop coding journey</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4">
            <div className="w-12 h-12 rounded-full border border-[#0ce3ff] flex items-center justify-center text-[#0ce3ff] shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Amazing Prizes</h3>
              <p className="text-gray-400">Legendary rewards await</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4">
            <div className="w-12 h-12 rounded-full border border-[#0ce3ff] flex items-center justify-center text-[#0ce3ff] shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Workshops</h3>
              <p className="text-gray-400">Master new technologies</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4">
            <div className="w-12 h-12 rounded-full border border-[#0ce3ff] flex items-center justify-center text-[#0ce3ff] shrink-0">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Mentorship</h3>
              <p className="text-gray-400">Guidance from tech wizards</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
