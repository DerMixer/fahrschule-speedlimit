'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroEntranceVariants, heroItemVariants } from '@/style/animations';

interface Props {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function MiniHero({ title, subtitle, breadcrumb }: Props) {
  return (
    <section className="relative bg-[#0F1C2E] py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A5C] to-[#0F1C2E]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF6B2C]/8 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={heroEntranceVariants}
          initial="hidden"
          animate="visible"
        >
          {breadcrumb && breadcrumb.length > 0 && (
            <motion.nav variants={heroItemVariants} className="flex items-center gap-2 mb-4 text-sm select-none">
              <Link href="/" className="text-white/50 hover:text-white transition-colors cursor-pointer">
                Startseite
              </Link>
              {breadcrumb.map((crumb) => (
                <span key={crumb.href} className="flex items-center gap-2">
                  <span className="text-white/30">/</span>
                  <span className="text-white/70">{crumb.label}</span>
                </span>
              ))}
            </motion.nav>
          )}

          <motion.h1
            variants={heroItemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat text-white mb-4"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={heroItemVariants}
              className="text-white/70 text-lg max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40L1440 40L1440 10C1200 40 960 0 720 15C480 30 240 0 0 15L0 40Z" fill="#F8FAFB" />
        </svg>
      </div>
    </section>
  );
}
