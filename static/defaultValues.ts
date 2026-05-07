import { FuehrerscheinklasseCard, IntensivkursCard, USPFeature } from '@/types/landing';

export const DEFAULT_FUEHRERSCHEINKLASSEN: FuehrerscheinklasseCard[] = [
  {
    klasse: 'B',
    label: 'PKW ab 17',
    beschreibung: 'Begleitetes Fahren ab 17 – der klassische Einstieg',
  },
  {
    klasse: 'B',
    label: 'PKW ab 18',
    beschreibung: 'Dein Weg zum Führerschein ab 18 Jahren',
  },
  {
    klasse: 'B96',
    label: 'Anhänger B96',
    beschreibung: 'Erweiterte Anhängerklasse für Gespanne bis 4.250 kg',
  },
  {
    klasse: 'BE',
    label: 'Anhänger BE',
    beschreibung: 'Schwere Anhänger ohne Gewichtslimit am PKW',
  },
];

export const DEFAULT_INTENSIVKURSE: IntensivkursCard[] = [
  {
    name: 'Intensivkurs',
    dauer: '21 Ausbildungstage',
    start: 'Jeden Montag möglich',
    beschreibung: 'Theorie & Praxis kompakt – ganzjährig buchbar',
  },
  {
    name: 'Sommerferienkurs',
    dauer: '21 Ausbildungstage',
    start: 'Sommerferien',
    beschreibung: 'Nutze die Ferien für deinen Führerschein',
  },
  {
    name: 'Semesterferienkurs',
    dauer: '21 Ausbildungstage',
    start: 'Semesterferien',
    beschreibung: 'Ideal für Studierende zwischen den Semestern',
  },
];

export const DEFAULT_USPS: USPFeature[] = [
  {
    title: 'Über 70 Jahre Erfahrung',
    description: 'Bewährte Ausbildungsmethoden seit Jahrzehnten',
    icon: 'Award',
  },
  {
    title: 'Moderner AUDI-Fuhrpark',
    description: 'Nichtraucher-Fahrzeuge mit aktueller Technik',
    icon: 'Zap',
  },
  {
    title: '800+ Praxisstunden monatlich',
    description: 'Hohe Verfügbarkeit für flexible Planung',
    icon: 'Target',
  },
  {
    title: 'Intensivkurse ganzjährig',
    description: '21-Tage Kurse an jedem Montag buchbar',
    icon: 'Zap',
  },
  {
    title: 'Online-Theorie',
    description: 'Testsieger-Lernsystem für zu Hause',
    icon: 'Monitor',
  },
  {
    title: 'Transparente Preise',
    description: 'Keine versteckten Kosten oder Aufschläge',
    icon: 'DollarSign',
  },
];
