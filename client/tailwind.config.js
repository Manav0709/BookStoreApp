/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryDark: "#181C14",
        secondaryDark: "#3C3D37",
        accent: "#e74c3c",
      },
    },
  },
  plugins: [require("daisyui")],
};
