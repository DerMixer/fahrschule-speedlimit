'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Bitte gib deinen Namen ein (mindestens 2 Zeichen).'),
  email: z.string().email('Bitte gib eine gültige E-Mail-Adresse ein.'),
  phone: z.string().optional(),
  klasse: z.string().min(1, 'Bitte wähle eine Führerscheinklasse.'),
  nachricht: z.string().min(10, 'Bitte schreibe eine kurze Nachricht (mindestens 10 Zeichen).'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const KLASSEN_OPTIONS = [
  { value: '', label: 'Führerscheinklasse wählen' },
  { value: 'B-17', label: 'B – PKW ab 17 (BF17)' },
  { value: 'B-18', label: 'B – PKW ab 18' },
  { value: 'B96', label: 'B96 – Anhänger bis 4.250 kg' },
  { value: 'BE', label: 'BE – Schwere Anhänger' },
  { value: 'Intensivkurs', label: 'Intensivkurs (21 Tage)' },
  { value: 'Sonstiges', label: 'Sonstiges / Noch unklar' },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((res) => setTimeout(res, 800));
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-[#22C55E] pointer-events-none" />
        </div>
        <h3 className="text-xl font-bold font-montserrat text-[#1A1A2E] mb-2">Nachricht gesendet!</h3>
        <p className="text-[#6B7A8D] mb-6">
          Danke für deine Anfrage. Wir melden uns so schnell wie möglich bei dir.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 rounded-xl bg-[#1B3A5C] text-white font-medium text-sm cursor-pointer hover:bg-[#2D6A9F] transition-colors select-none"
        >
          Weitere Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#1A1A2E] mb-1.5">
          Dein Name <span className="text-[#FF6B2C]">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Max Mustermann"
          {...register('name')}
          className={[
            'w-full px-4 py-3 rounded-xl border bg-white text-[#1A1A2E] text-sm placeholder:text-[#6B7A8D]/60 outline-none transition-colors',
            errors.name
              ? 'border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20'
              : 'border-[#1B3A5C]/15 focus:border-[#2D6A9F] focus:ring-2 focus:ring-[#2D6A9F]/10',
          ].join(' ')}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-[#EF4444]">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1A1A2E] mb-1.5">
          E-Mail-Adresse <span className="text-[#FF6B2C]">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="max@beispiel.de"
          {...register('email')}
          className={[
            'w-full px-4 py-3 rounded-xl border bg-white text-[#1A1A2E] text-sm placeholder:text-[#6B7A8D]/60 outline-none transition-colors',
            errors.email
              ? 'border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20'
              : 'border-[#1B3A5C]/15 focus:border-[#2D6A9F] focus:ring-2 focus:ring-[#2D6A9F]/10',
          ].join(' ')}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-[#EF4444]">{errors.email.message}</p>
        )}
      </div>

      {/* Phone (optional) */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A2E] mb-1.5">
          Telefonnummer <span className="text-[#6B7A8D] text-xs font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+49 431 ..."
          {...register('phone')}
          className="w-full px-4 py-3 rounded-xl border border-[#1B3A5C]/15 bg-white text-[#1A1A2E] text-sm placeholder:text-[#6B7A8D]/60 outline-none focus:border-[#2D6A9F] focus:ring-2 focus:ring-[#2D6A9F]/10 transition-colors"
        />
      </div>

      {/* Klasse */}
      <div>
        <label htmlFor="klasse" className="block text-sm font-medium text-[#1A1A2E] mb-1.5">
          Führerscheinklasse <span className="text-[#FF6B2C]">*</span>
        </label>
        <select
          id="klasse"
          {...register('klasse')}
          className={[
            'w-full px-4 py-3 rounded-xl border bg-white text-[#1A1A2E] text-sm outline-none transition-colors cursor-pointer',
            errors.klasse
              ? 'border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20'
              : 'border-[#1B3A5C]/15 focus:border-[#2D6A9F] focus:ring-2 focus:ring-[#2D6A9F]/10',
          ].join(' ')}
          defaultValue=""
        >
          {KLASSEN_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.klasse && (
          <p className="mt-1.5 text-xs text-[#EF4444]">{errors.klasse.message}</p>
        )}
      </div>

      {/* Nachricht */}
      <div>
        <label htmlFor="nachricht" className="block text-sm font-medium text-[#1A1A2E] mb-1.5">
          Deine Nachricht <span className="text-[#FF6B2C]">*</span>
        </label>
        <textarea
          id="nachricht"
          rows={4}
          placeholder="Deine Fragen, Wünsche oder ein kurzes Hallo..."
          {...register('nachricht')}
          className={[
            'w-full px-4 py-3 rounded-xl border bg-white text-[#1A1A2E] text-sm placeholder:text-[#6B7A8D]/60 outline-none transition-colors resize-none',
            errors.nachricht
              ? 'border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20'
              : 'border-[#1B3A5C]/15 focus:border-[#2D6A9F] focus:ring-2 focus:ring-[#2D6A9F]/10',
          ].join(' ')}
        />
        {errors.nachricht && (
          <p className="mt-1.5 text-xs text-[#EF4444]">{errors.nachricht.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FF6B2C] hover:bg-[#E55A1B] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all cursor-pointer select-none"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin pointer-events-none" />
            <span className="pointer-events-none">Wird gesendet...</span>
          </>
        ) : (
          <>
            <span className="pointer-events-none">Anfrage senden</span>
            <Send size={16} className="pointer-events-none" />
          </>
        )}
      </button>

      <p className="text-[#6B7A8D] text-xs text-center">
        Mit dem Absenden stimmst du unserer Kontaktaufnahme per E-Mail oder Telefon zu.
      </p>
    </form>
  );
}
