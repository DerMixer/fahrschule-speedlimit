import type { Metadata } from 'next';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import OpeningHours from '@/components/home/OpeningHours';
import MiniHero from '@/components/home/MiniHero';
import { CONTACT } from '@/static/constants';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktiere Fahrschule Speedlimit in Kiel. Sophienblatt 46, 24114 Kiel. Mo, Di, Do 13–19 Uhr. Jetzt anmelden!',
};

export default function KontaktPage() {
  return (
    <>
      <MiniHero
        title="Kontakt & Anmeldung"
        subtitle="Schreib uns, ruf an oder komm direkt vorbei – wir freuen uns auf dich!"
        breadcrumb={[{ label: 'Kontakt', href: '/kontakt' }]}
      />

      <section className="bg-[#F8FAFB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-[#1B3A5C]/5 p-7">
                <h2 className="text-2xl font-bold font-montserrat text-[#1A1A2E] mb-2">Schreib uns</h2>
                <p className="text-[#6B7A8D] text-sm mb-6">
                  Füll das Formular aus – wir antworten innerhalb von 24 Stunden.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Opening hours */}
              <OpeningHours />

              {/* Contact info */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#1B3A5C]/5 p-6">
                <h3 className="text-lg font-bold font-montserrat text-[#1A1A2E] mb-4">Direkt erreichen</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FF6B2C]/10 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-[#FF6B2C] pointer-events-none" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1A1A2E]">Adresse</p>
                      <p className="text-[#6B7A8D] text-sm select-none">
                        {CONTACT.address}<br />
                        {CONTACT.postalCode} {CONTACT.city}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FF6B2C]/10 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-[#FF6B2C] pointer-events-none" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1A1A2E]">Telefon</p>
                      <a
                        href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                        className="text-[#6B7A8D] text-sm hover:text-[#FF6B2C] transition-colors cursor-pointer select-none"
                      >
                        {CONTACT.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FF6B2C]/10 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-[#FF6B2C] pointer-events-none" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1A1A2E]">E-Mail</p>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="text-[#6B7A8D] text-sm hover:text-[#FF6B2C] transition-colors cursor-pointer select-none"
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Maps embed placeholder */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#1B3A5C]/5 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-[#1B3A5C]/5 to-[#2D6A9F]/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-[#1B3A5C] mx-auto mb-2 pointer-events-none" />
                    <p className="text-[#1A1A2E] text-sm font-medium select-none">Sophienblatt 46, Kiel</p>
                    <a
                      href="https://maps.google.com/?q=Sophienblatt+46+24114+Kiel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF6B2C] text-xs hover:underline cursor-pointer mt-1 inline-block select-none"
                    >
                      In Google Maps öffnen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
