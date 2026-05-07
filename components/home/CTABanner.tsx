'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { fadeUpVariants } from '@/style/animations';
import { CTA_BANNER } from '@/static/homeContent';
import { CONTACT } from '@/static/constants';

interface Props {
  headline?: string;
  subtext?: string;
  cta?: string;
}

export default function CTABanner({ headline, subtext, cta }: Props) {
  const h = headline ?? CTA_BANNER.headline;
  const s = subtext ?? CTA_BANNER.subtext;
  const c = cta ?? CTA_BANNER.cta;

  return (
    <section className="bg-[#1B3A5C] py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A5C] to-[#0F1C2E]" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF6B2C]/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-white mb-4">{h}</h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">{s}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF6B2C] hover:bg-[#E55A1B] text-white font-semibold text-base transition-all cursor-pointer select-none hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="pointer-events-none">{c}</span>
              <ArrowRight size={18} className="pointer-events-none" />
            </Link>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 text-white font-medium text-base transition-all cursor-pointer select-none hover:bg-white/5"
            >
              <Phone size={16} className="pointer-events-none" />
              <span className="pointer-events-none">{CONTACT.phone}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
