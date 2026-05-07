export interface FuehrerscheinklasseCard {
  klasse: string;
  label: string;
  beschreibung: string;
  icon?: string;
}

export interface IntensivkursCard {
  name: string;
  dauer: string;
  start: string;
  beschreibung: string;
}

export interface USPFeature {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description?: string;
  image?: string;
}

export interface Testimonial {
  author: string;
  role?: string;
  content: string;
  rating?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
