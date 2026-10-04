"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks, companyInfo } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur border-b border-[#2A2A2A]"
          : "bg-transparent"
      }`}
      style={{ height: "72px" }}
    >
      <nav className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-[42px] h-[42px] border border-[#E61919] flex items-center justify-center relative overflow-hidden">
            <div className="hazard-stripes-thin w-full h-full absolute inset-0 opacity-20" />
            <span className="relative font-mono text-[#E61919] text-lg font-bold tracking-tighter">
              AG
            </span>
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-black text-xs tracking-[0.2em] leading-none">
              {companyInfo.shortName}
            </div>
            <div className="text-[#555] font-mono text-[9px] tracking-[0.15em] mt-0.5">
              {companyInfo.tagline}
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.2em] text-[#9A9A9A] hover:text-[#E61919] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E61919] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="font-mono text-[10px] tracking-[0.2em] bg-[#E61919] text-white px-5 py-2.5 hover:bg-[#FF2A2A] transition-colors duration-200"
          >
            REQUEST QUOTE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 right-0 bg-[#0A0A0A] border-b border-[#2A2A2A] transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-sm tracking-[0.2em] text-[#9A9A9A] hover:text-[#E61919] transition-colors"
            >
              &gt; {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="font-mono text-[10px] tracking-[0.2em] bg-[#E61919] text-white px-5 py-3 text-center hover:bg-[#FF2A2A] transition-colors"
          >
            REQUEST QUOTE
          </Link>
        </div>
      </div>
    </header>
  );
}
