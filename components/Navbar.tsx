"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Tracks", href: "#tracks" },
  { label: "Speakers", href: "#speakers" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 font-sans">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/icons/favicon.png" alt="logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-cyan-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Register Button */}
          <div className="hidden md:block">
            <div
              className="relative group transition-colors duration-200 px-8 py-3 text-white text-lg font-medium cursor-pointer"
              data-hackathon-slug="hackmol-6"
              data-button-theme="dark"
              style={{ display: "inline-block" }}
            >
              <div className="absolute top-1 left-1 w-6 h-4 border-t-2 border-l-2 border-cyan-400 rounded-tl-sm transition-all ease-in duration-100 group-hover:top-2 group-hover:left-2 group-hover:w-5 group-hover:h-4"></div>
              <div className="absolute top-1 right-1 w-6 h-4 border-t-2 border-r-2 border-cyan-400 rounded-tr-sm transition-all ease-in duration-100 group-hover:top-2 group-hover:right-2 group-hover:w-5 group-hover:h-4"></div>
              <div className="absolute bottom-1 left-1 w-6 h-4 border-b-2 border-l-2 border-cyan-400 rounded-bl-sm transition-all ease-in duration-100 group-hover:bottom-2 group-hover:left-2 group-hover:w-5 group-hover:h-4"></div>
              <div className="absolute bottom-1 right-1 w-6 h-4 border-b-2 border-r-2 border-cyan-400 rounded-br-sm transition-all ease-in duration-100 group-hover:bottom-2 group-hover:right-2 group-hover:w-5 group-hover:h-4"></div>
              Register
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="text-white p-2"
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-slate-900/95 text-white border-slate-800"
              >
                <div className="flex flex-col mt-8 space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-white hover:text-cyan-400 transition-colors px-2 py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div
                    className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded text-center mt-4 apply-button"
                    data-hackathon-slug="hackmol-6"
                    data-button-theme="dark"
                    style={{ height: "44px", width: "312px" }}
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;