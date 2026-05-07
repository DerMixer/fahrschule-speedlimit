'use client';

import { motion } from 'framer-motion';
import { Car, Shield, Star, CheckCircle } from 'lucide-react';
import { fadeUpVariants, staggerContainer } from '@/style/animations';

const FUHRPARK_FEATURES = [
  { icon: Shield, text: 'Nichtraucher-Fahrzeuge' },
  { icon: Star, text: 'Aktuelle AUDI-Modelle' },
  { icon: CheckCircle, text: 'Doppelpedale & Sicherheitstechnik' },
  { icon: Car, text: 'Regelmäßig erneuert' },
];

export default function FuhrparkShowcase() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUpVariants} className="flex items-center gap-3 mb-6">
              <Car size={28} className="text-[#1B3A5C] pointer-events-none" />
              <h2 className="text-3xl font-bold font-montserrat text-[#1A1A2E]">Unser AUDI-Fuhrpark</h2>
            </motion.div>

            <motion.p variants={fadeUpVariants} className="text-[#6B7A8D] text-lg leading-relaxed mb-6">
              Du lernst mit modernen AUDI-Fahrzeugen der neuesten Generation. Alle Fahrzeuge sind Nichtraucher-Fahrzeuge und regelmäßig gewartet – für maximale Sicherheit und Fahrkomfort.
            </motion.p>

            <motion.ul
              variants={staggerContainer}
              className="space-y-3 mb-8"
            >
              {FUHRPARK_FEATURES.map(({ icon: Icon, text }) => (
                <motion.li
                  key={text}
                  variants={fadeUpVariants}
                  className="flex items-center gap-3 text-[#1A1A2E]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1B3A5C]/5 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[#1B3A5C] pointer-events-none" />
                  </div>
                  <span className="text-sm font-medium">{text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUpVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B2C]/10 text-[#FF6B2C] text-sm font-medium select-none">
                <Car size={14} className="pointer-events-none" />
                800+ Praxisstunden monatlich
              </div>
            </motion.div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1B3A5C] to-[#2D6A9F] aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-8 left-8 w-32 h-32 rounded-full bg-[#FF6B2C] blur-3xl" />
                <div className="absolute bottom-8 right-8 w-40 h-40 rounded-full bg-white blur-3xl" />
              </div>
              <div className="relative z-10 text-center text-white p-8">
                <Car size={64} className="mx-auto mb-4 opacity-80 pointer-events-none" />
                <p className="text-2xl font-bold font-montserrat">AUDI Fuhrpark</p>
                <p className="text-white/70 mt-2">Moderne Fahrzeuge – Top Technik</p>
              </div>
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 border border-[#1B3A5C]/5">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B2C] flex items-center justify-center shrink-0">
                <Star size={18} className="text-white pointer-events-none" />
              </div>
              <div>
                <p className="text-[#1A1A2E] font-bold text-sm">4.9 / 5</p>
                <p className="text-[#6B7A8D] text-xs">Kundenbewertung</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
