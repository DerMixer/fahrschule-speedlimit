import Hero from '@/components/home/Hero';
import USPFeatures from '@/components/home/USPFeatures';
import FuehrerscheinklassenCards from '@/components/home/FuehrerscheinklassenCards';
import IntensivkurseSection from '@/components/home/IntensivkurseSection';
import FuhrparkShowcase from '@/components/home/FuhrparkShowcase';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTABanner from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <USPFeatures />
      <FuehrerscheinklassenCards />
      <IntensivkurseSection />
      <FuhrparkShowcase />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
