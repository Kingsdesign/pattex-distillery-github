// theme.js

//Base colours
let colors = {
  white: "#ffffff",
  black: "#000000",
  red: "#ba0c2f",
  warmGrey: "#d7d2cb",
  offWhite: "#FBFBFB",
  darkGrey: "#1A202C",
  offDarkGrey: "#2D3748",
}

//Primary mode colours
colors = {
  ...colors,
  background: colors.white,
  text: colors.black,
  modeButtonColor: colors.black,
  logoBgPrimary: colors.red,
  logoColorPrimary: colors.black,
  logoBgSecondary: colors.white,
  logoColorSecondary: colors.black,
  footerBg: colors.offWhite,
  footerHeading: colors.red,
  navbarActiveText: colors.red,
}

//Additional modes
colors.modes = {
  dark: {
    background: colors.darkGrey,
    text: colors.white,
    modeButtonColor: colors.white,
    logoBgPrimary: colors.red,
    logoColorPrimary: colors.black,
    logoBgSecondary: colors.darkGrey,
    logoColorSecondary: colors.white,
    footerBg: colors.offDarkGrey,
  },
}

const breakpoints = ["640px", "768px", "1024px", "1280px"]
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export default {
  colors,
  breakpoints,
}