const colors = require("tailwindcss/colors");

module.exports = {
  purge : [ "**/*.tsx" ],
  darkMode : "media",
  theme : {
    colors : {
      gray : "#1e2121",
      lightgray : "#23272a",
      blue : colors.blue,
      white : colors.white,
      black : colors.black,
    },
  },
  variants : {
    extend : {
      ringColor : [ "hover" ],
      ringWidth : [ "hover" ],
      outline : [ "hover" ],
    },
  },
  plugins : [],
};
