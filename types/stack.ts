export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  success: string;
  error?: string;
  warning?: string;
  dark: string;
  iconPrimary: string;
  iconSecondary?: string;
}

export interface FontSizes {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
}

export interface GradientConfig {
  hero: string;
  card: string;
  button?: string;
}
