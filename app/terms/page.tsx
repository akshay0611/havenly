import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { TermsContent } from './TermsContent';

export const metadata: Metadata = {
  title: 'Terms of Service | Havenly',
  description:
    "Read Havenly's Terms of Service, including booking policies, payments, cancellations, privacy, and platform rules.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <TermsContent />

      <footer className="mt-16 border-t border-border bg-[#F7F7F7] pt-12 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-12">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground">Support</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:underline">Help Centre</Link></li>
                <li><Link href="#" className="hover:underline">AirCover</Link></li>
                <li><Link href="#" className="hover:underline">Anti-discrimination</Link></li>
                <li><Link href="#" className="hover:underline">Disability support</Link></li>
                <li><Link href="#" className="hover:underline">Cancellation options</Link></li>
                <li><Link href="#" className="hover:underline">Report neighbourhood concern</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground">Hosting</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:underline">Havenly your home</Link></li>
                <li><Link href="#" className="hover:underline">AirCover for Hosts</Link></li>
                <li><Link href="#" className="hover:underline">Hosting resources</Link></li>
                <li><Link href="#" className="hover:underline">Community forum</Link></li>
                <li><Link href="#" className="hover:underline">Hosting responsibly</Link></li>
                <li><Link href="#" className="hover:underline">Join a free hosting class</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground">Havenly</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:underline">Newsroom</Link></li>
                <li><Link href="#" className="hover:underline">New features</Link></li>
                <li><Link href="#" className="hover:underline">Careers</Link></li>
                <li><Link href="#" className="hover:underline">Investors</Link></li>
                <li><Link href="#" className="hover:underline">Havenly.org emergency stays</Link></li>
              </ul>
            </div>
          </div>

          <hr className="mb-6 border-black/5" />

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-foreground">
              <span>(c) 2026 Havenly, Inc.</span>
              <span>·</span>
              <Link href="#" className="hover:underline">Privacy</Link>
              <span>·</span>
              <Link href="/terms" className="hover:underline">Terms</Link>
              <span>·</span>
              <Link href="#" className="hover:underline">Sitemap</Link>
              <span>·</span>
              <Link href="#" className="hover:underline">Company details</Link>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex cursor-pointer items-center gap-4 text-sm font-semibold text-foreground">
                <span className="flex items-center gap-2 hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
                  English (IN)
                </span>
                <span className="hover:underline">INR</span>
              </div>
              <div className="flex items-center gap-3">
                <Link href="#" className="text-foreground transition hover:opacity-80" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></Link>
                <Link href="#" className="text-foreground transition hover:opacity-80" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg></Link>
                <Link href="#" className="text-foreground transition hover:opacity-80" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
