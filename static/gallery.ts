export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/images/audi-fuhrpark.jpg',
    alt: 'Moderner AUDI-Fuhrpark der Fahrschule Speedlimit',
    caption: 'Unser moderner AUDI-Fuhrpark',
  },
  {
    src: '/images/theorieklasse.jpg',
    alt: 'Theorieklasse der Fahrschule Speedlimit',
    caption: 'Moderne Theorieklasse',
  },
  {
    src: '/images/fahrstunde.jpg',
    alt: 'Fahrstunde in Kiel',
    caption: 'Praxisorientierte Fahrstunden',
  },
  {
    src: '/images/buero.jpg',
    alt: 'Büro der Fahrschule Speedlimit',
    caption: 'Unser freundliches Team',
  },
];
