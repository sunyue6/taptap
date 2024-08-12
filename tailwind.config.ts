import type { Config } from "tailwindcss";

const config: {
  plugins: any[];
  theme: {
    extend: {
      fontFamily: { spartan: string[]; coveredByYourGrace: string[]; montserrat: string[]; hanalei: string[] };
      screens: { mmd: string };
      backgroundImage: { "gradient-conic": string; "gradient-radial": string };
      colors: {
        backgroundGray: string;
        textSecondary: string;
        backgroundSecondary: string;
        backgroundLightPink: string;
        primaryHover: string;
        error: string;
        backgroundPrimary: string;
        success: string;
        warning: string;
        textPrimary: string;
        backgroundThird: string;
        primary: string;
        info: string
      }
    }
  };
  content: string[]
} = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mmd': '995px',
      },
      fontFamily: {
        hanalei: ['"Hanalei Fill"', 'cursive'],
        montserrat: ['"Montserrat Variable"', 'sans-serif'],
        coveredByYourGrace: ['"Covered By Your Grace"', 'cursive'],
        spartan: ['"League Spartan Variable"'],
      },
      colors: {
        primary: '#E91898',
        primaryHover: '#db53a9',

        success: '#00FFB2',
        error: '#FF5255',
        info: '#FFFFFF',
        warning: '#FFB62A',

        backgroundPrimary: 'rgba(255, 255, 255, 0.2)',
        backgroundSecondary: '#0C101B',
        backgroundThird: 'rgba(255, 255, 255, 0.40)',
        backgroundGray: 'rgba(255, 255, 255, 0.10)',
        backgroundLightPink: '#FFDFF3',

        textPrimary: '#FFFFFF',
        textSecondary: 'rgba(255, 255, 255, 0.70)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
  },
  plugins: [],
};
export default config;
