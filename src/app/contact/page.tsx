"use client";

import { useState } from "react";
import Link from "next/link";
import { companyInfo } from "@/data/navigation";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="overflow-x-hidden w-full max-w-full">
        <section className="min-h-[80vh] flex items-center justify-center">
          <div className="text-center max-w-[500px] mx-auto px-6">
            <div className="w-20 h-20 border-4 border-[#4AF626] flex items-center justify-center mx-auto mb-8">
              <span className="font-mono text-[#4AF626] text-3xl font-bold">&#10003;</span>
            </div>
            <div className="section-label mb-4">TRANSMISSION RECEIVED</div>
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-black leading-[0.95] tracking-[-0.03em] mb-4">
              INQUIRY <span className="text-[#4AF626]">SUBMITTED</span>
            </h2>
            <p className="font-mono text-sm text-[#9A9A9A] mb-8">
              OUR ENGINEERING TEAM WILL REVIEW YOUR REQUIREMENTS AND RESPOND WITHIN 24 HOURS. FOR URGENT INQUIRIES, CALL {companyInfo.phone}.
            </p>
            <p className="font-mono text-[10px] text-[#555]">REF: RFQ-{Date.now().toString(36).toUpperCase()}</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden w-full max-w-full">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center border-b border-[#2A2A2A]">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-16 w-full relative z-10">
          <div className="section-label mb-4">INITIATE CONTACT</div>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-black leading-[0.9] tracking-[-0.04em] mb-4">
            REQUEST A
            <span className="text-[#E61919]"> QUOTE</span>
          </h1>
          <p className="font-mono text-sm text-[#9A9A9A] max-w-[600px]">
            FILL OUT THE FORM BELOW. OUR ENGINEERS WILL PROVIDE A DETAILED PROPOSAL WITH CAD DRAWINGS, PRICING, AND LEAD TIME WITHIN 24-48 HOURS.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.15em] text-[#9A9A9A] mb-2">
                      [ NAME ] *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] p-4 font-mono text-sm text-white focus:border-[#E61919] focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.15em] text-[#9A9A9A] mb-2">
                      [ EMAIL ] *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] p-4 font-mono text-sm text-white focus:border-[#E61919] focus:outline-none transition-colors"
                      placeholder="your@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.15em] text-[#9A9A9A] mb-2">
                      [ COMPANY ]
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] p-4 font-mono text-sm text-white focus:border-[#E61919] focus:outline-none transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.15em] text-[#9A9A9A] mb-2">
                      [ PHONE / WHATSAPP ]
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] p-4 font-mono text-sm text-white focus:border-[#E61919] focus:outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.15em] text-[#9A9A9A] mb-2">
                      [ PRODUCT INTEREST ]
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] p-4 font-mono text-sm text-white focus:border-[#E61919] focus:outline-none transition-colors"
                    >
                      <option value="">Select product type</option>
                      <option value="steel-column-guards">Steel Column Guards</option>
                      <option value="hdpe-bollards">HDPE Safety Bollards</option>
                      <option value="modular-barriers">Modular Safety Barriers</option>
                      <option value="rack-end-guards">Rack End Guards</option>
                      <option value="dock-bumpers">Dock Bumpers & Wheel Chocks</option>
                      <option value="corner-guards">Stainless Steel Corner Guards</option>
                      <option value="custom">Custom / OEM Solution</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.15em] text-[#9A9A9A] mb-2">
                      [ EST. QUANTITY ]
                    </label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] p-4 font-mono text-sm text-white focus:border-[#E61919] focus:outline-none transition-colors"
                      placeholder="e.g. 500 units"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-[0.15em] text-[#9A9A9A] mb-2">
                    [ PROJECT DETAILS ] *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] p-4 font-mono text-sm text-white focus:border-[#E61919] focus:outline-none transition-colors resize-none"
                    placeholder="Describe your warehouse layout, rack system type, protection requirements, timeline..."
                  />
                </div>

                <button type="submit" className="btn-industrial btn-primary w-full justify-center text-sm">
                  SUBMIT INQUIRY <span>&rarr;</span>
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Info */}
              <div className="card-industrial">
                <h3 className="font-black text-sm mb-4 tracking-[-0.02em]">DIRECT CONTACT</h3>
                <div className="space-y-4">
                  {[
                    { label: "PHONE", value: companyInfo.phone },
                    { label: "EMAIL", value: companyInfo.email },
                    { label: "WHATSAPP", value: companyInfo.whatsapp },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="font-mono text-[9px] tracking-[0.15em] text-[#E61919] w-16">[{item.label}]</span>
                      <span className="font-mono text-xs text-[#9A9A9A]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="card-industrial">
                <h3 className="font-black text-sm mb-4 tracking-[-0.02em]">HEADQUARTERS</h3>
                <p className="font-mono text-xs text-[#9A9A9A] leading-relaxed">{companyInfo.address}</p>
              </div>

              {/* Hours */}
              <div className="card-industrial">
                <h3 className="font-black text-sm mb-4 tracking-[-0.02em]">OPERATIONS</h3>
                <div className="space-y-2 font-mono text-xs text-[#9A9A9A]">
                  <p>MON-FRI: 08:00 - 18:00 (GMT+8)</p>
                  <p>SAT: 08:00 - 12:00 (GMT+8)</p>
                  <p>SUN: CLOSED</p>
                  <p className="text-[10px] text-[#555] mt-2">24HR EMERGENCY LINE AVAILABLE</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-industrial flex items-center gap-4 hover:border-[#4AF626] transition-colors cursor-pointer block"
              >
                <div className="w-12 h-12 bg-[#25D366] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">WA</span>
                </div>
                <div>
                  <div className="font-black text-sm mb-0.5 tracking-[-0.02em]">WHATSAPP CHAT</div>
                  <div className="font-mono text-[10px] text-[#555]">INSTANT RESPONSE DURING BUSINESS HOURS</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links — Product Lines */}
      <section className="py-16 bg-[#121212] border-t border-[#2A2A2A]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="section-label mb-6">BROWSE OUR PROTECTION LINES</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Rack Protector →", desc: "Steel column guards & HDPE rack end guards. 15,000 lbs impact rated, bolt-on installation." },
              { title: "Warehouse Barrier →", desc: "Modular steel barriers & dock bumpers. PAS 13 certified, 20,000J impact rated." },
              { title: "Safety Bollard →", desc: "Flexible HDPE & fixed steel bollards. -40°C cold storage rated, 15+ year UV life." },
            ].map((link) => (
              <Link key={link.title} href="/products" className="card-industrial group">
                <h3 className="font-black text-sm mb-2 group-hover:text-[#E61919] transition-colors">{link.title}</h3>
                <p className="font-mono text-[10px] text-[#9A9A9A] leading-relaxed">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="section-label mb-4">ORDERING & SHIPPING FAQ</div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-black leading-[0.95] tracking-[-0.03em] mb-10">
            GOT <span className="text-[#E61919]">QUESTIONS?</span>
          </h2>
          <div className="space-y-3">
            {[
              { q: "What information do I need to provide for an accurate quote?", a: "For the fastest and most accurate quotation, please provide: your facility type (overseas fulfillment center, cold storage, logistics hub, etc.), the type(s) of protection needed, approximate quantities, and any special requirements (custom colors, cold storage rating, specific rack brand compatibility). If you have a facility layout or CAD drawing, attaching it will allow our engineers to provide a complete protection plan." },
              { q: "How quickly will I receive a response to my RFQ?", a: "Standard inquiries receive a response within 24 hours during business days (Mon-Fri, 08:00-18:00 GMT+8). Technical RFQs requiring engineering review (custom dimensions, special materials, large projects) receive a complete proposal with CAD drawings and pricing within 48 hours. For urgent requests, contact us via WhatsApp for immediate assistance." },
              { q: "What shipping methods and terms do you offer?", a: "We ship FCL (Full Container Load) and LCL (Less than Container Load) from Ningbo and Shanghai ports. Standard terms are FOB/CIF, with DDP (Delivered Duty Paid) available for US, EU, and Middle East destinations. Average transit time is 25 days door-to-door to US West Coast. All shipments include full documentation: commercial invoice, packing list, bill of lading, and material certifications." },
              { q: "Do you provide samples before bulk orders?", a: "Yes. We offer sample units of all standard products within 7 days. Custom configuration samples require 48-hour engineering review before production. Sample shipping costs are credited against your first bulk order. For OEM/ODM clients, we provide pre-production samples for approval before mass production begins." },
              { q: "What warranty and after-sales support do you provide?", a: "All AEGIS products carry a minimum 10-year warranty against manufacturing defects. Steel products are warranted against structural failure under rated impact conditions. HDPE products are warranted against UV degradation for 15 years. We maintain a dedicated after-sales engineering team reachable via email and WhatsApp for installation guidance, technical questions, and warranty claims." },
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
