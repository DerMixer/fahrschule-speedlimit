'use client';

import { motion } from 'framer-motion';
import { BookOpen, Monitor, CheckCircle, Trophy } from 'lucide-react';
import { staggerContainer, fadeUpVariants } from '@/style/animations';

const THEORIE_FEATURES = [
  {
    icon: Monitor,
    title: 'Online-Lernsystem',
    description: 'Testsieger-Lernsystem – lerne wann und wo du willst, auf jedem Gerät.',
  },
  {
    icon: BookOpen,
    title: 'Theoriestunden vor Ort',
    description: 'Ergänzend zum Online-Lernen bieten wir klassische Theoriestunden an.',
  },
  {
    icon: Trophy,
    title: 'Hohe Erfolgsquote',
    description: 'Dank optimaler Vorbereitung bestehen unsere Schüler die Prüfung überdurchschnittlich.',
  },
  {
    icon: CheckCircle,
    title: 'Flexibler Einstieg',
    description: 'Starte jederzeit mit der Theorie – kein fixer Kursbeginn notwendig.',
  },
];

export default function TheoretischAusbildung() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen size={28} className="text-[#1B3A5C] pointer-events-none" />
            <h2 className="text-3xl font-bold font-montserrat text-[#1A1A2E]">Theoretische Ausbildung</h2>
          </div>
          <p className="text-[#6B7A8D] text-lg max-w-2xl mx-auto">
            Moderne Theorie – online und vor Ort. Optimal auf die Prüfung vorbereitet.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {THEORIE_FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeUpVariants}
                custom={i}
                className="flex gap-5 p-6 rounded-2xl bg-[#F8FAFB] border border-[#1B3A5C]/5 hover:border-[#FF6B2C]/20 hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1B3A5C]/5 flex items-center justify-center shrink-0 group-hover:bg-[#FF6B2C]/10 transition-colors">
                  <Icon size={22} className="text-[#1B3A5C] group-hover:text-[#FF6B2C] transition-colors pointer-events-none" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1A1A2E] mb-2">{feature.title}</h3>
                  <p className="text-[#6B7A8D] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
