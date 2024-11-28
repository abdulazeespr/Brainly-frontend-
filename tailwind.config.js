/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      blue: {
        200: "#e0e6ff",
        300: "#6964c7",
        500: "#5046e4",
      },
    },
  },
  plugins: [],
};
