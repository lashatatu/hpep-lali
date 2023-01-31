/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#A31E23",
        secondary: "#AC3539",
        third: "#82181c",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],

  daisyui: {
    themes: false,
  },
};
