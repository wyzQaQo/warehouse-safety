export const dynamicParams = false;
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { companyInfo, stats } from "@/data/navigation";
import { productCategories, customerSegments } from "@/data/products";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <HeroSection />
      <StatsBar />
      <ThreeProductLines />
      <FeaturesGrid />
      <CustomerSegments />
      <WhyChooseUs />
      <CTASection />
    </main>
  );
}

/* ==================== HERO SECTION ==================== */
function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#E61919]/5 blur-[150px] z-0" />
      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] rounded-full bg-[#4AF626]/3 blur-[100px] z-0" />
      <div className="corner-accent top-left z-10" />
      <div className="corner-accent top-right z-10" />
      <div className="corner-accent bottom-left z-10" />
      <div className="corner-accent bottom-right z-10" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-label mb-6">INDUSTRIAL SAFETY SYSTEMS</div>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-[-0.04em] font-black mb-4">
              <span className="block">WAREHOUSE</span>
              <span className="block text-[#E61919] glitch-text" data-text="COLLISION">
                COLLISION
              </span>
              <span className="block">PROTECTION</span>
            </h1>

            {/* Three Pillars */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { label: "RACK PROTECTOR", code: "RP" },
                { label: "WAREHOUSE BARRIER", code: "WB" },
                { label: "SAFETY BOLLARD", code: "SB" },
              ].map((p) => (
                <div key={p.code} className="flex items-center gap-2 bg-[#161616] border border-[#2A2A2A] px-3 py-1.5">
                  <span className="font-mono text-[9px] text-[#E61919] font-bold">{p.code}</span>
                  <span className="font-mono text-[9px] text-[#9A9A9A] tracking-[0.1em]">{p.label}</span>
                </div>
              ))}
            </div>

            <p className="font-mono text-sm text-[#9A9A9A] leading-relaxed max-w-[480px] mb-8">
              ENGINEERED FOR MULTI-TON FORKLIFT IMPACTS. OSHA-COMPLIANT STEEL &amp;
              HDPE PROTECTION SYSTEMS FOR OVERSEAS FULFILLMENT CENTERS AND
              HIGH-VOLUME LOGISTICS HUBS WORLDWIDE.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-industrial btn-primary pulse-red">
                GET A QUOTE <span className="text-lg">&rarr;</span>
              </Link>
              <Link href="#products" className="btn-industrial">
                VIEW SOLUTIONS
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/3] border border-[#2A2A2A] overflow-hidden bg-[#121212]">
              {/* Crosshair */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 pointer-events-none">
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#E61919]/30" />
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E61919]/30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-[#E61919] rounded-full" />
              </div>
              <img
                src="https://picsum.photos/seed/warehouse-forklift/800/600"
                alt="Warehouse Safety"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0A0A] p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.2em] text-[#555]">SYSTEM STATUS</div>
                    <div className="font-mono text-sm text-[#4AF626] flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#4AF626] rounded-full inline-block animate-pulse" />
                      ALL SYSTEMS ACTIVE
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[9px] tracking-[0.2em] text-[#555]">PROTECTION ZONES</div>
                    <div className="font-mono text-sm text-white font-bold">3 LINES DEPLOYED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
    </section>
  );
}

/* ==================== STATS BAR ==================== */
function StatsBar() {
  return (
    <section className="relative border-y border-[#2A2A2A] bg-[#121212]/50 backdrop-blur">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[clamp(2rem,4vw,3rem)] font-black text-white leading-none mb-2">
                <CountUpAnimation end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-[9px] tracking-[0.2em] text-[#9A9A9A]">{stat.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUpAnimation({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) { setCount(end); clearInterval(timer); }
            else { setCount(Math.floor(current)); }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ==================== THREE PRODUCT LINES ==================== */
function ThreeProductLines() {
  const lineProducts: Record<string, { title: string; desc: string; img: string; specs: string[] }[]> = {
    "Rack Protector": [
      {
        title: "Steel Rack Column Guards",
        desc: "8-12mm Q345 structural steel. Hot-dip galvanized. 15,000 lbs impact rating. Bolt-on for all major rack brands.",
        img: "https://picsum.photos/seed/steel-rack-col/800/600",
        specs: ["Q345 STEEL", "15,000 LBS", "OSHA 1910.176", "HDG COATED"],
      },
      {
        title: "HDPE Rack End Guards",
        desc: "Virgin PE100 HDPE. Double-wall corrugated core. >95% shape recovery after impact. Universal bracket.",
        img: "https://picsum.photos/seed/hdpe-rack-end/800/600",
        specs: ["PE100 HDPE", "95%+ RECOVERY", "UV STABILIZED", "-40°C RATED"],
      },
    ],
    "Warehouse Barrier": [
      {
        title: "Modular Steel Barrier System",
        desc: "100x100x5mm SHS tube. 1-3 rail configuration. 20,000J impact. 8-bolt flange joints.",
        img: "https://picsum.photos/seed/modular-steel-bar/800/600",
        specs: ["PAS 13", "20,000 J", "1-3 RAILS", "HDG FINISH"],
      },
      {
        title: "Dock Barrier & Bumper Systems",
        desc: "Laminated rubber 60 Shore A. 6mm steel backing. Retro-reflective. Repeated impact rated.",
        img: "https://picsum.photos/seed/dock-bumper-bar/800/600",
        specs: ["60 SHORE A", "300MM THICK", "STEEL BACKED", "HI-VIZ"],
      },
    ],
    "Safety Bollard": [
      {
        title: "HDPE Flexible Bollards",
        desc: "PE100 virgin HDPE. Energy-absorbing chambers. >95% memory return. 15+ year UV life.",
        img: "https://picsum.photos/seed/hdpe-flex-bol/800/600",
        specs: ["PE100 HDPE", "95%+ RETURN", "15YR UV", "100-200MM"],
      },
      {
        title: "Steel Pipe Safety Bollards",
        desc: "Schedule 40/80 steel pipe. Concrete core fill. Domed cap. Embedment up to 500mm.",
        img: "https://picsum.photos/seed/steel-pipe-bol/800/600",
        specs: ["SCH 40/80", "CONCRETE CORE", "114-168MM OD", "500MM EMBED"],
      },
    ],
  };

  return (
    <section id="products" className="relative py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="section-label mb-4">PRODUCT LINES</div>
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.95] tracking-[-0.03em] mb-4">
          THREE LINES.
          <br />
          <span className="text-[#E61919]">COMPLETE PROTECTION.</span>
        </h2>
        <p className="font-mono text-sm text-[#9A9A9A] max-w-[600px] mb-16">
          EVERY PRODUCT DESIGNED, TESTED, AND CERTIFIED FOR REAL-WORLD WAREHOUSE IMPACT SCENARIOS. NO COMPROMISE ON MATERIAL QUALITY OR SAFETY COMPLIANCE.
        </p>

        {productCategories.map((cat) => (
          <div key={cat.slug} className="mb-16 last:mb-0">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border-2 border-[#E61919] flex items-center justify-center shrink-0">
                <span className="font-mono text-[#E61919] font-black text-sm">{cat.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-black tracking-[-0.02em]">{cat.name.toUpperCase()}</h3>
                <p className="font-mono text-[10px] text-[#555] tracking-[0.1em]">{cat.description.split(".")[0]}.</p>
              </div>
            </div>

            {/* Key Specs Strip */}
            <div className="flex flex-wrap gap-3 mb-4">
              {cat.keySpecs.map((spec) => (
                <span key={spec} className="font-mono text-[9px] tracking-[0.15em] text-[#E61919] border border-[#E61919]/30 bg-[#E61919]/5 px-3 py-1">
                  {spec}
                </span>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(lineProducts[cat.name] || []).map((p, i) => (
                <Link key={p.title} href="/products" className="card-industrial group cursor-pointer relative overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative w-full md:w-48 h-40 shrink-0 overflow-hidden">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-500 group-hover:scale-105 mix-blend-luminosity" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#161616]" />
                    </div>
                    <div className="flex-1 py-2">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {p.specs.map((s) => (
                          <span key={s} className="font-mono text-[7px] tracking-[0.1em] text-[#555] bg-[#0A0A0A] px-2 py-0.5 border border-[#2A2A2A]">{s}</span>
                        ))}
                      </div>
                      <h4 className="font-black text-sm tracking-[-0.02em] mb-1 group-hover:text-[#E61919] transition-colors">{p.title}</h4>
                      <p className="font-mono text-[10px] text-[#9A9A9A] leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border border-[#2A2A2A] flex items-center justify-center group-hover:border-[#E61919] group-hover:bg-[#E61919] transition-all duration-300">
                    <span className="text-white text-sm">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All */}
            <div className="mt-4 text-right">
              <Link href="/products" className="font-mono text-[10px] tracking-[0.15em] text-[#E61919] hover:text-[#FF2A2A] transition-colors">
                VIEW ALL {cat.name.toUpperCase()} PRODUCTS &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ==================== FEATURES GRID ==================== */
function FeaturesGrid() {
  const features = [
    { icon: "S", title: "STRUCTURAL INTEGRITY", desc: "Q345 structural steel with full penetration welds. Every product load-tested to 150% rated capacity before shipment. Zero field failures in 15+ years." },
    { icon: "C", title: "CORROSION RESISTANCE", desc: "Hot-dip galvanized to ASTM A123 standards. C5-M marine environment rated. 25+ year service life in indoor warehouse applications." },
    { icon: "F", title: "FAST DEPLOYMENT", desc: "Bolt-on installation — no welding, no downtime. Complete warehouse protection in one shift. Retrofit any existing rack system without disassembly." },
    { icon: "D", title: "DESIGN FLEXIBILITY", desc: "Custom dimensions, colors (RAL matching), and mounting configurations. OEM/ODM services for major 3PL and cold chain operators worldwide." },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#121212] border-y border-[#2A2A2A]">
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="section-label mb-4">WHY AEGIS</div>
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.95] tracking-[-0.03em] mb-16">
          BUILT FOR
          <br />
          <span className="text-[#E61919]">THE REAL WORLD</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f.title} className="card-industrial group">
              <div className="flex gap-4">
                <div className="w-12 h-12 border border-[#2A2A2A] flex items-center justify-center shrink-0 group-hover:border-[#E61919] transition-colors">
                  <span className="font-mono text-[#E61919] font-bold">{f.icon}</span>
                </div>
                <div>
                  <h3 className="font-black text-sm tracking-[-0.02em] mb-2">{f.title}</h3>
                  <p className="font-mono text-[10px] text-[#9A9A9A] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== CUSTOMER SEGMENTS ==================== */
function CustomerSegments() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="section-label mb-4">CUSTOMER SOLUTIONS</div>
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.95] tracking-[-0.03em] mb-4">
          BUILT FOR
          <br />
          <span className="text-[#E61919]">YOUR OPERATION</span>
        </h2>
        <p className="font-mono text-sm text-[#9A9A9A] max-w-[600px] mb-16">
          WE DON&apos;T SELL PRODUCTS — WE DELIVER PROTECTION SOLUTIONS FOR SPECIFIC WAREHOUSE ENVIRONMENTS. EVERY FACILITY TYPE HAS UNIQUE RISKS. WE ADDRESS THEM ALL.
        </p>

        {customerSegments.map((segment) => (
          <div key={segment.id} className="mb-16 last:mb-0">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left: Image */}
              <div className="lg:col-span-2 relative overflow-hidden border border-[#2A2A2A] min-h-[300px]">
                <img
                  src={segment.image}
                  alt={segment.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="hazard-stripes-thin w-16 h-1 mb-2" />
                  <div className="font-mono text-[9px] tracking-[0.2em] text-[#E61919]">{segment.tagline.split(",")[0].toUpperCase()}</div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <h3 className="text-2xl font-black tracking-[-0.03em] mb-2">
                    {segment.name}
                  </h3>
                  <p className="font-mono text-[11px] text-[#555] tracking-[0.1em] mb-4">{segment.tagline}</p>
                  <p className="font-mono text-xs text-[#9A9A9A] leading-relaxed">{segment.description}</p>
                </div>

                {/* Pain Points */}
                <div>
                  <div className="font-mono text-[9px] tracking-[0.2em] text-[#E61919] mb-3">[ OPERATIONAL CHALLENGES ]</div>
                  <div className="space-y-2">
                    {segment.painPoints.map((pp, i) => (
                      <div key={i} className="flex items-start gap-3 card-industrial !p-3">
                        <span className="font-mono text-[#E61919] text-xs font-bold shrink-0 mt-0.5">{`0${i + 1}`}</span>
                        <span className="font-mono text-[10px] text-[#9A9A9A] leading-relaxed">{pp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {segment.stats.map((st) => (
                    <div key={st.label} className="card-industrial !p-3 text-center bg-[#121212]">
                      <div className="text-lg font-black text-[#E61919] leading-none mb-1">{st.value}</div>
                      <div className="font-mono text-[7px] text-[#555] leading-tight">{st.label}</div>
                    </div>
                  ))}
                </div>

                {/* Recommended Products CTA */}
                <Link href="/contact" className="btn-industrial btn-primary text-xs inline-flex">
                  GET {segment.id === "overseas-warehouse" ? "OVERSEAS WAREHOUSE" : "LOGISTICS CENTER"} SOLUTION &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ==================== WHY CHOOSE US ==================== */
function WhyChooseUs() {
  const reasons = [
    { title: "IN-HOUSE STEEL & HDPE FABRICATION", desc: "50,000 m2 facility with CNC laser cutting, robotic welding, HDPE injection molding, and automated powder coating lines. Zero subcontracting — full quality control." },
    { title: "GLOBAL CERTIFICATION", desc: "ISO 9001, CE, ANSI MH16.1, OSHA 1910.176, PAS 13. Third-party tested annually by SGS and TUV Rheinland. Full documentation package with every order." },
    { title: "RAPID PROTOTYPING & SAMPLING", desc: "In-house mold shop for HDPE products. 7-day sample turnaround. Custom dimensions within 48-hour engineering review. CAD drawings included." },
    { title: "END-TO-END LOGISTICS", desc: "FCL/LCL shipping from Ningbo/Shanghai. DDP terms to US/EU/Middle East. Average 25-day door-to-door to US West Coast. Packaging engineered for container optimization." },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#121212] border-y border-[#2A2A2A]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label mb-4">MANUFACTURING EXCELLENCE</div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.95] tracking-[-0.03em] mb-6">
              WHY GLOBAL
              <span className="text-[#E61919]"> DCS CHOOSE</span>
              <br />
              AEGIS
            </h2>
            <p className="font-mono text-sm text-[#9A9A9A] leading-relaxed max-w-[480px] mb-8">
              FROM AMAZON FBA MEGA-WAREHOUSES TO PHARMACEUTICAL COLD CHAINS — OUR PROTECTION SYSTEMS ARE SPECIFIED BY THE WORLD&apos;S MOST DEMANDING FACILITY MANAGERS AND SAFETY OFFICERS.
            </p>
            <Link href="/contact" className="btn-industrial btn-primary">
              TALK TO AN ENGINEER <span>&rarr;</span>
            </Link>
          </div>
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <div key={r.title} className="card-industrial flex gap-4">
                <div className="font-mono text-[#E61919] text-sm font-bold shrink-0 mt-0.5">{`0${i + 1}`}</div>
                <div>
                  <h3 className="font-black text-sm mb-1 tracking-[-0.02em]">{r.title}</h3>
                  <p className="font-mono text-[10px] text-[#9A9A9A] leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== CTA SECTION ==================== */
function CTASection() {
  return (
    <section className="relative py-24 md:py-32 border-t border-[#2A2A2A]">
      <div className="absolute inset-0 bg-[#121212]">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#E61919]/5 blur-[120px]" />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
        <div className="section-label inline-block mb-6">INITIATE CONTACT</div>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-[0.9] tracking-[-0.04em] mb-6 max-w-[800px] mx-auto">
          READY TO
          <br />
          <span className="text-[#E61919]">HARDEN YOUR</span>
          <br />
          FACILITY?
        </h2>
        <p className="font-mono text-sm text-[#9A9A9A] max-w-[500px] mx-auto mb-10">
          SEND US YOUR FACILITY LAYOUT. OUR ENGINEERS WILL PROVIDE A COMPLETE PROTECTION PLAN WITHIN 48 HOURS — INCLUDING CAD DRAWINGS, PRODUCT RECOMMENDATIONS, AND QUOTATION.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-industrial btn-primary pulse-red text-sm">
            REQUEST ENGINEERING REVIEW <span>&rarr;</span>
          </Link>
          <a href={`mailto:${companyInfo.email}`} className="btn-industrial text-sm">
            {companyInfo.email}
          </a>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[900px] mx-auto">
          {[
            { line: "RACK PROTECTOR", desc: "Steel & HDPE column guards for all major rack brands. OSHA 1910.176 compliant." },
            { line: "WAREHOUSE BARRIER", desc: "Modular steel barriers & dock protection. PAS 13 certified, configurable rail heights." },
            { line: "SAFETY BOLLARD", desc: "Flexible HDPE & fixed steel bollards. 15+ year UV life, -40°C to +80°C rated." },
          ].map((item) => (
            <div key={item.line} className="card-industrial !p-4 text-left">
              <div className="font-mono text-[9px] tracking-[0.15em] text-[#E61919] mb-1">[{item.line}]</div>
              <p className="font-mono text-[9px] text-[#9A9A9A] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-6 px-8 py-4 border border-[#2A2A2A] bg-[#0A0A0A]/50">
          {[
            { label: "TEL", value: companyInfo.phone },
            { label: "WA", value: companyInfo.whatsapp },
            { label: "GMT", value: "+8 (BEIJING)" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#E61919]">[{item.label}]</span>
              <span className="font-mono text-xs text-[#9A9A9A]">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
