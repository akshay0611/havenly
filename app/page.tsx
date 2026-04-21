'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { CategoryFilter } from '@/components/CategoryFilter';
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

      {/* Category Filter */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Properties Grid */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredProperties.length > 0 ? (
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProperties.map((property, index) => (
                <PropertyCard 
                  key={property.id} 
                  property={property} 
                  priority={index < 8}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  No properties found
                </h2>
                <p className="text-muted-foreground">
                  Try adjusting your search or selecting a different category.
                </p>
              </div>
            </div>
          )}
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
