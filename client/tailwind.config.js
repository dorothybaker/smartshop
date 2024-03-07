/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#008080",
      },
      textColor: {
        primary: "#008080",
      },
      flex: {
        3: "3 3 0%",
        2: "2 2 0%",
      },
    },
  },
  plugins: [require("daisyui")],
};
