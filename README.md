# Fahrschule Speedlimit – Kiel

Website für Fahrschule Speedlimit, eine Fahrschule in Kiel mit über 70 Jahren Ausbildungserfahrung. Führerscheinkurse in den Klassen B, B96 & BE, Intensivkurse in 21 Tagen und moderner AUDI-Fuhrpark.

## Seiten

| Route | Beschreibung |
|-------|-------------|
| `/` | Startseite – Hero, USPs, Führerscheinklassen, Intensivkurse, Fuhrpark, Testimonials |
| `/fuehrerscheinklassen` | Detailübersicht aller Klassen (B ab 17, B ab 18, B96, BE) + Theorieausbildung |
| `/intensivkurse` | Intensivkurse (21 Tage, jeden Montag) + FAQ-Accordion |
| `/ueber-uns` | Team, Fuhrpark, USPs |
| `/kontakt` | Kontaktformular (react-hook-form + zod), Öffnungszeiten, Adresse |

## Stack

- **Framework:** Next.js 16 (App Router), TypeScript
- **Styling:** Tailwind CSS v4
- **Animationen:** Framer Motion
- **Icons:** lucide-react
- **Formulare:** react-hook-form + zod + @hookform/resolvers
- **Fonts:** Montserrat (Headings), Open Sans (Body) via next/font/google

## Projektstruktur

```
src/app/           → Next.js App Router Seiten & Layouts
components/
  navigation/      → Navbar, Footer
  home/            → Hero, USPFeatures, FuehrerscheinklassenCards, IntensivkurseSection,
                     FuhrparkShowcase, CTABanner, TeamSection, TheoretischAusbildung,
                     TestimonialsSection, FAQSection, OpeningHours, MiniHero
  forms/           → ContactForm
style/             → animations.ts, colors.ts, fontSizes.ts, gradient.ts, popupTextSx.ts
static/            → team.ts, services.ts, faq.ts, openingHours.ts, gallery.ts, testimonials.ts,
                     constants.ts, defaultValues.ts, homeContent.ts
types/             → general.ts, landing.ts, stack.ts, team.ts, services.ts, faq.ts
public/            → robots.txt, llms.txt
```

## Setup

```bash
npm install
npm run dev       # Entwicklungsserver
npm run build     # Produktions-Build
npm run lint      # Lint-Prüfung
```

## Kontakt (Fahrschule)

- **Adresse:** Sophienblatt 46, 24114 Kiel
- **Telefon:** +49 431 38673777
- **E-Mail:** info@fahrschule-speedlimit.de
- **Öffnungszeiten:** Mo, Di, Do 13–19 Uhr
