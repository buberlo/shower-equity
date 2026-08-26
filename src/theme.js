export const colors = {
  background: '#F7F5F0',
  surface: '#FFFFFF',
  surfaceMuted: '#EFEAE1',
  border: '#DDD5C7',
  text: '#182230',
  textMuted: '#667085',
  primary: '#0E7C7B',
  primaryDark: '#0A5D5C',
  primarySoft: '#DCEFF0',
  secondary: '#B45309',
  secondarySoft: '#FBEEDB',
  success: '#15803D',
  warning: '#B45309',
  danger: '#B91C1C',
  dangerSoft: '#FDE3E3',
  shame: '#7C2D12',
  shameSoft: '#F9E4D8',
  gold: '#C9A227',
  overlay: 'rgba(24, 34, 48, 0.55)',
  white: '#FFFFFF',
};

export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  xxxl: 36,
};

export const radius = {
  sm: 6,
  md: 10,
  lg: 16,
  xl: 24,
  pill: 999,
};

export const typography = {
  h1: {
    fontFamily: 'System',
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 34,
  },
  h2: {
    fontFamily: 'System',
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 28,
  },
  h3: {
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    lineHeight: 24,
  },
  body: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '400',
    color: colors.text,
    lineHeight: 22,
  },
  caption: {
    fontFamily: 'System',
    fontSize: 13,
    fontWeight: '500',
    color: colors.textMuted,
    lineHeight: 18,
  },
  label: {
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  price: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '800',
    color: colors.primaryDark,
    lineHeight: 24,
  },
  button: {
    fontFamily: 'System',
    fontSize: 15,
    fontWeight: '700',
    color: colors.white,
    lineHeight: 20,
  },
};

export const shadows = {
  card: {
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  nav: {
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 6,
  },
};

const theme = {
  colors,
  spacing,
  radius,
  typography,
  shadows,
};

export default theme;