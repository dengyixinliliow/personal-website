/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/Header.js",
    "./src/components/Footer.js",
    "./src/components/JobContainer.js",
    "./src/components/ProjectContainer.js",
    "./src/pages/Home.js",
    "./src/pages/Experience.js",
    "./src/pages/Contact.js",
    "./src/pages/Projects.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#789FDA",
        secondary: "#DEAABC",
        fontcolor: "#FFF8F9",
        highlight: "#EC5453",
        highlight2: "#B8679B",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
        dynapuff: ["DynaPuff", "cursive"],
        comfortaa: ["Comfortaa", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        seymour: ["Seymour One", "sans-serif"],
      },
    },
    screens: {
      'constraint': {'min': '767px'}, 
      '3xl': {'max': '2305px'},

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
};
