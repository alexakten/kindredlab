import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "linear-gradient":
          "radial-gradient(circle at top left, transparent 40%, black 70%), linear-gradient(to top right, black, rgba(255, 255, 255, 0.02) 35%, rgba(255, 255, 255, 0.05) 45%, rgba(255, 255, 255, 0.1) 55%, rgba(255, 255, 255, 0.05) 65%, rgba(255, 255, 255, 0.02) 75%, black)",
        // Fixed missing comma
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        freight: ['"freight-text-pro"', "serif"],
      },
      colors: {
        gray: {
          350: "#B7BCC5", // Example value between gray-300 and gray-400
        },
        // black: "#010314",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

export default config;
