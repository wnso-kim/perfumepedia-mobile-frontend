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
          c9: "#C9C9C9",
          33: "#333236",
          a6: "#A6A6A6",
        },
      },
    },
  },
  plugins: [],
};
