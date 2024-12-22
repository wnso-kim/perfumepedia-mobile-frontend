/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
        paperlogy: ["Paperlogy", "sans-serif"],
      },
      colors: {
        gray: {
          d9: "#D9D9D9",
          c9: "#C9C9C9",
          33: "#333236",
          a6: "#A6A6A6",
          fa: "#FAFAFA",
          ee: "#EEEEEE",
        },
      },
    },
  },
  plugins: [],
};
