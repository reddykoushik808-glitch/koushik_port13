/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAF9F5",
          100: "#F6F4EE",
          200: "#EFECE2",
          300: "#E5E1D3",
        },
        sage: {
          50: "#F2F5F2",
          100: "#E3E9E3",
          200: "#C6D3C6",
          300: "#A3B7A3",
          500: "#5B755D",
          600: "#48624A",
          700: "#364A38",
          800: "#273829",
          900: "#1A261B",
        },
        charcoal: {
          900: "#141714",
          800: "#1F2420",
          700: "#2E332F",
          600: "#4B534C",
          500: "#6C756E",
        }
      },
      fontFamily: {
        display: ['var(--font-syne)', 'var(--font-cabinet)', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        handwriting: ['var(--font-caveat)', 'cursive'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      borderRadius: {
        'pill': '9999px',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
};
