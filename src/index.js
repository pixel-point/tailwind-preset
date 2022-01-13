const { spacing, borderRadius, borderWidth, zIndex } = require('./generate-values');

const BREAKPOINTS = {
  '3xl': { min: '1920px', max: '1919px' },
  '2xl': { min: '1536px', max: '1535px' },
  xl: { min: '1280px', max: '1279px' },
  lg: { min: '1024px', max: '1023px' },
  md: { min: '768px', max: '767px' },
  // Maybe delete it, why do we need it?
  sm: { min: '640px', max: '639px' },
  // Maybe change to 375px?
  xs: { min: '414px', max: '413px' },
};

// Default Tailwind config can be checked out here — https://unpkg.com/browse/tailwindcss@3.0.8/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    screens: {
      '3xl': { max: BREAKPOINTS['3xl'].max },
      '2xl': { max: BREAKPOINTS['2xl'].max },
      xl: { max: BREAKPOINTS.xl.max },
      lg: { max: BREAKPOINTS.lg.max },
      md: { max: BREAKPOINTS.md.max },
      sm: { max: BREAKPOINTS.sm.max },
      xs: { max: BREAKPOINTS.xs.max },

      // Added breakpoints for a specific breakpoint only
      // It's useful when we need to redefine some values on a specific breakpoint
      // E.g. we have classes for font size and on a specific breakpoint we need to change font size BUT only on it
      '3xl-only': { min: BREAKPOINTS['2xl'].min, max: BREAKPOINTS['3xl'].max },
      '2xl-only': { min: BREAKPOINTS.xl.min, max: BREAKPOINTS['2xl'].max },
      'xl-only': { min: BREAKPOINTS.lg.min, max: BREAKPOINTS.xl.max },
      'lg-only': { min: BREAKPOINTS.md.min, max: BREAKPOINTS.lg.max },
      'md-only': { min: BREAKPOINTS.sm.min, max: BREAKPOINTS.md.max },
      'sm-only': { min: BREAKPOINTS.xs.min, max: BREAKPOINTS.sm.max },

      '2xl-up': { min: BREAKPOINTS['2xl'].min },
      'xl-up': { min: BREAKPOINTS.xl.min },
      'lg-up': { min: BREAKPOINTS.lg.min },
      'md-up': { min: BREAKPOINTS.md.min },
      'sm-up': { min: BREAKPOINTS.sm.min },
      'xs-up': { min: BREAKPOINTS.xs.min },
    },
    colors: ({ colors }) => ({
      // Removed all Tailwind specific colors
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
    }),
    spacing: {
      0: '0px',
      px: '1px',
      ...spacing,
    },
    borderRadius: {
      // Did not set "DEFAULT" value
      none: '0px',
      full: '9999px',
      ...borderRadius,
    },
    borderWidth: {
      // Did not set "DEFAULT" value
      0: '0px',
      1: '1px',
      3: '3px',
      ...borderWidth,
    },
    minWidth: {
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      ...spacing,
    },
    maxWidth: {
      // Did not move "prose" value from Tailwind
      none: 'none',
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      ...spacing,
    },
    minHeight: {
      0: '0px',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      ...spacing,
    },
    maxHeight: {
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      ...spacing,
    },
    letterSpacing: {
      '-0.05em': '-0.05em',
      '-0.04em': '-0.04em',
      '-0.03em': '-0.03em',
      '-0.02em': '-0.02em',
      '-0.01em': '-0.01em',
      none: '0em',
      '0.01em': '0.01em',
      '0.02em': '0.02em',
      '0.03em': '0.03em',
      '0.04em': '0.04em',
      '0.05em': '0.05em',

      // DISCUSS
      // '-1%': '-0.05em',
      // '-2%': '-0.04em',
      // '-3%': '-0.03em',
      // '-4%': '-0.02em',
      // '-5%': '-0.01em',
      // none: '0em',
      // '1%': '0.01em',
      // '2%': '0.02em',
      // '3%': '0.03em',
      // '4%': '0.04em',
      // '5%': '0.05em',
    },
    lineHeight: {
      none: 1,
      1.1: 1.1,
      1.2: 1.2,
      1.3: 1.3,
      1.4: 1.4,
      1.5: 1.5,
      1.6: 1.6,
      1.7: 1.7,
      1.8: 1.8,
      1.9: 1.9,
      2: 2,
    },
    zIndex: {
      '-1': -1,
      auto: 'auto',
      0: 0,
      ...zIndex,
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
