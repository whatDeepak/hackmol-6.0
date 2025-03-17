import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="pt-20 relative text-white p-8 text-center bg-gradient-to-b from-[#00122E] to-[#001B40]">
      {/* Left Ornament */}
      <div className="absolute top-0 left-0 w-25 h-full pointer-events-none opacity-0 md:opacity-50 lg:opacity-100">
        <img src="/3.png" alt="Left Ornament" className="h-full w-full" />
      </div>
      {/* Right Ornament */}
      <div className="absolute top-0 right-0 w-50 h-full pointer-events-none opacity-0 md:opacity-50 lg:opacity-100">
        <img src="/2.png" alt="Right Ornament" className="h-full w-full" />
      </div>

      <div className="mt-10 flex flex-wrap lg:justify-between flex-col lg:flex-row mx-32 font-custom text-white">
        {/* Quick Links Section */}
        <div className="mt-6 text-left">
          <h3 className="text-4xl text-[#E3DAAF]">THE JOURNEY</h3>
          <ul className="text-xl mt-2 space-y-1">
            <li>
              <Link href={"/"} passHref>
                - register
              </Link>
            </li>
            <li>
              <Link href={"#about"} passHref>
                - about
              </Link>
            </li>
            <li>
              <Link href={"#schedule"} passHref>
                - timeline
              </Link>
            </li>
            <li>
              <Link href={"#tracks"} passHref>
                - tracks
              </Link>
            </li>
            <li>
              <Link href={"#speakers"} passHref>
                - speakers
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="mt-6 lg:text-right text-left">
          <h3 className="text-4xl text-[#E3DAAF]">HOSTS OF THE REALM</h3>
          <div className="flex space-x-4 lg:justify-end mt-2 text-white items-center">
            <Link href="https://www.instagram.com/iota_nitj/" passHref target="_blank">
              <Instagram size={32} className="cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/in/iota-nitj/" passHref target="_blank">
              <Linkedin size={32} className="cursor-pointer" />
            </Link>
            <Image
              src="/icons/IOTA.png"
              alt="IOTA Logo"
              width={50}
              height={50}
              style={{ filter: "invert(100%) brightness(100)" }}
              priority
            />
          </div>
          <div className="flex space-x-4 lg:justify-end mt-2 text-white items-center">
            <Link href="https://www.instagram.com/dscnitj/" passHref target="_blank">
              <Instagram size={32} className="cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/company/dscnitj/" passHref target="_blank">
              <Linkedin size={32} className="cursor-pointer" />
            </Link>
            <Image
              src="/icons/GDGC.png"
              alt="GDGC Logo"
              width={50}
              height={44}
              priority
              style={{ padding: "0px 3px" }}
            />
          </div>
        </div>
      </div>

      {/* Footer Centerpiece */}
      <div className="mt-6 relative flex flex-col justify-center items-center mb-0">
        <svg className="w-full h-56 mb-0" viewBox="0 0 700 220">
          <path id="curve" d="M50,200 Q350,-40 650,200" fill="transparent" />
          <text className="fill-white text-2xl font-custom tracking-[0.15em]">
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
          className="mx-auto w-100 mt-[-90px]"
        />
      </div>
    </footer>
  );
};

export default Footer;
