/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "huddle-background-desktop": "url(../images/bg-desktop.svg)",
        "huddle-background-mobile": "url(../images/bg-mobile.svg)",
      },
      colors: {
        "huddle-violet": "hsl(257, 40%, 49%)",
        "huddle-magenta" : "hsl(300, 69%, 71%)"
      },
      fontFamily:{
        "poppins": ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "serif"]
      }
    },
  },
  plugins: [],
}

