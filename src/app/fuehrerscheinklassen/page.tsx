import type { Metadata } from 'next';
import MiniHero from '@/components/home/MiniHero';
import FuehrerscheinklassenCards from '@/components/home/FuehrerscheinklassenCards';
import TheoretischAusbildung from '@/components/home/TheoretischAusbildung';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'Führerscheinklassen',
  description:
    'Alle Führerscheinklassen bei Fahrschule Speedlimit Kiel: B (ab 17 & 18), B96, BE. Detaillierte Infos zu Ausbildung, Inhalten und Ablauf.',
};

export default function FuehrerscheinklassenPage() {
  return (
    <>
      <MiniHero
        title="Führerscheinklassen"
        subtitle="Von BF17 bis BE – wir bilden dich in allen PKW- und Anhängerklassen professionell aus."
        breadcrumb={[{ label: 'Führerscheinklassen', href: '/fuehrerscheinklassen' }]}
      />
      <FuehrerscheinklassenCards detailed />
      <TheoretischAusbildung />
      <CTABanner
        headline="Bereit für deinen Führerschein?"
        subtext="Wähle deine Klasse und melde dich noch heute bei uns an – wir freuen uns auf dich!"
        cta="Jetzt anmelden"
      />
    </>
  );
}
