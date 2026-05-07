'use client';

import { motion } from 'framer-motion';
import { Users, Award } from 'lucide-react';
import { staggerContainer, cardRevealVariants } from '@/style/animations';
import { TEAM_MEMBERS } from '@/static/team';

export default function TeamSection() {
  return (
    <section className="bg-[#F8FAFB] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users size={28} className="text-[#1B3A5C] pointer-events-none" />
            <h2 className="text-3xl font-bold font-montserrat text-[#1A1A2E]">Unser Team</h2>
          </div>
          <p className="text-[#6B7A8D] text-lg max-w-2xl mx-auto">
            Erfahren, freundlich und immer für dich da – das Team von Fahrschule Speedlimit
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={member.id}
              variants={cardRevealVariants}
              custom={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#1B3A5C]/5 hover:shadow-md transition-all text-center group"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1B3A5C] to-[#2D6A9F] flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <span className="text-2xl font-bold text-white font-montserrat">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-base font-semibold font-montserrat text-[#1A1A2E] mb-1">{member.name}</h3>
              <p className="text-[#FF6B2C] text-sm font-medium mb-3">{member.role}</p>

              {member.yearsExperience && (
                <div className="flex items-center justify-center gap-1.5 mb-3">
                  <Award size={12} className="text-[#1B3A5C] pointer-events-none" />
                  <span className="text-[#6B7A8D] text-xs select-none">{member.yearsExperience} Jahre Erfahrung</span>
                </div>
              )}

              {member.description && (
                <p className="text-[#6B7A8D] text-sm leading-relaxed">{member.description}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
