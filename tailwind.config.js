/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "ui-sans-serif", "system-ui", "Paperlogy"],
      },
      colors: {
        gray: {
          d9: "#D9D9D9",
        },
      },
    },
  },
  plugins: [],
};
