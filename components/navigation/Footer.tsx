import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT, NAV_LINKS, SITE_NAME, SOCIAL_LINKS } from '@/static/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1C2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold font-montserrat text-white">{SITE_NAME}</span>
              <span className="text-xs font-semibold bg-[#FF6B2C] text-white px-2 py-0.5 rounded-full select-none">Kiel</span>
            </div>
            <p className="text-[#6B7A8D] text-sm leading-relaxed">
              Über 70 Jahre Ausbildungserfahrung. Moderner AUDI-Fuhrpark. Dein Führerschein in Kiel – schnell, flexibel & mit Spaß.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 select-none">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#6B7A8D] hover:text-[#FF6B2C] text-sm transition-colors cursor-pointer select-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 select-none">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#FF6B2C] mt-0.5 shrink-0 pointer-events-none" />
                <span className="text-[#6B7A8D] text-sm select-none">
                  {CONTACT.address}<br />
                  {CONTACT.postalCode} {CONTACT.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#FF6B2C] shrink-0 pointer-events-none" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="text-[#6B7A8D] hover:text-white text-sm transition-colors cursor-pointer select-none"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#FF6B2C] shrink-0 pointer-events-none" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-[#6B7A8D] hover:text-white text-sm transition-colors cursor-pointer select-none"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 select-none">Öffnungszeiten</h3>
            <ul className="space-y-1.5">
              {[
                { day: 'Mo, Di, Do', time: '13:00 – 19:00 Uhr' },
                { day: 'Mi, Fr, Sa, So', time: 'Geschlossen' },
              ].map(({ day, time }) => (
                <li key={day} className="flex items-start gap-2">
                  <Clock size={14} className="text-[#FF6B2C] mt-0.5 shrink-0 pointer-events-none" />
                  <span className="text-[#6B7A8D] text-sm">
                    <span className="text-white/70">{day}:</span> {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7A8D] text-sm select-none">
            © {currentYear} {SITE_NAME}. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7A8D] hover:text-white text-sm transition-colors cursor-pointer select-none"
            >
              Instagram
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7A8D] hover:text-white text-sm transition-colors cursor-pointer select-none"
            >
              Facebook
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7A8D] hover:text-white text-sm transition-colors cursor-pointer select-none"
            >
              WhatsApp
            </a>
          </div>
          <a
            href="https://mickihde.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7A8D] hover:text-white text-sm transition-colors select-none cursor-pointer"
          >
            Made by Mick Ihde
          </a>
        </div>
      </div>
    </footer>
  );
}
