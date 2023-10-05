/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "320px", // max-width,
        xxs: "500px", // min-width
      },
      colors: {
        primary: "#200e0e",
        secondary: "#dcdddf",
        tertiary: "#f5f5f5",
        subtitle: "#b4b4b4",
      },
      fontFamily: {
        // Add 'Manrope' to the list of sans fonts
        manrope: ["Manrope", "sans-serif"],
      },

      backgroundImage: {
        "gradient-radial-to-tr":
          "radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-tl":
          "radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-br":
          "radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))",
        "gradient-radial-to-bl":
          "radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
