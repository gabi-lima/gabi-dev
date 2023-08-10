/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightpurple: "#21234a",
        darkbg: "#0f0f12",
        blackbg: "#161619",
      },
    },
  },
  plugins: [],
};
