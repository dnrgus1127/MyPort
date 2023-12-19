const commonTheme = {
  greyColor: "#686868",
};

export const ligthTheme = {
  mainColor: "#787eb6",
  pointColor: "#ff4d79",
  bgColor: "#ffffff",
  bgColor2: "#eeeeee",
  bgColor3: "#f8f8f8",
  bgColor4: "#f6fbff",
  color: "#000000",
  color2: "#333333",
  shadowColor: "#00000015",
  green: "#005a00",
  shadowColor2: "#080808",
  orange: "#ff9400",
  current: "light",
  cover: "#cbd957",
  footerCover: "#cbd957",

  ...commonTheme,
};
export const darkTheme = {
  ...commonTheme,
  mainColor: "#121212",
  pointColor: "#a08edb",
  bgColor: "#1c1c1c",
  bgColor2: "#17151e",
  bgColor3: "#2c2c2c",
  bgColor4: "#121212",
  color: "#f1f1f1",
  color2: "#dedede",
  green: "#97f4ad",
  shadowColor: "#000000",
  shadowColor2: "#444444",
  orange: "#ff9400",
  current: "dark",
  cover: "#28274f",
  footerCover: "#232037",
  greyColor: "#969696",
  greyColor2: "#484848",
};

export const theme = {
  ligthTheme,
  darkTheme,
};

export default theme;
