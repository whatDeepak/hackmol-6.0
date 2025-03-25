import { motion } from "motion/react";
import Li from "./Li";
import Maintrackback from "./maintrackback";
import Maintrackback2 from "./maintrackback2";
import Bird from "./svg/Bird";
import Cat1 from "./svg/Cat1";
import Cat2 from "./svg/Cat2";
import Dog1 from "./svg/Dog1";
import Dog2 from "./svg/Dog2";
import Fresherheader from "./svg/Fresherheader";
import Star from "./svg/Star";
import Toy from "./svg/Toy";
import WomenHeader from "./svg/WomenHeader";

export default function MainTracks() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 relative" id="tracks">

      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-1 font-custom ">
            <span className="event-timeline-title">Main Tracks</span>
            <div className="h-0.5 max-w-lg bg-gradient-to-r from-transparent via-[#0ce3ff] to-transparent mx-auto mb-2"></div>
          </h1>
          <p className="text-[#0ce3ff] text-lg tracking-wider font-sans uppercase">
            Trials of the Worthy
          </p>
        </header>

        {/* Main Track - Yellow */}
        <div className="max-w-xl mx-auto md:mb-8 relative font-bold">
          <div className="bg-[#F5E8BD] rounded-md overflow-hidden shadow-glow-yellow">
            <div
              className="relative py-2 px-4 text-black font-bold text-center text-xl border-b-2 border-black"
              style={{
                background:
                  "linear-gradient(to right, #FFDA69 0%, #F1BE22 0%, #FADB7E 23%, #E9CD79 51%, #FBE08D 77%, #F4CD57 98%)",
              }}
            >
              <div className="relative z-20 h-[48px] flex items-center justify-center font-custom">
                MAIN TRACK
              </div>
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
                <SvgMainTrackBackground />
              </div>
            </div>
            <div className="relative p-6 text-black bg-transparent z-50 grid md:grid-cols-2 font-custom">
              <div>
                <div className="mb-4">
                  <div className="font-bold text-lg">Winner</div>
                  <div className="flex items-center gap-2 font-sans font-normal">
                    <Li />
                    50,000
                  </div>
                </div>
                <div className="mb-4">
                  <div className="font-bold text-lg">1st Runner Up</div>
                  <div className="flex items-center gap-2 font-sans font-normal">
                    <Li />
                    30,000
                  </div>
                </div>
                <div className="mb-4">
                  <div className="font-bold text-lg">2nd Runner Up</div>
                  <div className="flex items-center gap-2 font-sans font-normal">
                    <Li />
                    20,000
                  </div>
                </div>
                <div className="absolute top-0 left-0 -z-10">
                  <Maintrackback2 />
                </div>
              </div>
              <div>
                <div className="font-bold text-lg mb-2">
                  Odin's Blessings
                </div>

                <ul className="list-none font-sans font-normal">
                  {[
                    "GDG Goodies ",
                    "Exclusive Stickers ",
                    "Souvenirs ",
                    "Sponsor swags ",
                    "Hackathon T-shirts",
                    "Gofr Goodies ",
                    "zop.dev credits",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start mb-1"
                    >
                      <span className="mr-2">•</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute top-0 right-0 -z-10">
                  <Maintrackback />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative pl-10 md:pl-20 z-50">
          <motion.div
            animate={{
              y: [0, 3, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ scale: 0.9 }} // Reducing size
          >
              <Toy />
          </motion.div>
        </div>
        {/* Lower tracks container with blue shape in middle */}

        <div className="relative max-w-6xl mx-auto">
          {/* Blue shape in middle */}
          <Bird />

          <div className="flex flex-col md:flex-row gap-4 justify-between relative z-10 font-bold">
            {/* Fresher's Track - Gray */}
            <div className="w-full md:w-[45%] bg-[#C3C3C3] rounded-md overflow-hidden shadow-glow-silver">
              <div
                className="relative py-2 px-4 text-black font-bold text-xl"
                style={{
                  background:
                    "linear-gradient(to right, #9CA3AA 0%, #D9DADB 28%, #9CA3AA 52%, #D9DADB 84%, #9CA3AA 100%)",
                }}
              >
                <div className="relative z-10 h-[48px] flex justify-center items-center font-custom">
                  FRESHER'S TRACK
                </div>
                <div className="absolute top-[50%] left-0 transform -translate-y-1/2 overflow-hidden">
                  <Fresherheader />
                </div>
              </div>
              <div className="relative p-6 text-black grid md:grid-cols-2 gap-4 border-2 border-t-black">
                <div>
                  <div className="mb-4 relative z-10">
                    <div className="font-bold text-lg font-custom">Winner</div>
                    <div className="flex items-center gap-2 font-sans font-normal">
                      <Li /> 5000
                    </div>
                  </div>
                  <div className="absolute top-[50%] left-0 transform -translate-y-[50%] -translate-x-4 overflow-hidden">
                    <Dog2 />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg mb-2 relative z-10 font-custom">
                    Odin's Blessings
                  </div>
                  <ul className="list-none relative z-10 font-sans font-normal">
                    {[
                      "GDG Goodies ",
                      "Exclusive Stickers ",
                      "Souvenirs ",
                      "Sponsor swags ",
                      "Hackathon T-shirts",
                      "Gofr Goodies ",
                      "zop.dev credits",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start mb-1"
                      >
                        <span className="mr-2">•</span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute top-[50%] right-0 transform -translate-y-[50%] translate-x-1 overflow-hidden">
                    <Dog1 />
                  </div>
                </div>
              </div>
            </div>

            {/* Women's Track - Purple */}
            <div className="relative w-full md:w-[45%] bg-[#A554BE] rounded-md overflow-hidden shadow-glow-purple">
              <div
                className="relative py-2 px-4 text-black font-bold text-center text-xl"
                style={{
                  background:
                    "linear-gradient(to right, #9015A5 0%, #BD49D0 14%, #AB45BE 36%, #9015A5 51%, #AB45BE 64%, #BD49D0 84%,#9015A5 100%)",
                }}
              >
                <div className="relative z-10 h-[48px] flex items-center justify-center font-custom">
                  WOMEN'S TRACK
                </div>
                <div className="absolute top-[50%] left-0 transform -translate-y-1/2 overflow-hidden">
                  <WomenHeader />
                </div>
              </div>
              <div className="relative p-6 text-black grid md:grid-cols-2 gap-4 z-10 border-t-2 border-black">
                <div>
                  <div className="mb-4 relative z-10">
                    <div className="font-bold text-lg font-custom">Winner</div>
                    <div className="flex items-center gap-2 font-sans font-normal">
                      <Li /> 5000
                    </div>
                  </div>
                  <div className="absolute top-[50%] left-0 transform -translate-y-[50%]">
                    <Cat1 />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg mb-2 relative z-10 font-custom">
                    Freya's Remnants
                  </div>
                  <ul className="list-item relative z-10 font-sans font-normal">
                    {[
                      "GDG Goodies ",
                      "Exclusive Stickers ",
                      "Souvenirs ",
                      "Sponsor swags ",
                      "Hackathon T-shirts",
                      "Gofr Goodies ",
                      "zop.dev credits",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start mb-1"
                      >
                        <span className="mr-2">•</span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute top-[50%] right-0 transform -translate-y-[50%]">
                    <Cat2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Star at bottom */}
        <div className="flex justify-center mt-16">
          <div className="text-[#a0c4ff] text-5xl">
            <Star />
          </div>
        </div>
      </div>

      {/* CSS for glow effects and list animations only */}
      <style jsx global>{`
        @keyframes slideInRight {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-bounce-subtle {
          animation: bounce 3s ease-in-out infinite;
        }
        .prize-item:hover {
          transform: translateY(-5px) scale(1.05);
          filter: brightness(1.1);
        }
        @keyframes glow {
          0% {
            text-shadow: 0 0 5px rgba(0, 204, 255, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(0, 204, 255, 0.8),
              0 0 30px rgba(0, 204, 255, 0.5);
          }
          100% {
            text-shadow: 0 0 5px rgba(0, 204, 255, 0.5);
          }
        }

        /* Apply glow text effect */
        .glow-text {
          animation: glow 3s infinite;
        }

        /* List item animation */
        .animate-list-item {
          opacity: 0;
          animation: slideInRight 0.5s forwards;
        }

        /* Card glow effects */
        .shadow-glow-yellow {
          box-shadow: 0 0 15px rgba(255, 217, 105, 0.5);
          transition: box-shadow 0.3s ease;
        }

        .shadow-glow-yellow:hover {
          box-shadow: 0 0 25px rgba(255, 217, 105, 0.8);
        }

        .shadow-glow-silver {
          box-shadow: 0 0 15px rgba(217, 218, 219, 0.5);
          transition: box-shadow 0.3s ease;
        }

        .shadow-glow-silver:hover {
          box-shadow: 0 0 25px rgba(217, 218, 219, 0.8);
        }

        .shadow-glow-purple {
          box-shadow: 0 0 15px rgba(189, 73, 208, 0.5);
          transition: box-shadow 0.3s ease;
        }

        .shadow-glow-purple:hover {
          box-shadow: 0 0 25px rgba(189, 73, 208, 0.8);
        }
      `}</style>
    </div>
  );
}

const SvgMainTrackBackground = () => {
  return (
    <svg
      width="564"
      height="54"
      viewBox="0 0 564 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M563.312 8.77066C554.635 8.05901 545.66 14.5104 529.795 29.7286M550.283 23.8781C556.004 30.4041 560.336 35.1236 562.657 35.5241"
        stroke="#F8D97A"
        stroke-width="8.16451"
      />
      <path
        d="M563.312 8.77066C554.635 8.05901 545.66 14.5104 529.795 29.7286M550.283 23.8781C556.004 30.4041 560.336 35.1236 562.657 35.5241"
        stroke="#F9DB7F"
        stroke-width="8.16451"
      />
      <path
        d="M490.053 27.8484C512.928 7.91972 523.347 3.53701 536.1 12.1881M510.057 23.3472C530.287 43.014 540.553 46.6509 556.637 41.2752"
        stroke="#F8D97A"
        stroke-width="8.16451"
      />
      <path
        d="M490.053 27.8484C512.928 7.91972 523.347 3.53701 536.1 12.1881M510.057 23.3472C530.287 43.014 540.553 46.6509 556.637 41.2752"
        stroke="#F9DB7F"
        stroke-width="8.16451"
      />
      <path
        d="M449.36 28.0581C472.234 8.12937 482.653 3.74667 495.406 12.3978M469.363 23.5568C489.594 43.2236 499.86 46.8605 515.944 41.4848"
        stroke="#F8D97A"
        stroke-width="8.16451"
      />
      <path
        d="M449.36 28.0581C472.234 8.12937 482.653 3.74667 495.406 12.3978M469.363 23.5568C489.594 43.2236 499.86 46.8605 515.944 41.4848"
        stroke="#F9DB7F"
        stroke-width="8.16451"
      />
      <path
        d="M408.662 28.2678C431.537 8.33903 441.956 3.95632 454.709 12.6074M428.665 23.7665C448.896 43.4333 459.162 47.0702 475.246 41.6945"
        stroke="#F8D97A"
        stroke-width="8.16451"
      />
      <path
        d="M408.662 28.2678C431.537 8.33903 441.956 3.95632 454.709 12.6074M428.665 23.7665C448.896 43.4333 459.162 47.0702 475.246 41.6945"
        stroke="#F9DB7F"
        stroke-width="8.16451"
      />
      <path
        d="M367.968 28.4776C390.843 8.54884 401.262 4.16613 414.015 12.8172M387.971 23.9763C408.202 43.6431 418.468 47.28 434.552 41.9043"
        stroke="#F8D97A"
        stroke-width="8.16451"
      />
      <path
        d="M367.968 28.4776C390.843 8.54884 401.262 4.16613 414.015 12.8172M387.971 23.9763C408.202 43.6431 418.468 47.28 434.552 41.9043"
        stroke="#F9DB7F"
        stroke-width="8.16451"
      />
      <path
        d="M327.275 28.687C350.15 8.75828 360.569 4.37557 373.322 13.0267M347.278 24.1857C367.509 43.8525 377.775 47.4894 393.859 42.1137"
        stroke="#F8D97A"
        stroke-width="8.16451"
      />
      <path
        d="M327.275 28.687C350.15 8.75828 360.569 4.37557 373.322 13.0267M347.278 24.1857C367.509 43.8525 377.775 47.4894 393.859 42.1137"
        stroke="#F9DB7F"
        stroke-width="8.16451"
      />
      <path
        d="M286.577 28.8969C309.452 8.96815 319.871 4.58544 332.624 13.2365M306.58 24.3956C326.811 44.0624 337.077 47.6993 353.161 42.3236"
        stroke="#F8D97A"
        stroke-width="8.16451"
      />
      <path
        d="M286.577 28.8969C309.452 8.96815 319.871 4.58544 332.624 13.2365M306.58 24.3956C326.811 44.0624 337.077 47.6993 353.161 42.3236"
        stroke="#F9DB7F"
        stroke-width="8.16451"
      />
      <path
        d="M245.884 29.1063C268.758 9.17756 279.177 4.79485 291.93 13.4459M265.887 24.605C286.118 44.2718 296.384 47.9087 312.468 42.533"
        stroke="#F8D97A"
        stroke-width="8.16451"
      />
      <path
        d="M245.884 29.1063C268.758 9.17756 279.177 4.79485 291.93 13.4459M265.887 24.605C286.118 44.2718 296.384 47.9087 312.468 42.533"
        stroke="#F9DB7F"
        stroke-width="8.16451"
      />
      <path
        d="M3.0445 23.8302C7.56456 19.6544 20.6638 13.1488 30.7571 18.0556"
        stroke="#F8D97A"
        stroke-width="8.16451"
      />
      <path
        d="M3.0445 23.8302C7.56456 19.6544 20.6638 13.1488 30.7571 18.0556"
        stroke="#F9DB7F"
        stroke-width="8.16451"
      />
      <path
        d="M205.19 29.3162C228.065 9.38743 238.484 5.00472 251.237 13.6558M225.193 24.8149C245.424 44.4817 255.69 48.1186 271.774 42.7429"
        stroke="#F8D97A"
        stroke-width="8.16451"
      />
      <path
        d="M205.19 29.3162C228.065 9.38743 238.484 5.00472 251.237 13.6558M225.193 24.8149C245.424 44.4817 255.69 48.1186 271.774 42.7429"
        stroke="#F9DB7F"
        stroke-width="8.16451"
      />
      <path
        d="M164.497 29.526C187.371 9.59727 197.791 5.21456 210.544 13.8657M184.5 25.0247C204.731 44.6915 214.997 48.3284 231.081 42.9527"
        stroke="#F8D97A"
        stroke-width="8.16451"
      />
      <path
        d="M164.497 29.526C187.371 9.59727 197.791 5.21456 210.544 13.8657M184.5 25.0247C204.731 44.6915 214.997 48.3284 231.081 42.9527"
        stroke="#F9DB7F"
        stroke-width="8.16451"
      />
      <path
        d="M117.668 31.7839C140.622 11.8571 151.078 7.47528 163.877 16.1275M137.742 27.2843C158.046 46.9529 168.349 50.5907 184.49 45.2164"
        stroke="#F8D97A"
        stroke-width="8.16451"
      />
      <path
        d="M117.668 31.7839C140.622 11.8571 151.078 7.47528 163.877 16.1275M137.742 27.2843C158.046 46.9529 168.349 50.5907 184.49 45.2164"
        stroke="#F9DB7F"
        stroke-width="8.16451"
      />
      <path
        d="M76.8301 31.99C99.7841 12.0633 110.24 7.68146 123.039 16.3337M96.9039 27.4905C117.208 47.1591 127.511 50.7969 143.652 45.4226"
        stroke="#F8D97A"
        stroke-width="8.16451"
      />
      <path
        d="M76.8301 31.99C99.7841 12.0633 110.24 7.68146 123.039 16.3337M96.9039 27.4905C117.208 47.1591 127.511 50.7969 143.652 45.4226"
        stroke="#F9DB7F"
        stroke-width="8.16451"
      />
      <path
        d="M35.9878 32.1962C58.9419 12.2694 69.3978 7.8876 82.1969 16.5398M56.0617 27.6966C76.366 47.3652 86.6689 51.0031 102.81 45.6287"
        stroke="#F8D97A"
        stroke-width="8.16451"
      />
      <path
        d="M35.9878 32.1962C58.9419 12.2694 69.3978 7.8876 82.1969 16.5398M56.0617 27.6966C76.366 47.3652 86.6689 51.0031 102.81 45.6287"
        stroke="#F9DB7F"
        stroke-width="8.16451"
      />
      <path
        d="M15.2231 27.9026C35.5274 47.5712 45.8303 51.209 61.9709 45.8347"
        stroke="#F8D97A"
        stroke-width="8.16451"
      />
      <path
        d="M15.2231 27.9026C35.5274 47.5712 45.8303 51.209 61.9709 45.8347"
        stroke="#F9DB7F"
        stroke-width="8.16451"
      />
    </svg>
  );
};
