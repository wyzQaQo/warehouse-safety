export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  specs: string[];
  applications: string[];
  image: string;
  category: string;
  features: { label: string; value: string }[];
}

export const products: Product[] = [
  // ==========================================
  // LINE 1: RACK PROTECTOR
  // ==========================================
  {
    id: "steel-rack-column-guards",
    name: "Heavy-Duty Steel Rack Column Guards",
    tagline: "OSHA-Compliant Forklift Impact Protection for Pallet Rack Uprights",
    description:
      "Engineered from 8-12mm Q345 structural steel with full-penetration welds and hot-dip galvanized finish. Designed to absorb multi-ton forklift impacts and prevent catastrophic rack collapse. Compatible with Teardrop, Interlake, Ridg-U-Rak, and all major pallet rack systems. Bolt-on installation — no welding, no rack disassembly required.",
    specs: [
      "Material: Q235 / Q345 Structural Steel",
      "Thickness: 6mm / 8mm / 10mm / 12mm",
      "Finish: Hot-Dip Galvanized ASTM A123 / Powder Coat Yellow",
      "Height: 300mm — 1200mm (custom available)",
      "Base Plate: 10mm with 4x M16 Anchor Bolts",
      "Impact Rating: 15,000 lbs @ 5 mph",
      "Compliance: OSHA 1910.176, ANSI MH16.1, ISO 9001",
    ],
    applications: [
      "Amazon FBA Mega-Distribution Centers",
      "Cold Storage & Freezer Warehouses",
      "Automotive Parts DC (Heavy Pallet Loads)",
      "3PL Cross-Dock Logistics Hubs",
      "Big-Box Retail Distribution Centers",
    ],
    image: "https://picsum.photos/seed/steel-rack-guard/800/600",
    category: "Rack Protector",
    features: [
      { label: "Impact Rating", value: "15,000 lbs" },
      { label: "Steel Grade", value: "Q345 Structural" },
      { label: "Corrosion", value: "C5-M Marine Rated" },
      { label: "Install Time", value: "<2 min per guard" },
    ],
  },
  {
    id: "hdpe-rack-end-guards",
    name: "HDPE Shock-Absorbing Rack End Guards",
    tagline: "Flexible Impact Protection with Memory-Return Technology for Rack Legs",
    description:
      "Manufactured from 100% virgin PE100-grade HDPE with 5% carbon black UV stabilization. Proprietary double-wall corrugated core absorbs impact energy through controlled deformation and returns to original shape within seconds. Universal bolt-on bracket fits 90%+ rack brands. Ideal for narrow aisles and high-traffic pick zones.",
    specs: [
      "Material: Virgin HDPE PE100 + Carbon Black UV",
      "Wall Construction: Double-Wall Corrugated Core",
      "Height: 300mm / 450mm / 600mm",
      "Buffer Layer: 25mm Shock-Absorbing PU Insert",
      "Operating Temperature: -40°C to +80°C",
      "Impact Recovery: >95% Shape Retention",
      "Mounting: Universal 4x M16 Bolt Pattern",
      "Color: Safety Yellow / Orange / Custom RAL",
    ],
    applications: [
      "Selective Pallet Rack Aisle Entry",
      "Drive-In / Drive-Through Rack Systems",
      "Push-Back Rack Upright Protection",
      "Cantilever Rack Leg Guards",
      "Narrow Aisle & VNA Warehouse Configurations",
    ],
    image: "https://picsum.photos/seed/hdpe-rack-guard/800/600",
    category: "Rack Protector",
    features: [
      { label: "Shape Recovery", value: ">95%" },
      { label: "Temp Range", value: "-40°C to +80°C" },
      { label: "UV Life", value: "15+ Years Outdoor" },
      { label: "Rack Compatibility", value: "90%+ Brands" },
    ],
  },

  // ==========================================
  // LINE 2: WAREHOUSE BARRIER
  // ==========================================
  {
    id: "modular-steel-barriers",
    name: "Modular Steel Safety Barrier System",
    tagline: "Configurable Heavy-Duty Perimeter Protection for Warehouse Traffic",
    description:
      "100mm x 100mm x 5mm heavy-wall steel tube barrier system with 8-bolt flange joint connectors. Configure single, double, or triple rail heights. Hot-dip galvanized with optional powder coat finish. Interlocking base plates create continuous protection runs without gaps. Exceeds PAS 13 safety barrier testing standards with 20,000 Joule impact rating.",
    specs: [
      "Tube Profile: 100mm x 100mm x 5mm Steel SHS",
      "Rail Configuration: Single / Double / Triple (500mm-1500mm)",
      "Module Length: 1,500mm / 2,000mm / 2,500mm",
      "Connector: 8-Bolt Flange Joint System",
      "Base Plate: 250mm x 250mm x 12mm Steel",
      "Impact Rating: 20,000 Joules (PAS 13 Tested)",
      "Finish: Hot-Dip Galvanized + Optional RAL Powder Coat",
      "Surface Mount or Cast-In Options Available",
    ],
    applications: [
      "Loading Dock Edge Protection & Fall Prevention",
      "Mezzanine Perimeter Guarding",
      "Forklift Traffic Lane Separation",
      "Pedestrian Walkway Demarcation",
      "Machine & Hazardous Area Guarding",
    ],
    image: "https://picsum.photos/seed/modular-barrier-system/800/600",
    category: "Warehouse Barrier",
    features: [
      { label: "Impact Energy", value: "20,000 Joules" },
      { label: "Rail Heights", value: "1 / 2 / 3 Rails" },
      { label: "Module Span", value: "Up to 2.5m" },
      { label: "Certification", value: "PAS 13 + OSHA" },
    ],
  },
  {
    id: "dock-barrier-systems",
    name: "Loading Dock Barrier & Bumper Systems",
    tagline: "Heavy-Duty Dock Edge Protection & Vehicle Restraint Safety",
    description:
      "Complete loading dock safety package including laminated rubber dock bumpers (60 Shore A), steel-backed wheel chocks, and dock edge barrier rails. Engineered for repeated trailer impacts at high-volume distribution centers. Non-slip base with reflective hi-viz markings for 24/7 operations. OSHA-compliant trailer restraint safety.",
    specs: [
      "Dock Bumper: Laminated Natural Rubber (60 Shore A)",
      "Bumper Backing: 6mm Steel Plate, Zinc Plated",
      "Bumper Thickness: 100mm / 200mm / 300mm",
      "Bumper Length: 300mm / 450mm / 600mm",
      "Wheel Chock: Urethane-Rubber Composite, 8kg",
      "Barrier Rail: 100x100x5mm Steel, HDG",
      "Visibility: Retro-Reflective Hi-Viz Strips",
      "Compliance: OSHA 1910.176, ANSI MH30.3",
    ],
    applications: [
      "E-Commerce Fulfillment Center Docks",
      "Cross-Dock Logistics Transfer Stations",
      "Cold Chain Distribution Loading Bays",
      "Manufacturing Plant Receiving Docks",
      "Fleet Maintenance & Service Facilities",
    ],
    image: "https://picsum.photos/seed/dock-barrier-system/800/600",
    category: "Warehouse Barrier",
    features: [
      { label: "Rubber Hardness", value: "60 Shore A" },
      { label: "Bumper Thickness", value: "Up to 300mm" },
      { label: "Steel Backing", value: "6mm Zinc-Plated" },
      { label: "Visibility", value: "Retro-Reflective" },
    ],
  },

  // ==========================================
  // LINE 3: SAFETY BOLLARD
  // ==========================================
  {
    id: "hdpe-flexible-bollards",
    name: "HDPE Flexible Safety Bollards",
    tagline: "Energy-Absorbing Bollards with 95%+ Shape Memory Recovery",
    description:
      "Manufactured from 100% virgin HDPE (PE100 grade) with proprietary energy-absorption chamber design. Deforms on impact to dissipate kinetic energy, then returns to original shape within seconds. UV-stabilized with 5% carbon black for 15+ year outdoor service life. Ideal for loading docks, pedestrian zones, rack aisle entries, and high-traffic warehouse corridors.",
    specs: [
      "Material: Virgin HDPE, PE100 Grade",
      "Diameter: 100mm / 150mm / 200mm",
      "Height Above Ground: 900mm / 1100mm / 1300mm",
      "Wall Thickness: 8mm — 15mm",
      "UV Protection: 5% Carbon Black (ISO 4892)",
      "Operating Temperature: -40°C to +80°C",
      "Impact Recovery: >95% Shape Retention",
      "Mounting: Surface-Mount / Core-Drilled / Bolt-Down",
      "Color: Safety Yellow / Orange / Custom RAL",
    ],
    applications: [
      "Loading Dock Perimeters & Bay Separation",
      "Pedestrian Walkway & Forklift Lane Segregation",
      "Pallet Rack Aisle Entry Protection",
      "Cold Chain & Freezer Facility Traffic Control",
      "Manufacturing Plant Floor Demarcation",
    ],
    image: "https://picsum.photos/seed/hdpe-flex-bollard/800/600",
    category: "Safety Bollard",
    features: [
      { label: "Shape Recovery", value: ">95%" },
      { label: "Diameter", value: "100-200mm" },
      { label: "UV Service Life", value: "15+ Years" },
      { label: "Install Method", value: "Surface / Core / Bolt" },
    ],
  },
  {
    id: "steel-safety-bollards",
    name: "Steel Pipe Safety Bollards",
    tagline: "Fixed Heavy-Duty Bollards for Maximum Asset & Perimeter Protection",
    description:
      "Heavy-wall structural steel pipe bollards with concrete-filled core for maximum rigidity and impact resistance. Hot-dip galvanized with optional powder coat finish in safety yellow or custom RAL colors. Ideal for protecting building columns, electrical panels, fire hydrants, mezzanine supports, and critical infrastructure from forklift strikes.",
    specs: [
      "Pipe: 114mm / 168mm OD, Schedule 40 / 80 Steel",
      "Wall Thickness: 6mm — 11mm",
      "Core Fill: Reinforced Concrete for Added Mass",
      "Height Above Ground: 900mm / 1100mm / 1300mm",
      "Embedment Depth: 300mm — 500mm Below Grade",
      "Finish: Hot-Dip Galvanized + Powder Coat",
      "Cap Style: Domed / Flat / Removable",
      "Color: Safety Yellow / Orange / Custom RAL",
      "Optional: Hi-Viz Reflective Tape Banding",
    ],
    applications: [
      "Building Column & Structural Protection",
      "Electrical Panel & Fire Hydrant Guarding",
      "Mezzanine Support Column Shielding",
      "Overhead Door & Dock Leveler Protection",
      "Outdoor Perimeter & Gate Post Bollards",
    ],
    image: "https://picsum.photos/seed/steel-bollard/800/600",
    category: "Safety Bollard",
    features: [
      { label: "Pipe OD", value: "114mm / 168mm" },
      { label: "Wall Thickness", value: "Up to 11mm" },
      { label: "Core Fill", value: "Reinforced Concrete" },
      { label: "Embedment", value: "Up to 500mm" },
    ],
  },
];

export const productCategories = [
  {
    name: "Rack Protector",
    slug: "rack-protector",
    description:
      "Heavy-duty steel and HDPE guards for pallet rack uprights, columns, and rack end protection. OSHA & ANSI compliant. Bolt-on installation for all major rack brands.",
    count: 2,
    icon: "RP",
    heroImage: "https://picsum.photos/seed/rack-protector-cat/800/400",
    keySpecs: ["15,000 lbs Impact", "Q345 Steel / PE100 HDPE", "OSHA 1910.176", "Bolt-On Install"],
  },
  {
    name: "Warehouse Barrier",
    slug: "warehouse-barrier",
    description:
      "Modular steel barrier systems, dock bumpers, and perimeter guarding for warehouse traffic management. PAS 13 certified. Configurable single/double/triple rail heights.",
    count: 2,
    icon: "WB",
    heroImage: "https://picsum.photos/seed/warehouse-barrier-cat/800/400",
    keySpecs: ["20,000 J Impact", "1-3 Rail Config", "PAS 13 Certified", "Modular Design"],
  },
  {
    name: "Safety Bollard",
    slug: "safety-bollard",
    description:
      "Flexible HDPE and fixed steel bollards for asset protection, traffic separation, and perimeter security. UV-stabilized for 15+ year outdoor service life.",
    count: 2,
    icon: "SB",
    heroImage: "https://picsum.photos/seed/safety-bollard-cat/800/400",
    keySpecs: ["95%+ Recovery", "PE100 / Schedule 80", "UV 15+ Years", "Surface & Embedded"],
  },
];

// ==========================================
// CUSTOMER SEGMENTS
// ==========================================
export const customerSegments = [
  {
    id: "overseas-warehouse",
    name: "海外仓 / Overseas Fulfillment Centers",
    tagline: "Amazon FBA, 3PL & Cross-Border E-Commerce Warehouses",
    description:
      "Overseas fulfillment centers — especially Amazon FBA Prep Centers, third-party logistics (3PL) warehouses, and cross-border e-commerce hubs in North America, Europe, and the Middle East — operate 24/7 with intense forklift traffic. A single rack collapse from a forklift strike can shut down operations, destroy inventory, and cause serious personnel injury. Our rack protectors and safety bollards are purpose-built for these high-velocity, high-volume environments.",
    painPoints: [
      "Forklifts operating 24/7 in narrow aisles — collision probability is extremely high",
      "Rack collapse = OSHA citation + inventory loss + fulfillment shutdown",
      "Local U.S. / EU distributors charge $150-$400 per steel column guard — massive margin opportunity for direct sourcing",
      "Need bolt-on, no-weld products that install during active operations without downtime",
      "Must comply with OSHA 1910.176 and local warehouse safety regulations",
    ],
    recommendedProducts: ["steel-rack-column-guards", "hdpe-rack-end-guards", "hdpe-flexible-bollards", "modular-steel-barriers"],
    stats: [
      { value: "65%", label: "of warehouse injuries involve forklift-material collisions" },
      { value: "$38K", label: "average OSHA fine per rack-safety violation" },
      { value: "72hrs", label: "typical downtime after a rack collapse incident" },
    ],
    image: "https://picsum.photos/seed/overseas-warehouse/800/500",
  },
  {
    id: "logistics-center",
    name: "物流中心 / Logistics & Distribution Centers",
    tagline: "Cross-Dock, Cold Chain & High-Throughput Distribution Hubs",
    description:
      "Modern logistics centers — from cross-dock transfer stations to temperature-controlled cold chain facilities and last-mile delivery hubs — face unique safety challenges. High trailer turnover at loading docks causes repeated bumper impacts. Pedestrian-forklift interaction zones require clear physical separation. Cold storage environments demand products rated for sub-zero temperatures without embrittlement. Our warehouse barriers and dock safety systems are engineered specifically for logistics-intensive operations.",
    painPoints: [
      "Loading docks take repeated trailer impacts — cheap bumpers fail within months",
      "Pedestrian-forklift shared zones create liability exposure without physical barriers",
      "Cold storage (-25°C) causes standard plastics to shatter — need HDPE rated to -40°C",
      "Cross-dock facilities need modular, reconfigurable barrier layouts as operations change",
      "Insurance underwriters increasingly require PAS 13-rated barrier systems for premium discounts",
    ],
    recommendedProducts: ["modular-steel-barriers", "dock-barrier-systems", "hdpe-flexible-bollards", "steel-safety-bollards"],
    stats: [
      { value: "35%", label: "of warehouse fatalities occur at loading docks" },
      { value: "$150K+", label: "average cost per forklift-pedestrian incident" },
      { value: "PAS 13", label: "standard now required by major insurers for coverage" },
    ],
    image: "https://picsum.photos/seed/logistics-center/800/500",
  },
];
