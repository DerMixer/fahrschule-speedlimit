'use client';

import { motion } from 'framer-motion';
import { Award, Car, Target, Zap, Monitor, DollarSign, Sparkles } from 'lucide-react';
import { staggerContainer, cardRevealVariants } from '@/style/animations';
import { USP_ITEMS } from '@/static/services';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Award,
  Car,
  Target,
  Zap,
  Monitor,
  DollarSign,
};

export default function USPFeatures() {
  return (
    <section className="bg-[#F8FAFB] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles size={28} className="text-[#FF6B2C] pointer-events-none" />
            <h2 className="text-3xl font-bold font-montserrat text-[#1A1A2E]">Warum Speedlimit?</h2>
          </div>
          <p className="text-[#6B7A8D] text-lg max-w-2xl mx-auto">
            Das macht uns zur ersten Wahl für deinen Führerschein in Kiel
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {USP_ITEMS.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? Award;
            return (
              <motion.div
                key={item.title}
                variants={cardRevealVariants}
                custom={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#1B3A5C]/5 hover:shadow-md hover:border-[#FF6B2C]/20 transition-all group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1B3A5C]/5 flex items-center justify-center mb-4 group-hover:bg-[#FF6B2C]/10 transition-colors">
                  <Icon size={22} className="text-[#1B3A5C] group-hover:text-[#FF6B2C] transition-colors pointer-events-none" />
                </div>
                <h3 className="text-base font-semibold font-montserrat text-[#1A1A2E] mb-2">{item.title}</h3>
                <p className="text-[#6B7A8D] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
