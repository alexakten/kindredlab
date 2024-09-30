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
          "radial-gradient(circle at top left, transparent 40%, black 70%), linear-gradient(to top right, black, rgba(255, 255, 255, 0.01) 35%, rgba(255, 255, 255, 0.04) 45%, rgba(255, 255, 255, 0.08) 55%, rgba(255, 255, 255, 0.04) 65%, rgba(255, 255, 255, 0.01) 75%, black)",
        // Fixed missing comma
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        freight: ['"freight-text-pro"', "serif"],
      },
      colors: {
        gray: {
          350: "#B7BCC5",
        },
        zinc: {
          100: "#f7f7f7", // Changed zinc-100 to #f7f7f7
        },
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

export default config;
