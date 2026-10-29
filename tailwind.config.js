/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.njk',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens — resolve via CSS custom properties in src/css/input.css.
        canvas:  'var(--canvas)',
        card:    'var(--card)',
        tint:    'var(--tint)',
        inset:   'var(--inset)',
        ink:     'var(--text-hi)',
        dim:     'var(--text-dim)',
        muted:   'var(--text-muted)',
        hair:    'var(--border-hair)',

        // Fixed brand colours from the app's marigold brand guide.
        // Bright marigold is a fill only: put on-marigold text on it, never white.
        marigold:        '#FFB224',
        'marigold-deep': '#965700',
        'on-marigold':   '#1A1408',

        // Night bands stay dark.
        night:           '#15120F',
        'night-card':    '#24201A',
        'night-raised':  '#2E2921',
        'night-line':    '#3A342B',
        parchment:       '#F1EADB',
        'parchment-dim': '#ADA493',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
