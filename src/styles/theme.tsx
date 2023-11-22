const commonTheme = {
    
}

export const ligthTheme = {
    mainColor: "#787eb6",
    bgColor: "#ffffff",
    bgColor2: "#eeeeee",
    bgColor3: "#f8f8f8",
    bgColor4: "#f6fbff",
    color : "#000000",
    color2: "#333333",
    shadowColor: "#f8f8f800",
    shadowColor2 : "#080808",
    ...commonTheme
}
export const darkTheme = {
    mainColor: "#121212",
    pointColor: "#2c2c2c",
    bgColor: "#1c1c1c",
    bgColor2: "#333333",
    bgColor3: "#2c2c2c",
    bgColor4: "#121212",
    color: "#FFFFFF",
    color2: "#dedede",
    green: "#97f4ad",
    shadowColor: "#080808",
    shadowColor2: "#444444",

    ...commonTheme
}


export const theme = {
    ligthTheme,
    darkTheme,
}

export default theme;