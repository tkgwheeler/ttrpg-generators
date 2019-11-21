import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "PT Serif",
      styles: ["400", "700"],
    },
    {
      name: "Grenze",
      styles: ["400", "600"],
    },
  ],
  headerFontFamily: [
    "Grenze",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Grenze", "Helvetica", "sans-serif"],
  // See below for the full list of options.
});

export const { scale, rhythm, options } = typography;
export default typography;
