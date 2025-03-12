export default function MainTracks() {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans relative">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-2">
            <span className="text-[#0cf]">Main</span> Tracks
          </h1>
          <p className="text-[#0cf] uppercase tracking-wider text-sm">
            YOUR GUIDE TO HACKMOL 6.0
          </p>
        </header>

        {/* Main Track - Yellow */}
        <div className="max-w-3xl mx-auto mb-16 relative">
          <div className="bg-[#f8e38e] rounded-md overflow-hidden">
            <div className="bg-[#e6d17e] py-2 px-4 text-black font-bold text-center text-xl">
              MAIN TRACK
            </div>
            <div className="p-6 text-black flex">
              <div className="w-1/2">
                <div className="mb-4">
                  <div className="font-bold text-lg">WINNER</div>
                  <div className="flex items-center">
                    <span className="inline-block mr-2">💰</span> 50,000
                  </div>
                </div>
                <div className="mb-4">
                  <div className="font-bold text-lg">1ST RUNNER UP</div>
                  <div className="flex items-center">
                    <span className="inline-block mr-2">💰</span> 30,000
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg">2ND RUNNER UP</div>
                  <div className="flex items-center">
                    <span className="inline-block mr-2">💰</span> 30,000
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="font-bold text-lg mb-2">ODIN'S BLESSINGS</div>
                <ul className="list-none">
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> Partner Tshirts
                  </li>
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> This And That And This
                  </li>
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> What Else Would U
                  </li>
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> Have Is Yours
                  </li>
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> Halu Halu Halu Halu
                  </li>
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> Bhalu Bhalu Bhalu
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span> Gdsc Nhi GDG Hai Bhaiya
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Norse symbol on right */}
          <div className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-[#f8e38e] text-4xl hidden md:block">
            ᛟ
          </div>
        </div>

        {/* Lower tracks container with blue shape in middle */}
        <div className="relative max-w-5xl mx-auto">
          {/* Blue shape in middle */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-64 bg-[#1a3c5e] rounded-full z-0"></div>

          <div className="flex flex-col md:flex-row gap-6 justify-between relative z-10">
            {/* Fresher's Track - Gray */}
            <div className="w-full md:w-[45%] bg-[#e0e0e0] rounded-md overflow-hidden">
              <div className="bg-[#c0c0c0] py-2 px-4 text-black font-bold text-center text-xl">
                FRESHER'S TRACK
              </div>
              <div className="p-6 text-black">
                <div className="mb-4">
                  <div className="font-bold text-lg">WINNER</div>
                  <div className="flex items-center">
                    <span className="inline-block mr-2">💰</span> 10,000
                  </div>
                </div>
                <div className="mb-4">
                  <div className="font-bold text-lg">1ST RUNNER UP</div>
                  <div className="flex items-center">
                    <span className="inline-block mr-2">💰</span> 5000
                  </div>
                </div>
                <div className="mb-4">
                  <div className="font-bold text-lg">2ND RUNNER UP</div>
                  <div className="flex items-center">
                    <span className="inline-block mr-2">💰</span> 3000
                  </div>
                </div>
                <div className="font-bold text-lg mb-2">ODIN'S BLESSINGS</div>
                <ul className="list-none">
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> Partner Tshirts
                  </li>
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> This And That And This
                  </li>
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> What Else Would U
                  </li>
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> Have Is Yours
                  </li>
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> Halu Halu Halu Halu
                  </li>
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> Bhalu Bhalu Bhalu
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span> Gdsc Nhi GDG Hai Bhaiya
                  </li>
                </ul>
              </div>
            </div>

            {/* Women's Track - Purple */}
            <div className="w-full md:w-[45%] bg-[#d772d7] rounded-md overflow-hidden">
              <div className="bg-[#b64cb6] py-2 px-4 text-black font-bold text-center text-xl">
                WOMEN'S TRACK
              </div>
              <div className="p-6 text-black">
                <div className="mb-4">
                  <div className="font-bold text-lg">WINNER</div>
                  <div className="flex items-center">
                    <span className="inline-block mr-2">💰</span> 10,000
                  </div>
                </div>
                <div className="mb-4">
                  <div className="font-bold text-lg">1ST RUNNER UP</div>
                  <div className="flex items-center">
                    <span className="inline-block mr-2">💰</span> 5000
                  </div>
                </div>
                <div className="mb-4">
                  <div className="font-bold text-lg">2ND RUNNER UP</div>
                  <div className="flex items-center">
                    <span className="inline-block mr-2">💰</span> 3000
                  </div>
                </div>
                <div className="font-bold text-lg mb-2">FREYA'S REMNANTS</div>
                <ul className="list-none">
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> Partner Tshirts
                  </li>
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> This And That And This
                  </li>
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> What Else Would U
                  </li>
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> Have Is Yours
                  </li>
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> Halu Halu Halu Halu
                  </li>
                  <li className="flex items-start mb-1">
                    <span className="mr-2">•</span> Bhalu Bhalu Bhalu
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span> Gdsc Nhi GDG Hai Bhaiya
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Star at bottom */}
        <div className="flex justify-center mt-16">
          <div className="text-[#a0c4ff] text-5xl">✧</div>
        </div>
      </div>
    </div>
  );
}
