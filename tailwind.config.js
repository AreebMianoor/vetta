/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': 'rgb(var(--brand-blue) / <alpha-value>)',
        'brand-violet': 'rgb(var(--brand-violet) / <alpha-value>)',
        'brand-bright': 'rgb(var(--brand-bright) / <alpha-value>)',
        'brand-accent': 'rgb(var(--brand-accent) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Montserrat', 'Poppins', 'Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
        sans: ['Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -2%)' },
          '20%': { transform: 'translate(1%, 1%)' },
          '30%': { transform: 'translate(2%, -1%)' },
          '40%': { transform: 'translate(-1%, 2%)' },
          '50%': { transform: 'translate(1%, -2%)' },
          '60%': { transform: 'translate(2%, 1%)' },
          '70%': { transform: 'translate(-2%, 2%)' },
          '80%': { transform: 'translate(1%, -1%)' },
          '90%': { transform: 'translate(-1%, -1%)' },
        }
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}