/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            softBlue: "#2FA1EA",
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
