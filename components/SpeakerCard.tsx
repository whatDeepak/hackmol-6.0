"use client";
import React, { useState, useEffect } from "react";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

// Speaker interface
interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  socials: {
    instagram?: string;
    linkedin?: string;
  };
}

interface SpeakerCardProps {
  speaker: Speaker;
  className?: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, className }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const [dynamicText, setDynamicText] = useState("");

  // Generate text based on the hackathon name with some noise
  useEffect(() => {
    let text = generateHackathonText(1500);
    setDynamicText(text);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    // Change text on mouse move
    const text = generateHackathonText(1500);
    setDynamicText(text);
  }

  return (
    <motion.div
      className={cn(
        "md:w-5/6 w-3/4 sm:w-full aspect-[3/4] relative rounded-2xl overflow-hidden group border-[#5CE5FA] border-2",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={onMouseMove}
    >
      {/* Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Hover effect - moved outside to cover the entire card including details */}
      <CardPattern mouseX={mouseX} mouseY={mouseY} text={dynamicText} />

      {/* Card details overlay at the bottom - responsive for different screen sizes */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#000]/50 p-2 sm:p-3 md:p-4 text-[#5CE5FA] flex items-center justify-between border-t-2 border-[#5CE5FA] font-custom overflow-hidden hover:bg-cyan-950/50 transition duration-500">
        <div className="absolute left-20 right-20 h-1/2 top-0 bg-slate-950 blur-2xl"></div>
        {speaker.socials.instagram && (
          <Link
            href={speaker.socials.instagram}
            passHref
            className="text-[#5CE5FA] hover:text-white transition-colors z-30 relative"
          >
            <Instagram size={16} className="sm:w-5 sm:h-5 md:w-5 md:h-5" />
          </Link>
        )}
        <div className="z-30 relative px-1">
          <h3 className="text-center text-lg sm:text-xl md:text-2xl font-custom truncate">
            {speaker.name}
          </h3>
          <p className="text-center text-xs sm:text-sm text-white truncate">
            {speaker.role}
          </p>
          <p className="text-center text-xs sm:text-sm text-white truncate">
            @ {speaker.company}
          </p>
          
        </div>
        {speaker.socials.linkedin && (
          <Link
            href={speaker.socials.linkedin}
            passHref
            className="text-[#5CE5FA] hover:text-white transition-colors z-30 relative"
          >
            <Linkedin size={16} className="sm:w-5 sm:h-5 md:w-5 md:h-5" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

// Card pattern component for the hover effect
function CardPattern({
  mouseX,
  mouseY,
  text,
}: {
  mouseX: any;
  mouseY: any;
  text: string;
}) {
  let maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5CE5FA] to-green-500 opacity-0 group-hover:opacity-50 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {text}
        </p>
      </motion.div>
    </div>
  );
}

// Generates text with "IOTAxGDGCxHackMol6.0" and some noise
const generateHackathonText = (length: number) => {
  const hackathonText = "IOTAxGDGCxHackMol6.0";
  let result = "";

  while (result.length < length) {
    // Add the hackathon text
    result += hackathonText;

    // Add some noise/variation every few characters
    if (Math.random() > 0.7) {
      result += "sIuOmTiAt";
    }
  }

  return result.substring(0, length);
};

export default SpeakerCard;
