/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4B4453",
        secondary: "#B39CD0",
        main: "#FBEAFF",
      },
    },
  },
  plugins: [],
};
