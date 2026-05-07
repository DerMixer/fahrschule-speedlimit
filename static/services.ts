import { ServiceCard, USPItem } from '@/types/services';

export const FUEHRERSCHEINKLASSEN: ServiceCard[] = [
  {
    klasse: 'B',
    label: 'PKW ab 17',
    beschreibung: 'Begleitetes Fahren ab 17 – der klassische Einstieg mit mehr Praxiserfahrung vor dem 18. Geburtstag.',
    details: [
      'Begleitetes Fahren mit mind. 1 Begleitperson',
      'Führerschein ab 18 selbstständig nutzbar',
      'Günstigere Versicherungsprämien möglich',
      'Mehr Routine vor dem eigenständigen Fahren',
    ],
    preis: 'ab Anfrage',
    icon: 'Car',
  },
  {
    klasse: 'B',
    label: 'PKW ab 18',
    beschreibung: 'Der klassische Weg zum Führerschein ab 18 Jahren – individuell, flexibel und in deinem Tempo.',
    details: [
      'Theorie: Online oder in der Schule',
      'Pflichtfahrten + Übungsfahrten',
      'Flexible Terminplanung',
      'Moderner AUDI-Fuhrpark (Nichtraucher)',
    ],
    preis: 'ab Anfrage',
    icon: 'Car',
  },
  {
    klasse: 'B96',
    label: 'Anhänger B96',
    beschreibung: 'Erweiterte Anhängerklasse – Gespanne bis 4.250 kg zulässiges Gesamtgewicht ohne separaten Führerschein.',
    details: [
      'Keine separate Prüfung erforderlich',
      'Schulungsnachweis nach 7 Stunden',
      'Ergänzung zum B-Führerschein',
      'Ideal für Bootsanhänger, Pferdeanhänger etc.',
    ],
    preis: 'ab Anfrage',
    icon: 'Zap',
  },
  {
    klasse: 'BE',
    label: 'Anhänger BE',
    beschreibung: 'Schwere Anhänger ohne Gewichtslimit – die Erweiterung für größte Gespanne am PKW.',
    details: [
      'Fahrzeugkombinationen über 4.250 kg',
      'Theoretische und praktische Prüfung',
      'Ergänzung zum B-Führerschein',
      'Perfekt für Wohnwagen und Schwerlast',
    ],
    preis: 'ab Anfrage',
    icon: 'Shield',
  },
];

export const USP_ITEMS: USPItem[] = [
  {
    title: 'Über 70 Jahre Erfahrung',
    description: 'Bewährte Ausbildungsmethoden seit Jahrzehnten – Generationen von Kieler Fahrern ausgebildet.',
    icon: 'Award',
  },
  {
    title: 'Moderner AUDI-Fuhrpark',
    description: 'Nichtraucher-Fahrzeuge mit aktueller Sicherheitstechnik für ein optimales Lernerlebnis.',
    icon: 'Car',
  },
  {
    title: '800+ Praxisstunden monatlich',
    description: 'Hohe Verfügbarkeit für flexible Terminplanung – kein langes Warten auf Fahrstunden.',
    icon: 'Target',
  },
  {
    title: 'Intensivkurse ganzjährig',
    description: '21-Tage Kurse jeden Montag buchbar – Führerschein auch in den Semesterferien.',
    icon: 'Zap',
  },
  {
    title: 'Online-Theorie',
    description: 'Testsieger-Lernsystem für zu Hause – lerne flexibel wann und wo du möchtest.',
    icon: 'Monitor',
  },
  {
    title: 'Transparente Preise',
    description: 'Keine versteckten Kosten oder Aufschläge – faire und ehrliche Ausbildungspreise.',
    icon: 'DollarSign',
  },
];
