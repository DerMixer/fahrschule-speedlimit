'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Calendar, Timer, ArrowRight, CheckCircle } from 'lucide-react';
import { staggerContainer, cardRevealVariants } from '@/style/animations';
import { DEFAULT_INTENSIVKURSE } from '@/static/defaultValues';

interface Props {
  detailed?: boolean;
}

export default function IntensivkurseSection({ detailed = false }: Props) {
  return (
    <section className="bg-[#F8FAFB] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex flex-col items-center gap-2 mb-4">
            <Zap size={28} className="text-[#FF6B2C] pointer-events-none" />
            <h2 className="text-3xl font-bold font-montserrat text-[#1A1A2E]">Intensivkurse</h2>
          </div>
          <p className="text-[#6B7A8D] text-lg max-w-2xl mx-auto">
            Dein Führerschein in nur 21 Tagen – kompakt, effizient und ganzjährig buchbar
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {DEFAULT_INTENSIVKURSE.map((kurs, i) => (
            <motion.div
              key={kurs.name}
              variants={cardRevealVariants}
              custom={i}
              className="bg-white rounded-2xl p-7 shadow-sm border border-[#1B3A5C]/5 hover:shadow-md hover:border-[#FF6B2C]/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF6B2C]/10 flex items-center justify-center mb-5 group-hover:bg-[#FF6B2C]/20 transition-colors">
                <Zap size={20} className="text-[#FF6B2C] pointer-events-none" />
              </div>
              <h3 className="text-lg font-bold font-montserrat text-[#1A1A2E] mb-3">{kurs.name}</h3>
              <p className="text-[#6B7A8D] text-sm leading-relaxed mb-4">{kurs.beschreibung}</p>

              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2 text-sm text-[#6B7A8D]">
                  <Timer size={14} className="text-[#1B3A5C] shrink-0 pointer-events-none" />
                  <span>{kurs.dauer}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7A8D]">
                  <Calendar size={14} className="text-[#1B3A5C] shrink-0 pointer-events-none" />
                  <span>Start: {kurs.start}</span>
                </div>
              </div>

              {detailed && (
                <ul className="space-y-1.5 mb-5">
                  {[
                    'Theorie & Praxis kombiniert',
                    'Persönliche Betreuung',
                    'Online-Lernsystem inklusive',
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs text-[#6B7A8D]">
                      <CheckCircle size={12} className="text-[#22C55E] shrink-0 pointer-events-none" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              <Link
                href="/kontakt"
                className="inline-flex items-center gap-1 text-[#FF6B2C] text-sm font-medium hover:gap-2 transition-all cursor-pointer select-none"
              >
                <span className="pointer-events-none">Platz sichern</span>
                <ArrowRight size={14} className="pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
