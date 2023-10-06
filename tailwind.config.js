/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerOne: "url('assets/pictures/banner1.avif')",
        bannerTwo: "url('assets/pictures/banner2.avif')",
        bannerNew: "url('assets/pictures/banner11.avif')",
      },
      width: {
        bannerText: "calc(33.3333333333% - 80px)",
        btn: "calc(100% - 1px)",
      },
      colors: {
        offWhite: "#fffef2",
        offBlack: "#333",
      },
      borderColor: {
        primary: "rgba(51,51,51,.2)",
      },
      screens: {
        'sm': '240px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1440px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1600px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
};
