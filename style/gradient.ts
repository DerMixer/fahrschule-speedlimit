import { GradientConfig } from '@/types/stack';

export const gradients: GradientConfig = {
  hero: 'linear-gradient(135deg, #1B3A5C 0%, #2D6A9F 50%, #FF6B2C 100%)',
  card: 'linear-gradient(135deg, #F8FAFB 0%, #FFFFFF 100%)',
  button: 'linear-gradient(135deg, #FF6B2C 0%, #E55A1B 100%)',
};

export const gradientClass = (type: keyof GradientConfig): string => {
  const bgGradients: { [key: string]: string } = {
    hero: 'bg-gradient-to-br from-[#1B3A5C] via-[#2D6A9F] to-[#FF6B2C]',
    card: 'bg-gradient-to-br from-[#F8FAFB] to-white',
    button: 'bg-gradient-to-r from-[#FF6B2C] to-[#E55A1B]',
  };
  return bgGradients[type] || '';
};

export const getGradientStyle = (type: keyof GradientConfig) => ({
  background: gradients[type],
});
