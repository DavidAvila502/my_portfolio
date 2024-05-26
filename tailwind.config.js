/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            softBlue: "#2FA1EA",
            darkBlue1: "#2C5364",
            darkBlue2: "#102129",
            opacityGray: "rgba(182, 182, 182 ,33%)",
            selectedBlue: "#145ECD"
         },

         fontFamily: {
            Roboto: ["Roboto", "sans-serif"],
            Roboto_slab: ["Roboto Slab", "sans-serif"],
            Roboto_serif: ["Roboto Serif", "sans-serif"],
            Roboto_mono: ["Roboto Mono", "sans-serif"],
         },
      },
   },
   plugins: [],
};
