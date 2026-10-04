import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { buildOrganizationSchema, buildWebSiteSchema, renderJSONLD, buildFAQSchema } from "@/lib/seo-schema";
import "./globals.css";

export const metadata: Metadata = {
  title: "AEGIS Industrial Safety | Rack Protector, Warehouse Barrier & Safety Bollard Manufacturer",
  description:
    "OSHA-compliant steel rack protectors, HDPE safety bollards, and modular warehouse barriers. Trusted by Amazon FBA and global 3PL operators. ISO 9001 certified manufacturer — bolt-on install, 15,000 lbs impact rated.",
  keywords: [
    "warehouse rack protector",
    "steel rack column guards",
    "HDPE safety bollards wholesale",
    "warehouse safety barriers",
    "pallet rack column guards",
    "forklift impact protection",
    "OSHA warehouse safety",
    "modular safety barrier system",
    "industrial bollards supplier",
    "heavy duty steel teardrop rack column guards wholesale",
  ],
  openGraph: {
    title: "AEGIS Industrial Safety | Rack Protector · Warehouse Barrier · Safety Bollard",
    description:
      "OSHA-compliant steel and HDPE warehouse protection systems. 15+ years manufacturing for overseas fulfillment centers and logistics hubs. ISO 9001 certified.",
    type: "website",
    siteName: "AEGIS Industrial Safety",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://www.aegis-industrial.com",
  },
};

const orgSchema = buildOrganizationSchema({
  name: "AEGIS Industrial Safety",
  url: "https://www.aegis-industrial.com",
  description:
    "Manufacturer of OSHA-compliant steel rack protectors, HDPE safety bollards, and modular warehouse barrier systems for overseas fulfillment centers and logistics hubs worldwide.",
  telephone: "+86-571-8888-0000",
  email: "inquiry@aegis-industrial.com",
  address: {
    streetAddress: "No. 88, Jingang Road, Hangzhou Bay Industrial Zone",
    addressLocality: "Hangzhou",
    addressRegion: "Zhejiang",
    postalCode: "310000",
    addressCountry: "CN",
  },
});

const websiteSchema = buildWebSiteSchema(
  "https://www.aegis-industrial.com",
  "AEGIS Industrial Safety",
  "https://www.aegis-industrial.com/search?q={search_term_string}"
);

const generalFAQSchema = buildFAQSchema([
  {
    question: "What OSHA standards apply to warehouse rack protection?",
    answer: "OSHA 1910.176 requires that storage racks be structurally sound and protected from forklift damage. Our rack protectors meet ANSI MH16.1 standards and are designed to absorb impacts up to 15,000 lbs, helping facilities comply with OSHA requirements for materials handling safety.",
  },
  {
    question: "What is the difference between steel and HDPE warehouse protection products?",
    answer: "Steel protectors (Q345 structural steel) offer maximum impact resistance for high-risk zones like rack columns and loading docks. HDPE (High-Density Polyethylene) protectors provide flexible, energy-absorbing protection with >95% shape memory recovery — ideal for pedestrian zones, narrow aisles, and cold storage facilities rated to -40°C.",
  },
  {
    question: "How long does it take to install AEGIS rack protectors and bollards?",
    answer: "All AEGIS products use bolt-on installation — no welding or rack disassembly required. A typical steel column guard installs in under 2 minutes per unit. A complete warehouse protection package can be deployed in a single shift without disrupting operations.",
  },
  {
    question: "What is the lead time for custom safety barriers and bollards?",
    answer: "Standard products ship within 15-25 days. Custom dimensions and colors undergo 48-hour engineering review, with sampling in 7 days. Large-volume OEM orders for overseas fulfillment centers (Amazon FBA, 3PL hubs) typically ship FCL from Ningbo/Shanghai within 25-35 days door-to-door to US West Coast.",
  },
  {
    question: "Are AEGIS products suitable for cold storage and freezer warehouses?",
    answer: "Yes. Our HDPE bollards and rack guards are rated for continuous operation from -40°C to +80°C without embrittlement. Our hot-dip galvanized steel products are tested to C5-M marine corrosion standards for use in cold chain and freezer environments.",
  },
]);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: renderJSONLD(orgSchema) }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: renderJSONLD(websiteSchema) }}
        />
        {/* Global FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: renderJSONLD(generalFAQSchema) }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-[#EAEAEA] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
