/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: "Pacifico",
      },
      backgroundImage: {
        "home-image": "url('/images/photo-2.jpg')",
      },
    },
  },
  plugins: [],
};
