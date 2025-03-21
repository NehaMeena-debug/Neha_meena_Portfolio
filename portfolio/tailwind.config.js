// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        neonSnake: "moveNeon 3s linear infinite",
      },
      keyframes: {
        moveNeon: {
          "0%": { top: "0%", left: "0%", width: "8px", height: "8px", opacity: "1" },
          "25%": { top: "0%", left: "100%", width: "6px", height: "6px", opacity: "0.8", transform: "translateX(-100%)" },
          "50%": { top: "100%", left: "100%", width: "4px", height: "4px", opacity: "0.6", transform: "translate(-100%, -100%)" },
          "75%": { top: "100%", left: "0%", width: "2px", height: "2px", opacity: "0.4", transform: "translateY(-100%)" },
          "100%": { top: "0%", left: "0%", width: "8px", height: "8px", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
