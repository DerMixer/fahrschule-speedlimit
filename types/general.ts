export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface OpeningHours {
  day: string;
  open: string;
  close: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}
