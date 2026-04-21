'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { PropertyCard } from '@/components/PropertyCard';
import { properties } from '@/lib/dummy-data';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  const filteredProperties = selectedCategory
    ? properties.filter((p) => p.category === selectedCategory)
    : properties;

  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />

      {/* Properties Sections */}
      <section className="py-6 md:py-8 space-y-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Varanasi */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 cursor-pointer group">
                <h2 className="text-[22px] font-semibold text-foreground tracking-tight">Popular homes in Varanasi</h2>
                <span className="text-foreground transition-transform group-hover:translate-x-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] hover:scale-[1.04] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] hover:scale-[1.04] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>

            <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 sm:pb-6 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
              {filteredProperties.slice(0, 6).map((property, index) => (
                <div key={property.id} className="min-w-[85vw] sm:min-w-[45vw] md:min-w-[calc(33.333%-16px)] lg:min-w-[calc(25%-18px)] snap-start shrink-0">
                  <PropertyCard 
                    property={{...property, location: {...property.location, city: 'Varanasi'}}} 
                    priority={index < 4}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Kolkata */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 cursor-pointer group">
                <h2 className="text-[22px] font-semibold text-foreground tracking-tight">Available in Kolkata this weekend</h2>
                <span className="text-foreground transition-transform group-hover:translate-x-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] hover:scale-[1.04] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] hover:scale-[1.04] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>

            <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 sm:pb-6 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
              {filteredProperties.slice(6, 12).map((property, index) => (
                <div key={property.id} className="min-w-[85vw] sm:min-w-[45vw] md:min-w-[calc(33.333%-16px)] lg:min-w-[calc(25%-18px)] snap-start shrink-0">
                  <PropertyCard 
                    property={{...property, location: {...property.location, city: 'Kolkata'}}} 
                    priority={false}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {/* About */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    How Havenly works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Investors
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Report a Concern
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Get Help
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2025 Havenly, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
