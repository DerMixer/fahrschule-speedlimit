import { ColorPalette } from '@/types/stack';

export const colors: ColorPalette = {
  primary: '#1B3A5C',
  secondary: '#2D6A9F',
  accent: '#FF6B2C',
  background: '#F8FAFB',
  surface: '#FFFFFF',
  text: '#1A1A2E',
  textMuted: '#6B7A8D',
  success: '#22C55E',
  error: '#EF4444',
  warning: '#F59E0B',
  dark: '#0F1C2E',
  iconPrimary: '#1B3A5C',
  iconSecondary: '#FF6B2C',
};

export const textColorClass = (color: string): string => {
  const mapping: { [key: string]: string } = {
    primary: 'text-[#1B3A5C]',
    secondary: 'text-[#2D6A9F]',
    accent: 'text-[#FF6B2C]',
    text: 'text-[#1A1A2E]',
    textMuted: 'text-[#6B7A8D]',
    success: 'text-[#22C55E]',
    error: 'text-[#EF4444]',
    warning: 'text-[#F59E0B]',
    dark: 'text-[#0F1C2E]',
    white: 'text-white',
  };
  return mapping[color] || 'text-[#1A1A2E]';
};

export const bgColorClass = (color: string): string => {
  const mapping: { [key: string]: string } = {
    primary: 'bg-[#1B3A5C]',
    secondary: 'bg-[#2D6A9F]',
    accent: 'bg-[#FF6B2C]',
    background: 'bg-[#F8FAFB]',
    surface: 'bg-white',
    success: 'bg-[#22C55E]',
    error: 'bg-[#EF4444]',
    warning: 'bg-[#F59E0B]',
    dark: 'bg-[#0F1C2E]',
  };
  return mapping[color] || 'bg-white';
};
