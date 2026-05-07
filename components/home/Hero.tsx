'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Star, Clock } from 'lucide-react';
import { heroEntranceVariants, heroItemVariants } from '@/style/animations';
import { HERO } from '@/static/homeContent';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F1C2E] min-h-[90vh] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A5C] via-[#0F1C2E] to-[#0F1C2E]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF6B2C]/10 to-transparent" />

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#FF6B2C]/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#2D6A9F]/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={heroEntranceVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={heroItemVariants} className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF6B2C]/20 text-[#FF6B2C] text-sm font-medium border border-[#FF6B2C]/30 select-none">
              <Star size={12} className="pointer-events-none" />
              Über 70 Jahre Ausbildungserfahrung
            </span>
          </motion.div>

          <motion.h1
            variants={heroItemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-montserrat text-white leading-tight mb-6"
          >
            {HERO.headline}
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
            className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl"
          >
            {HERO.subtext}
          </motion.p>

          <motion.div
            variants={heroItemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FF6B2C] hover:bg-[#E55A1B] text-white font-semibold text-base transition-all cursor-pointer select-none hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="pointer-events-none">{HERO.cta}</span>
              <ArrowRight size={18} className="pointer-events-none" />
            </Link>
            <Link
              href="/fuehrerscheinklassen"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 text-white font-medium text-base transition-all cursor-pointer select-none hover:bg-white/5"
            >
              <span className="pointer-events-none">Führerscheinklassen</span>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={heroItemVariants}
            className="flex flex-wrap gap-6 mt-12"
          >
            {[
              { icon: Shield, text: 'TÜV-zertifiziert' },
              { icon: Star, text: '4.9 / 5 Bewertung' },
              { icon: Clock, text: 'Kurse ab Montag' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/60 text-sm select-none">
                <Icon size={16} className="text-[#FF6B2C] pointer-events-none" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#F8FAFB" />
        </svg>
      </div>
    </section>
  );
}
