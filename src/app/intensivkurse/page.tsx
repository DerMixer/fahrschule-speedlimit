import type { Metadata } from 'next';
import MiniHero from '@/components/home/MiniHero';
import IntensivkurseSection from '@/components/home/IntensivkurseSection';
import FAQSection from '@/components/home/FAQSection';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'Intensivkurse',
  description:
    'Intensivkurs Führerschein in 21 Tagen bei Fahrschule Speedlimit Kiel. Jeden Montag buchbar. Auch Sommer- und Semesterferienkurse.',
};

export default function IntensivkursePage() {
  return (
    <>
      <MiniHero
        title="Intensivkurse"
        subtitle="Dein Führerschein in 21 Tagen – kompakt, effizient und ganzjährig buchbar. Jeden Montag neu."
        breadcrumb={[{ label: 'Intensivkurse', href: '/intensivkurse' }]}
      />
      <IntensivkurseSection detailed />
      <FAQSection />
      <CTABanner
        headline="Starte deinen Intensivkurs!"
        subtext="Sichere dir jetzt deinen Platz – Intensivkurse starten jeden Montag, auch in den Semesterferien."
        cta="Platz sichern"
      />
    </>
  );
}
