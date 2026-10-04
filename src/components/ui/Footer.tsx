"use client";

import Link from "next/link";
import { companyInfo, navLinks, certifications } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      {/* Top Hazard Stripe */}
      <div className="hazard-stripes h-[4px] w-full" />

      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[36px] h-[36px] border border-[#E61919] flex items-center justify-center">
                <span className="font-mono text-[#E61919] text-sm font-bold">AG</span>
              </div>
              <div>
                <div className="text-white font-black text-xs tracking-[0.15em]">
                  {companyInfo.shortName}
                </div>
                <div className="text-[#555] font-mono text-[8px] tracking-[0.1em]">
                  INDUSTRIAL SAFETY
                </div>
              </div>
            </div>
            <p className="font-mono text-xs leading-relaxed text-[#9A9A9A] mb-6 max-w-[280px]">
              {companyInfo.tagline}. OSHA-Compliant steel and HDPE protection
              systems for global warehouse operations.
            </p>
            <div className="flex gap-4">
              <span className="font-mono text-[10px] tracking-[0.15em] text-[#555]">FOLLOW:</span>
              {["LN", "FB", "YT"].map((s) => (
                <span key={s} className="font-mono text-[10px] text-[#9A9A9A] hover:text-[#E61919] cursor-pointer transition-colors">
                  [{s}]
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.25em] text-[#555] mb-6">
              [ NAVIGATION ]
            </h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-mono text-xs text-[#9A9A9A] hover:text-[#E61919] transition-colors"
                >
                  &gt; {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.25em] text-[#555] mb-6">
              [ CONTACT ]
            </h4>
            <div className="space-y-3 font-mono text-xs text-[#9A9A9A]">
              <p>T: {companyInfo.phone}</p>
              <p>E: {companyInfo.email}</p>
              <p>W: {companyInfo.whatsapp}</p>
              <p className="mt-4 leading-relaxed">{companyInfo.address}</p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.25em] text-[#555] mb-6">
              [ CERTIFICATIONS ]
            </h4>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-2 text-xs"
                >
                  <span className="text-[#E61919] font-mono">&#10003;</span>
                  <div>
                    <span className="font-mono text-[#EAEAEA] text-[10px]">{cert.name}</span>
                    <span className="block text-[#555] text-[8px] tracking-[0.05em]">
                      {cert.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] text-[#555] tracking-[0.1em]">
            &copy; {new Date().getFullYear()} {companyInfo.name}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-mono text-[10px] text-[#555] hover:text-[#9A9A9A] transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="font-mono text-[10px] text-[#555] hover:text-[#9A9A9A] transition-colors">
              TERMS OF SERVICE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
