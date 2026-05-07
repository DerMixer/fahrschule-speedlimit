import { colors } from './colors';

export const popupTextSx = {
  container: {
    backgroundColor: colors.surface,
    border: `1px solid ${colors.accent}`,
    borderRadius: '8px',
    padding: '16px 20px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: colors.primary,
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  text: {
    color: colors.text,
    fontSize: '14px',
    lineHeight: '1.6',
  },
  closeButton: {
    color: colors.accent,
    cursor: 'pointer',
    fontSize: '20px',
    padding: '0',
  },
};

export const tooltipSx = {
  background: colors.dark,
  color: colors.surface,
  borderRadius: '6px',
  padding: '8px 12px',
  fontSize: '12px',
  fontWeight: '500',
};
