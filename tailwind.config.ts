import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#000000",
        alabaster: "#FFFFFF",
        cured_concrete: "#595959",
      },
      fontSize: {
        'micro': ['11px', '14px'],
        'tiny': ['12px', '16px'],
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        'super-wide': '0.3em',
      }
    },
  },
  plugins: [],
};
export default config;
