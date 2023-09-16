/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: "Pacifico",
        merriweather: "Merriweather",
      },
      backgroundImage: {
        "home-image": "url('/images/photo-2.jpg')",
      },
      colors: {
        gold: "#B8860B",
      },
    },
  },
  plugins: [],
};
