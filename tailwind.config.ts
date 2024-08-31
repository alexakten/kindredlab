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
        inter: ["Inter", "sans-serif"],
        freight: ['"freight-text-pro"', "serif"],
        // neue: ['"neue-haas-grotesk-text"', "serif"],
      },
      colors: {
        gray: {
          350: "#B7BCC5", // Example value between gray-300 and gray-400
        },
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
