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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-to-top":
          "radial-gradient(170% 100% at top, #08090A 30%, #0E0F11 60%, #121315 100%)",
        "gradient-radial-to-bottom":
          "radial-gradient(170% 100% at bottom, #08090A 30%, #0E0F11 60%, #121315 100%)",
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
