"use client";

import Link from "next/link";
import { useState } from "react";
import { products, productCategories } from "@/data/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const selectedCatData = selectedCategory !== "all"
    ? productCategories.find((c) => c.name === selectedCategory)
    : null;

  return (
    <main className="overflow-x-hidden w-full max-w-full">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center border-b border-[#2A2A2A]">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-16 w-full relative z-10">
          <div className="section-label mb-4">PRODUCT CATALOG</div>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-black leading-[0.9] tracking-[-0.04em] mb-3">
            THREE LINES.
            <span className="text-[#E61919]"> COMPLETE</span>
            <br />
            PROTECTION.
          </h1>

          {/* Three Line Pills */}
          <div className="flex flex-wrap gap-3 mb-4">
            {productCategories.map((cat) => (
              <div key={cat.slug} className="flex items-center gap-2 bg-[#161616] border border-[#2A2A2A] px-3 py-1.5">
                <span className="font-mono text-[10px] text-[#E61919] font-bold">{cat.icon}</span>
                <span className="font-mono text-[10px] text-[#9A9A9A] tracking-[0.1em]">{cat.name.toUpperCase()} ({cat.count})</span>
              </div>
            ))}
          </div>

          <p className="font-mono text-sm text-[#9A9A9A] max-w-[600px]">
            EVERY PRODUCT ENGINEERED TO WITHSTAND REAL-WORLD IMPACT SCENARIOS. MATERIAL CERTIFICATIONS WITH EVERY ORDER. BOLT-ON INSTALLATION — NO DOWNTIME.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-[#2A2A2A] bg-[#121212] sticky top-[72px] z-40">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`font-mono text-[10px] tracking-[0.15em] px-4 py-2 border transition-colors ${
              selectedCategory === "all"
                ? "border-[#E61919] bg-[#E61919] text-white"
                : "border-[#2A2A2A] text-[#9A9A9A] hover:border-[#E61919]"
            }`}
          >
            ALL ({products.length})
          </button>
          {productCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.name)}
              className={`font-mono text-[10px] tracking-[0.15em] px-4 py-2 border transition-colors ${
                selectedCategory === cat.name
                  ? "border-[#E61919] bg-[#E61919] text-white"
                  : "border-[#2A2A2A] text-[#9A9A9A] hover:border-[#E61919]"
              }`}
            >
              {cat.icon} {cat.name.toUpperCase()} ({cat.count})
            </button>
          ))}
        </div>
      </section>

      {/* Category Hero (when filtered) */}
      {selectedCatData && (
        <section className="border-b border-[#2A2A2A] bg-[#121212]">
          <div className="max-w-[1400px] mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-64 h-40 shrink-0 border border-[#2A2A2A] overflow-hidden relative">
                <img
                  src={selectedCatData.heroImage}
                  alt={selectedCatData.name}
                  className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]" />
                <div className="absolute bottom-3 left-3 font-mono text-[#E61919] font-black text-lg">{selectedCatData.icon}</div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-black tracking-[-0.03em] mb-3">
                  {selectedCatData.name.toUpperCase()}
                </h2>
                <p className="font-mono text-xs text-[#9A9A9A] leading-relaxed mb-4 max-w-[600px]">
                  {selectedCatData.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedCatData.keySpecs.map((spec) => (
                    <span key={spec} className="font-mono text-[8px] tracking-[0.15em] text-[#E61919] border border-[#E61919]/30 bg-[#E61919]/5 px-2 py-1">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="font-mono text-[#555] text-lg mb-2">NO PRODUCTS FOUND</div>
              <p className="font-mono text-xs text-[#555]">Try selecting a different category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="card-industrial group flex flex-col">
                  {/* Image */}
                  <div className="relative h-52 mb-5 overflow-hidden shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-500 group-hover:scale-105 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="font-mono text-[9px] tracking-[0.2em] text-[#E61919] bg-[#0A0A0A]/90 px-2 py-1 border border-[#E61919]/30">
                        {product.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-base font-black tracking-[-0.03em] mb-2 group-hover:text-[#E61919] transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <p className="font-mono text-[10px] text-[#9A9A9A] leading-relaxed mb-4 line-clamp-3">
                      {product.description}
                    </p>

                    {/* Key Specs Strip */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.features.slice(0, 4).map((f) => (
                        <span key={f.label} className="font-mono text-[7px] tracking-[0.1em] text-[#555] bg-[#0A0A0A] px-2 py-0.5 border border-[#2A2A2A]">
                          {f.label}: {f.value}
                        </span>
                      ))}
                    </div>

                    {/* Applications */}
                    <div className="mb-5">
                      <div className="font-mono text-[7px] tracking-[0.15em] text-[#555] mb-1.5">APPLICATIONS</div>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.slice(0, 3).map((app) => (
                          <span key={app} className="font-mono text-[7px] text-[#9A9A9A] border border-[#2A2A2A] px-1.5 py-0.5">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto flex gap-3">
                      <Link
                        href="/contact"
                        className="flex-1 text-center btn-industrial btn-primary text-[10px] px-3 py-2"
                      >
                        REQUEST QUOTE
                      </Link>
                      <button className="btn-industrial text-[10px] px-3 py-2">
                        DATASHEET
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 border-t border-[#2A2A2A] bg-[#121212]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <div className="section-label inline-block mb-4">CUSTOM REQUIREMENTS</div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-black tracking-[-0.03em] mb-4">
            NEED CUSTOM <span className="text-[#E61919]">DIMENSIONS?</span>
          </h2>
          <p className="font-mono text-sm text-[#9A9A9A] max-w-[500px] mx-auto mb-6">
            OUR ENGINEERING TEAM CAN MODIFY ANY PRODUCT ACROSS ALL THREE LINES TO YOUR EXACT WAREHOUSE SPECIFICATIONS. SEND US YOUR LAYOUT DRAWINGS.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {productCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.name)}
                className="font-mono text-[9px] tracking-[0.15em] text-[#9A9A9A] border border-[#2A2A2A] px-4 py-2 hover:border-[#E61919] hover:text-[#E61919] transition-colors"
              >
                {cat.icon} {cat.name.toUpperCase()}
              </button>
            ))}
          </div>
          <Link href="/contact" className="btn-industrial btn-primary">
            CONTACT ENGINEERING <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
