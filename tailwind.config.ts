import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anta: ["Anta", "Serif"],
      },
      colors: {
        mycolor1: "var(--mycolor1)",
        mycolor2: "var(--mycolor2)",
        mycolor3: "var(--mycolor3)",
        mycolor4: "var(--mycolor4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
