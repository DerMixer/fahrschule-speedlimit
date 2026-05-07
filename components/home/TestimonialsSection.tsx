'use client';

import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';
import { staggerContainer, cardRevealVariants } from '@/style/animations';
import { TESTIMONIALS } from '@/static/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F8FAFB] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare size={28} className="text-[#1B3A5C] pointer-events-none" />
            <h2 className="text-3xl font-bold font-montserrat text-[#1A1A2E]">Das sagen unsere Schüler</h2>
          </div>
          <p className="text-[#6B7A8D] text-lg max-w-2xl mx-auto">
            Echte Erfahrungen von Fahrschülern aus Kiel
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              variants={cardRevealVariants}
              custom={i}
              className="bg-white rounded-2xl p-7 shadow-sm border border-[#1B3A5C]/5 hover:shadow-md transition-all"
            >
              {t.rating && (
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-[#FF6B2C] fill-[#FF6B2C] pointer-events-none" />
                  ))}
                </div>
              )}
              <p className="text-[#1A1A2E] text-sm leading-relaxed mb-5">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1B3A5C] to-[#2D6A9F] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">{t.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-[#1A1A2E] text-sm font-semibold">{t.author}</p>
                  {t.role && <p className="text-[#6B7A8D] text-xs">{t.role}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
