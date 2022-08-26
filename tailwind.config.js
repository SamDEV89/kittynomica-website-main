/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mini: "1187px",
        start: "100px",
      },
      colors: {
        dark: "#02010A",
        purple: "#0D0929",
        lightPurple: "#6549B9",
        pink: "#D26680",
      },
      fontFamily: {
        primary: "NexaRegular",
        "primary-bold": "NexaBold",
        header: "Orbitron, sans-serif",
      },
    },
  },
  plugins: [],
};
