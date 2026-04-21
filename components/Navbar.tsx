'use client';

import Link from 'next/link';
import { Search, Menu, X, LogOut, LayoutDashboard, Home } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-white h-[80px] flex flex-col justify-center">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-primary">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 1.333c-8.095 0-14.667 6.572-14.667 14.667 0 8.096 6.572 14.667 14.667 14.667s14.667-6.571 14.667-14.667c0-8.095-6.572-14.667-14.667-14.667zm0 2.667c6.636 0 12 5.364 12 12s-5.364 12-12 12-12-5.364-12-12 5.364-12 12-12zM12 9v14h2.667v-6.667h2.666v6.667h2.667V9h-2.667v4.667h-2.666V9H12z"/>
            </svg>
            <span className="hidden text-xl font-bold tracking-tight sm:inline">
              havenly
            </span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 justify-center px-6">
            <div className="flex w-full max-w-[340px] items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 shadow-[0_2px_6px_0_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-sm font-medium pl-2 flex-grow truncate text-foreground">Anywhere</span>
              <span className="h-6 w-[1px] bg-border mx-2"></span>
              <span className="text-sm font-medium flex-grow truncate text-foreground">Any week</span>
              <span className="h-6 w-[1px] bg-border mx-2"></span>
              <span className="text-sm text-muted-foreground mr-2 truncate">Add guests</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shrink-0">
                <Search size={14} className="stroke-[3]" />
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-4 md:flex">
            <Link href="/host">
              <Button variant="ghost" size="sm" className="text-foreground">
                Become a host
              </Button>
            </Link>

            {/* User Menu Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-3 rounded-full border border-border px-3 py-2 hover:shadow-md transition-shadow"
              >
                <Menu size={20} className="text-foreground" />
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <Image
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                    alt="User"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
              </button>

              {/* Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-border bg-white shadow-lg">
                  <Link href="/dashboard" className="block">
                    <button className="w-full px-4 py-2 text-left text-sm font-medium text-foreground hover:bg-muted flex items-center gap-2">
                      <LayoutDashboard size={16} />
                      My Bookings
                    </button>
                  </Link>
                  <Link href="/host" className="block">
                    <button className="w-full px-4 py-2 text-left text-sm font-medium text-foreground hover:bg-muted flex items-center gap-2">
                      <Home size={16} />
                      Host Dashboard
                    </button>
                  </Link>
                  <hr className="my-2 border-border" />
                  <button className="w-full px-4 py-2 text-left text-sm font-medium text-red-600 hover:bg-muted flex items-center gap-2">
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mb-4">
          <div className="flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2">
            <Search size={18} className="text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search..."
              className="border-0 bg-transparent placeholder:text-muted-foreground focus:outline-none focus-visible:ring-0"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <Link href="/dashboard" className="block">
              <button className="w-full px-4 py-2 text-left font-medium text-foreground hover:bg-muted rounded-lg flex items-center gap-2 mb-2">
                <LayoutDashboard size={18} />
                My Bookings
              </button>
            </Link>
            <Link href="/host" className="block">
              <button className="w-full px-4 py-2 text-left font-medium text-foreground hover:bg-muted rounded-lg flex items-center gap-2 mb-2">
                <Home size={18} />
                Host Dashboard
              </button>
            </Link>
            <Link href="/host">
              <Button variant="ghost" size="sm" className="w-full text-foreground justify-start">
                Become a host
              </Button>
            </Link>
            <hr className="my-2 border-border" />
            <button className="w-full px-4 py-2 text-left font-medium text-red-600 hover:bg-muted rounded-lg flex items-center gap-2">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
