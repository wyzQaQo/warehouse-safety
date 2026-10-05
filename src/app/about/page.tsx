export const dynamicParams = false;
"use client";

import { useState } from "react";
import Link from "next/link";
import { companyInfo, stats, certifications } from "@/data/navigation";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center border-b border-[#2A2A2A]">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-16 w-full relative z-10">
          <div className="section-label mb-4">ABOUT AEGIS</div>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-black leading-[0.9] tracking-[-0.04em] mb-4">
            MANUFACTURING
            <span className="text-[#E61919]"> EXCELLENCE</span>
          </h1>
          <p className="font-mono text-sm text-[#9A9A9A] max-w-[600px]">
            15+ YEARS OF INDUSTRIAL SAFETY MANUFACTURING. 50,000 SQM FACILITY. SERVING 200+ GLOBAL CLIENTS.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[#2A2A2A] bg-[#121212]">
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[clamp(2rem,4vw,3rem)] font-black text-white leading-none mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="font-mono text-[9px] tracking-[0.2em] text-[#9A9A9A]">{stat.label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory */}
      <section id="factory" className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">FACTORY TOUR</div>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-black leading-[0.95] tracking-[-0.03em] mb-6">
                STATE-OF-THE-ART
                <span className="text-[#E61919]"> MANUFACTURING</span>
              </h2>
              <div className="space-y-4 font-mono text-xs text-[#9A9A9A] leading-relaxed">
                <p>OUR 50,000 SQM FACILITY IN HANGZHOU BAY INDUSTRIAL ZONE HOUSES COMPLETE IN-HOUSE PRODUCTION CAPABILITIES — FROM RAW STEEL TO FINISHED PRODUCT.</p>
                <div className="grid grid-cols-2 gap-2 mt-6">
                  {[
                    "CNC LASER CUTTING",
                    "ROBOTIC WELDING (6-AXIS)",
                    "HOT-DIP GALVANIZING LINE",
                    "AUTOMATED POWDER COATING",
                    "HDPE INJECTION MOLDING",
                    "HYDRAULIC PRESS BRAKES",
                    "3D COORDINATE MEASURING",
                    "IMPACT TESTING LAB",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 bg-[#121212] p-3">
                      <span className="text-[#E61919] font-mono text-[10px]">&gt;</span>
                      <span className="font-mono text-[10px] tracking-[0.1em]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border border-[#2A2A2A] overflow-hidden">
              <img
                src="https://picsum.photos/seed/steel-factory/800/600"
                alt="Manufacturing Facility"
                className="w-full h-[400px] object-cover opacity-70 mix-blend-luminosity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="specs" className="py-24 bg-[#121212] border-y border-[#2A2A2A]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="section-label mb-8">CERTIFICATIONS & COMPLIANCE</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="card-industrial text-center py-8">
                <div className="w-16 h-16 border-2 border-[#E61919] flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono text-[#E61919] text-xl font-bold">
                    {cert.name.split(" ")[0].charAt(0)}
                  </span>
                </div>
                <h3 className="font-black text-sm mb-1">{cert.name}</h3>
                <p className="font-mono text-[9px] text-[#555] tracking-[0.1em]">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="section-label mb-8">INDUSTRIES SERVED</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[#2A2A2A]">
            {["AMAZON FBA CENTERS", "COLD STORAGE", "AUTOMOTIVE DC", "3PL HUBS", "BIG-BOX RETAIL", "PHARMA WAREHOUSES", "FOOD & BEVERAGE", "E-COMMERCE"].map((ind) => (
              <div key={ind} className="bg-[#0A0A0A] p-8 flex items-center justify-center text-center hover:bg-[#161616] transition-colors cursor-default group">
                <span className="font-mono text-[11px] tracking-[0.15em] text-[#9A9A9A] group-hover:text-[#E61919] transition-colors">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links — Products by Application */}
      <section className="py-24 bg-[#121212] border-t border-[#2A2A2A]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="section-label mb-8">EXPLORE OUR PROTECTION SOLUTIONS</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Rack Protectors", desc: "Steel & HDPE column guards for pallet rack systems. OSHA 1910.176 compliant. 15,000 lbs impact rated.", href: "/products", anchor: "Rack Protector" },
              { title: "Warehouse Barriers", desc: "Modular steel barriers & dock protection. PAS 13 certified. Configurable single/double/triple rail.", href: "/products", anchor: "Warehouse Barrier" },
              { title: "Safety Bollards", desc: "Flexible HDPE & fixed steel bollards. UV-stabilized for 15+ year outdoor life. -40°C cold storage rated.", href: "/products", anchor: "Safety Bollard" },
            ].map((link) => (
              <Link key={link.title} href={link.href} className="card-industrial group">
                <h3 className="font-black text-sm mb-2 group-hover:text-[#E61919] transition-colors">{link.title}</h3>
                <p className="font-mono text-[10px] text-[#9A9A9A] leading-relaxed mb-3">{link.desc}</p>
                <span className="font-mono text-[9px] tracking-[0.15em] text-[#E61919] group-hover:translate-x-1 transition-transform inline-block">
                  VIEW {link.anchor.toUpperCase()} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="section-label mb-4">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-black leading-[0.95] tracking-[-0.03em] mb-12">
            WAREHOUSE SAFETY <span className="text-[#E61919]">FAQ</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: "What types of rack systems are AEGIS protectors compatible with?", a: "Our rack protectors feature a universal bolt-on mounting pattern compatible with 90%+ of pallet rack brands including Teardrop, Interlake, Ridg-U-Rak, UNARCO, and Steel King. No adapters required. For specialty systems like drive-in, push-back, or cantilever racks, contact our engineering team for custom bracket design — typically delivered within 48 hours." },
              { q: "How do I choose between steel and HDPE for my warehouse application?", a: "Choose Q345 structural steel for high-impact zones — rack columns, loading dock edges, and areas with heavy forklift traffic where maximum impact resistance (15,000 lbs) is critical. Choose PE100 HDPE for flexible protection in pedestrian zones, narrow aisles, cold storage (-40°C rated), and areas where occasional low-speed impacts are expected. Many facilities use both: steel for structural protection and HDPE for traffic guidance and separation." },
              { q: "Do AEGIS products meet insurance requirements for warehouse safety?", a: "Yes. Our modular barrier systems are PAS 13 tested (20,000 Joules impact rating), which is increasingly required by major commercial property insurers for premium discounts. Our rack protectors meet OSHA 1910.176 and ANSI MH16.1 standards. We provide full certification documentation with every order for your insurer's review." },
              { q: "What is your minimum order quantity (MOQ) for overseas fulfillment centers?", a: "Standard products have a flexible MOQ starting at 50 units per SKU. For large overseas fulfillment center projects (500+ units), we offer dedicated production runs with custom branding, packaging, and container optimization. Mixed container loads combining rack protectors, barriers, and bollards are standard practice for 3PL and cross-dock operators." },
              { q: "Can you match our facility's existing safety yellow or corporate color scheme?", a: "Yes. We offer RAL color matching for all steel products (powder coat) and HDPE products (color compounding). Simply provide your RAL code or a physical color sample. Custom colors add approximately 3-5 days to standard lead times and are available at no additional cost for orders over 100 units." },
            ].map((faq, i) => (
              <details key={i} className="card-industrial group cursor-pointer">
                <summary className="font-black text-sm tracking-[-0.02em] py-2 list-none flex justify-between items-center group-hover:text-[#E61919] transition-colors">
                  {faq.q}
                  <span className="font-mono text-[#E61919] text-lg ml-4 shrink-0">+</span>
                </summary>
                <p className="font-mono text-[10px] text-[#9A9A9A] leading-relaxed mt-3 pt-3 border-t border-[#2A2A2A]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
