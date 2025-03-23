"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="pt-20 relative text-white px-6 text-center bg-gradient-to-b from-[#00122E] to-[#001B40]"
    >
      {/* Left Ornament */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-16 md:w-25 lg:w-40 xl:w-50 h-full pointer-events-none opacity-50 lg:opacity-100"
      >
        <img src="/3.png" alt="Left Ornament" className="h-full w-full" />
      </motion.div>

      {/* Right Ornament */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-16 md:w-25 lg:w-40 xl:w-50 h-full pointer-events-none opacity-50 lg:opacity-100"
      >
        <img src="/2.png" alt="Right Ornament" className="h-full w-full" />
      </motion.div>

      <div className="mt-10 flex flex-wrap flex-col lg:flex-row lg:justify-between mx-auto max-w-6xl font-custom text-white">
        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-center lg:text-left"
        >
          <h3 className="text-2xl md:text-4xl text-[#E3DAAF]">THE JOURNEY</h3>
          <ul className="text-lg md:text-xl mt-2 space-y-1">
            {["about", "schedule", "tracks", "speakers", "faq"].map((item) => (
              <li key={item}>
                <Link href={`#${item}`} passHref>
                  - {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-center lg:text-right"
        >
          <h3 className="text-2xl md:text-4xl text-[#E3DAAF]">HOSTS OF THE REALM</h3>
          <div className="flex justify-center lg:justify-end space-x-4 mt-2 text-white items-center">
            <Link href="https://www.instagram.com/dscnitj/" passHref target="_blank">
              <Instagram size={28} className="cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/company/dscnitj/" passHref target="_blank">
              <Linkedin size={28} className="cursor-pointer" />
            </Link>
            <Image src="/icons/GDGC.png" alt="GDGC Logo" width={40} height={34} priority />
          </div>

          <div className="flex justify-center lg:justify-end space-x-4 mt-2 text-white items-center">
            <Link href="https://www.instagram.com/iota_nitj/" passHref target="_blank">
              <Instagram size={28} className="cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/in/iota-nitj/" passHref target="_blank">
              <Linkedin size={28} className="cursor-pointer" />
            </Link>
            <Image
              src="/icons/IOTA.png"
              alt="IOTA Logo"
              width={40}
              height={40}
              style={{ filter: "invert(100%) brightness(100)" }}
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Footer Centerpiece */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mt-6 relative flex flex-col justify-center items-center mb-0"
      >
        <svg
          className="w-full h-40 md:h-48 lg:h-56 xl:h-56 mb-0"
          viewBox="0 0 700 220"
        >
          <path id="curve" d="M50,200 Q350,-40 650,200" fill="transparent" />
          <text
            className="fill-white text-lg md:text-xl lg:text-2xl font-custom tracking-[0.15em]"
          >
            <textPath
              href="#curve"
              startOffset="50%"
              textAnchor="middle"
              className="text-[#E3DAAF]"
            >
              PRESENTED BY HACKMOL | GDGC X IOTA
            </textPath>
          </text>
        </svg>
        <img
          src="/1.png"
          alt="Footer Centerpiece"
          className="mx-auto w-60 md:w-[430px] lg:w-[450px] xl:w-[450px] mt-[-50px] md:mt-[-70px] lg:mt-[-90px]"
        />
      </motion.div>

    </motion.footer>
  );
};

export default Footer;
