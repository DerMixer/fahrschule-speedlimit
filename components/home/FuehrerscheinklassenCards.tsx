'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Car, ArrowRight, CheckCircle, GraduationCap } from 'lucide-react';
import { staggerContainer, cardRevealVariants } from '@/style/animations';
import { FUEHRERSCHEINKLASSEN } from '@/static/services';

interface Props {
  detailed?: boolean;
}

export default function FuehrerscheinklassenCards({ detailed = false }: Props) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap size={28} className="text-[#1B3A5C] pointer-events-none" />
            <h2 className="text-3xl font-bold font-montserrat text-[#1A1A2E]">Führerscheinklassen</h2>
          </div>
          <p className="text-[#6B7A8D] text-lg max-w-2xl mx-auto">
            Wähle die passende Klasse für deine Ziele – wir bilden dich flexibel und professionell aus
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FUEHRERSCHEINKLASSEN.map((item, i) => (
            <motion.div
              key={`${item.klasse}-${item.label}`}
              variants={cardRevealVariants}
              custom={i}
              className="bg-[#F8FAFB] rounded-2xl p-6 border border-[#1B3A5C]/5 hover:border-[#FF6B2C]/30 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold font-montserrat text-[#1B3A5C] group-hover:text-[#FF6B2C] transition-colors">
                  {item.klasse}
                </span>
                <Car size={20} className="text-[#FF6B2C] pointer-events-none" />
              </div>
              <h3 className="text-base font-semibold text-[#1A1A2E] mb-2">{item.label}</h3>
              <p className="text-[#6B7A8D] text-sm leading-relaxed mb-4">{item.beschreibung}</p>

              {detailed && item.details && (
                <ul className="space-y-2 mb-4">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-[#6B7A8D]">
                      <CheckCircle size={14} className="text-[#22C55E] mt-0.5 shrink-0 pointer-events-none" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}

              <Link
                href="/kontakt"
                className="inline-flex items-center gap-1 text-[#FF6B2C] text-sm font-medium hover:gap-2 transition-all cursor-pointer select-none"
              >
                <span className="pointer-events-none">Jetzt anfragen</span>
                <ArrowRight size={14} className="pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
