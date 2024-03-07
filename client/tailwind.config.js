/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        1100: "1100px",
      },
      backgroundColor: {
        primary: "#F5F5F5", // xám
        secondary: "#1266dd", // xanh dương
        third: "#f73859", // đỏ
      },
      maxWidth: {
        600: "600px",
      },
    },
  },
  plugins: [],
};
