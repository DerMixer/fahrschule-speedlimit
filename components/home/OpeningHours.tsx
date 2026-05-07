import { Clock } from 'lucide-react';
import { OPENING_HOURS } from '@/static/openingHours';

export default function OpeningHours() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#1B3A5C]/5 p-6">
      <div className="flex flex-col items-start gap-2 mb-5">
        <Clock size={22} className="text-[#1B3A5C] pointer-events-none" />
        <h3 className="text-lg font-bold font-montserrat text-[#1A1A2E]">Öffnungszeiten</h3>
      </div>

      <ul className="space-y-2">
        {OPENING_HOURS.map(({ day, open, close }) => {
          const isClosed = open === 'Geschlossen';
          return (
            <li
              key={day}
              className="flex items-center justify-between py-2 border-b border-[#1B3A5C]/5 last:border-0"
            >
              <span className={`text-sm font-medium ${isClosed ? 'text-[#6B7A8D]' : 'text-[#1A1A2E]'}`}>
                {day}
              </span>
              <span className={`text-sm ${isClosed ? 'text-[#6B7A8D]' : 'text-[#1B3A5C] font-medium'}`}>
                {isClosed ? 'Geschlossen' : `${open} – ${close} Uhr`}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 pt-4 border-t border-[#1B3A5C]/5">
        <p className="text-[#6B7A8D] text-xs">
          Fahrstunden nach Vereinbarung auch außerhalb der Bürozeiten möglich.
        </p>
      </div>
    </div>
  );
}
