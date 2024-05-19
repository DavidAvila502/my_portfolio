/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            softBlue: "#2FA1EA",
            darkBlue1: "#2C5364",
            darkBlue2: "#102129",
         },

         fontFamily: {
            Roboto: ["Roboto", "sans-serif"],
            Roboto_slab: ["Roboto Slab", "sans-serif"],
            Roboto_serif: ["Roboto Serif", "sans-serif"],
         },
      },
   },
   plugins: [],
};
