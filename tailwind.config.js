/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FFB400FF",
        secondary: "#FFB400F2",
        netrualGray: "#2B2B2BFF",
        primaryGray: "#18191AFF",
        secondaryGray: "#242526FF",
        primaryWhite: "#F0F0F6FF",
        secondaryWhite: "#E4E6EBFF",
      },
    },
  },
  plugins: [],
};
