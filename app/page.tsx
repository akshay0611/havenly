'use client';

import { useState, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { PropertyCard } from '@/components/PropertyCard';
import { properties, Property } from '@/lib/dummy-data';
import Image from 'next/image';

interface PropertySectionProps {
  title: string;
  items: Property[];
  locationName: string;
}

function PropertySection({ title, items, locationName }: PropertySectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 cursor-pointer group">
          <h2 className="text-[22px] font-semibold text-foreground tracking-tight">{title}</h2>
          <span className="text-foreground transition-transform group-hover:translate-x-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button 
            onClick={() => scroll('left')}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm hover:shadow-md hover:scale-[1.04] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm hover:shadow-md hover:scale-[1.04] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 sm:pb-6 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {items.map((property, index) => (
          <div key={property.id} className="min-w-[85vw] sm:min-w-[45vw] md:min-w-[calc(33.333%-16px)] lg:min-w-[calc(25%-18px)] snap-start shrink-0">
            <PropertyCard 
              property={{...property, location: {...property.location, city: locationName}}} 
              priority={index < 4}
            />
          </div>
        ))}
        
        {/* See All Card */}
        <div className="min-w-[85vw] sm:min-w-[45vw] md:min-w-[calc(33.333%-16px)] lg:min-w-[calc(25%-18px)] snap-start shrink-0 flex items-center justify-center pl-2">
          <div className="w-full aspect-[20/19] rounded-[14px] border border-black/5 shadow-[0_6px_16px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center cursor-pointer group hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all bg-white relative overflow-hidden p-6 mx-2">
            <div className="relative w-40 h-32 mb-6">
              {/* Back Image (Left) */}
              <div className="absolute top-2 left-2 w-20 h-20 rounded-xl overflow-hidden border-2 border-white shadow-lg -rotate-[15deg] z-10 transition-transform group-hover:-translate-x-1">
                <Image src={items[0]?.image || ''} alt="See all" fill className="object-cover" />
              </div>
              {/* Back Image (Right) */}
              <div className="absolute top-2 right-2 w-20 h-20 rounded-xl overflow-hidden border-2 border-white shadow-lg rotate-[15deg] z-10 transition-transform group-hover:translate-x-1">
                <Image src={items[1]?.image || ''} alt="See all" fill className="object-cover" />
              </div>
              {/* Front Image (Center) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-xl overflow-hidden border-2 border-white shadow-xl rotate-0 z-20 transition-transform group-hover:scale-105">
                <Image src={items[2]?.image || ''} alt="See all" fill className="object-cover" />
              </div>
            </div>
            <span className="text-[17px] font-semibold text-foreground group-hover:underline">See all</span>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <section className="py-6 md:py-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <PropertySection 
            title="Popular homes in Varanasi" 
            items={properties.slice(0, 6)} 
            locationName="Varanasi" 
          />
          <PropertySection 
            title="Available in Kolkata this weekend" 
            items={properties.slice(2, 8)} 
            locationName="Kolkata" 
          />
          <PropertySection 
            title="Stay in Gautam Buddha Nagar" 
            items={properties.slice(4, 9)} 
            locationName="Gautam Buddha Nagar" 
          />
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
                <li><a href="#" className="hover:text-foreground transition">How Havenly works</a></li>
                <li><a href="#" className="hover:text-foreground transition">Newsroom</a></li>
                <li><a href="#" className="hover:text-foreground transition">Investors</a></li>
              </ul>
            </div>
            {/* Community */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Community Guidelines</a></li>
                <li><a href="#" className="hover:text-foreground transition">Report a Concern</a></li>
                <li><a href="#" className="hover:text-foreground transition">Get Help</a></li>
              </ul>
            </div>
            {/* Support */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">© 2025 Havenly, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
