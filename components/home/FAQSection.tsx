'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/static/faq';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle size={28} className="text-[#1B3A5C] pointer-events-none" />
            <h2 className="text-3xl font-bold font-montserrat text-[#1A1A2E]">Häufige Fragen</h2>
          </div>
          <p className="text-[#6B7A8D] text-lg">
            Antworten auf die wichtigsten Fragen rund um deine Ausbildung
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="bg-[#F8FAFB] rounded-2xl border border-[#1B3A5C]/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-[#1B3A5C]/3 transition-colors select-none"
              >
                <span className="text-sm font-semibold text-[#1A1A2E] pr-4">{item.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#6B7A8D] shrink-0 transition-transform duration-200 pointer-events-none ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px bg-[#1B3A5C]/8 mb-4" />
                      <p className="text-[#6B7A8D] text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
