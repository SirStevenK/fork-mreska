const colors = require("./styles/colors.json");
const fontFamily = require("./styles/fontFamily.json");
const fontSize = require("./styles/fontSize.json");
const fontWeight = require("./styles/fontWeight.json");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: { colors, fontFamily, fontSize, fontWeight },
  variants: {},
  plugins: [],
};
