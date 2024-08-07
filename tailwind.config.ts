import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hanalei: ['"Hanalei Fill"', 'cursive'],
        montserrat: ['"Montserrat Variable"', 'sans-serif'],
        coveredByYourGrace: ['"Covered By Your Grace"', 'cursive'],
      },
      colors: {
        primary: '#E91898',
        primaryHover: '#db53a9',
        success: '#00FFB2',
        error: '#FF5255',
        info: '#FFFFFF',
        warning: '#FFB62A',
        backgroundSecondary: '#0C101B',
        backgroundGray: 'rgba(255, 255, 255, 0.10)',
        backgroundLightPink: '#FFDFF3',
        textPrimary: '#FFFFFF',
        textSecondary: 'rgba(255, 255, 255, 0.70)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
