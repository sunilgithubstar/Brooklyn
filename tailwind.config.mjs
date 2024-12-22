/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#333",
        secondary: "#A53DFF",
        intermediate: "#556070",
        dipper: "#E6E8EB",
        fog: "#132238",
        applause: "#87909D",
        breakaway: "#424E60",
        flintstone: "#697484",
        lavendar: "#F0F1F3",
        chateau: "#A5ACB5",
        pale: "#edd8ff80",
        lilac: "#da4df166",
        seafoam: "#c4f5e9b3",
      },
      boxShadow: {
        c1: "0px 24px 116px 0px rgba(43, 56, 76, 0.09)",
        c2: "0px 36px 105px 0px rgba(43, 56, 76, 0.10)",
        c3: "0px 12px 64px 0px rgba(28, 25, 25, 0.12);",
      },
    },
  },
  plugins: [],
};
