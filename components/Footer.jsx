import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-20 relative bg-gradient-to-b from-[#00122E] to-[#001B40] text-white p-8 text-center">
      {/* Left Ornament */}
      <div className="absolute top-0 left-0 w-25 h-full">
        <img src="/3.png" alt="Left Ornament" className="h-full w-full" />
      </div>
      {/* Right Ornament */}
      <div className="absolute top-0 right-0 w-50 h-full">
        <img src="/2.png" alt="Right Ornament" className="h-full w-full" />
      </div>

      <div className="mt-10 flex flex-wrap justify-between max-w-5xl mx-auto font-custom text-white">
        {/* Quick Links Section */}
        <div className="mt-6 text-left">
          <h3 className="text-4xl text-[#E3DAAF]">QUICK LINKS</h3>
          <ul className="text-xl mt-2 space-y-1">
            <li>- The Team</li>
            <li>- Upcoming Events</li>
            <li>- Past Events</li>
            <li>- Join Us</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="mt-6 text-right">
          <h3 className="text-4xl text-[#E3DAAF]">GET THE LATEST TEA</h3>
          <div className="flex space-x-4 justify-end mt-2 text-white">
            <Instagram size={32} className="cursor-pointer" />
            <Twitter size={32} className="cursor-pointer" />
            <Facebook size={32} className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Centerpiece */}
      <div className="mt-6 relative flex flex-col justify-center items-center mb-0">
        <svg className="w-full h-56 mb-0" viewBox="0 0 700 220">
          <path id="curve" d="M50,200 Q350,-40 650,200" fill="transparent" />
          <text className="fill-white text-2xl font-custom tracking-[0.3em]">
            <textPath href="#curve" startOffset="50%" textAnchor="middle" className="text-[#E3DAAF]">
              PRESENTED BY HACKMOL || GDSC X IOTA 
            </textPath>
          </text>
        </svg>
        <img src="/1.png" alt="Footer Centerpiece" className="mx-auto w-100 mt-[-90px]" />
      </div>
    </footer>
  );
};

export default Footer;
