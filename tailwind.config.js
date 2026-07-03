/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flowie-espresso': '#2C1E16', // Coklat tua yang dalam
        'flowie-cream': '#F4EFE6',   // Krem hangat
        'flowie-caramel': '#D4A373', // Aksen karamel
        'flowie-floral': '#E8D8C8',  // Sentuhan floral/pastel
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'], // Untuk heading (elegan)
        'sans': ['"Inter"', 'sans-serif'],        // Untuk body text (modern, readable)
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}