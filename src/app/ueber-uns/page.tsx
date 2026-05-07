import type { Metadata } from 'next';
import MiniHero from '@/components/home/MiniHero';
import TeamSection from '@/components/home/TeamSection';
import FuhrparkShowcase from '@/components/home/FuhrparkShowcase';
import USPFeatures from '@/components/home/USPFeatures';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Lerne das Team von Fahrschule Speedlimit Kiel kennen. Über 70 Jahre Erfahrung, moderner AUDI-Fuhrpark und persönliche Betreuung.',
};

export default function UeberUnsPage() {
  return (
    <>
      <MiniHero
        title="Über uns"
        subtitle="Mehr als 70 Jahre Ausbildungserfahrung, ein motiviertes Team und moderne Fahrzeuge – das ist Speedlimit."
        breadcrumb={[{ label: 'Über uns', href: '/ueber-uns' }]}
      />
      <TeamSection />
      <FuhrparkShowcase />
      <USPFeatures />
      <CTABanner
        headline="Überzeuge dich selbst!"
        subtext="Lerne unser Team persönlich kennen und starte deine Ausbildung mit den Besten in Kiel."
        cta="Kontakt aufnehmen"
      />
    </>
  );
}
