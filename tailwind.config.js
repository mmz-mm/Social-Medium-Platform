/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f87d8',
        'primary-deep': '#0a5f96',
        'primary-soft': '#86ccfc',
        surface: '#eef3fb',
        'surface-low': '#e3ebf6',
        'surface-card': '#ffffff',
        ink: '#17263f',
        'ink-soft': '#60708a',
        success: '#16a34a',
        danger: '#ef4444',
      },
      fontFamily: {
        headline: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        float: '0 18px 40px rgba(15, 135, 216, 0.14)',
        card: '0 12px 32px rgba(23, 38, 63, 0.08)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0f87d8 0%, #58b7f4 100%)',
        'hero-gradient': 'radial-gradient(circle at top left, rgba(15, 135, 216, 0.12), transparent 45%), linear-gradient(180deg, #f8fbff 0%, #eef3fb 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
