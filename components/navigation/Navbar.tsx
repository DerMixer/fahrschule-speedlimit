'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE_NAME } from '@/static/constants';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#1B3A5C]/10 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 select-none cursor-pointer">
          <span className="text-xl font-bold font-montserrat text-[#1B3A5C]">{SITE_NAME}</span>
          <span className="text-xs font-semibold bg-[#FF6B2C] text-white px-2 py-0.5 rounded-full select-none">Kiel</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 select-none cursor-pointer pointer-events-auto',
                    active
                      ? 'text-[#FF6B2C] bg-[#FF6B2C]/10'
                      : 'text-[#1A1A2E] hover:text-[#1B3A5C] hover:bg-[#1B3A5C]/5',
                  ].join(' ')}
                >
                  <span className="pointer-events-none">{link.label}</span>
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#FF6B2C] rounded-full"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/kontakt"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF6B2C] text-white text-sm font-semibold select-none cursor-pointer hover:bg-[#E55A1B] transition-colors"
        >
          <span className="pointer-events-none">Jetzt anmelden</span>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-[#1B3A5C] hover:bg-[#1B3A5C]/10 transition-colors cursor-pointer select-none"
          aria-label="Menü öffnen"
        >
          {mobileOpen ? (
            <X size={22} className="pointer-events-none" />
          ) : (
            <Menu size={22} className="pointer-events-none" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[#1B3A5C]/10 bg-white overflow-hidden"
          >
            <ul className="flex flex-col px-4 py-3 gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={[
                        'block px-4 py-3 rounded-lg text-sm font-medium transition-colors select-none cursor-pointer',
                        active
                          ? 'text-[#FF6B2C] bg-[#FF6B2C]/10'
                          : 'text-[#1A1A2E] hover:bg-[#1B3A5C]/5',
                      ].join(' ')}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg bg-[#FF6B2C] text-white text-sm font-semibold text-center select-none cursor-pointer"
                >
                  Jetzt anmelden
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
