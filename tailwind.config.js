/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: 'var(--color-bg-main)',
        surface: 'var(--color-bg-card)',
        'canada-red': 'var(--color-canada-red)',
        'txt-primary': 'var(--color-text-main)',
        'txt-secondary': 'var(--color-text-secondary)',
        'border-ui': 'var(--color-border)',
        'hover-ui': 'var(--color-hover)',
        'brand-red': '#D51C29',
        'brand-navy': '#0B1F34',
        'brand-light': '#E5ECF4',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, var(--color-bg-main) 0%, var(--color-canada-red) 100%)',
      },
    },
  },
  plugins: [],
};
