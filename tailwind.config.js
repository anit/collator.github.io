/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.njk',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens — resolve via CSS custom properties.
        // These automatically reflect the active theme; no dark: prefix needed on colour utilities.
        canvas:  'var(--canvas)',
        card:    'var(--card)',
        tint:    'var(--tint)',
        inset:   'var(--inset)',
        ink:     'var(--text-hi)',
        dim:     'var(--text-dim)',
        muted:   'var(--text-muted)',
        hair:    'var(--border-hair)',

        // Fixed brand colours — always-dark sections stay dark in both modes.
        navy:             '#0C1829',
        saffron:          'var(--saffron)',
        'saffron-deep':   'var(--saffron-deep)',
        'saffron-accent': 'var(--saffron-acc)',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        card: 'var(--shadow-card)',
      },
    },
  },
  plugins: [],
};
