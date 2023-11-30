const commonTheme = {
    
}

export const ligthTheme = {
    mainColor: "#787eb6",
    pointColor: "#ff4d79",
    bgColor: "#ffffff",
    bgColor2: "#eeeeee",
    bgColor3: "#f8f8f8",
    bgColor4: "#f6fbff",
    color : "#000000",
    color2: "#333333",
    shadowColor: "#00000015",
    green: "#005a00",
    shadowColor2: "#080808",
    orange:"#ff9400",
    current: "light",

    ...commonTheme
}
export const darkTheme = {
    mainColor: "#121212",
    pointColor: "#a08edb",
    bgColor: "#1c1c1c",
    bgColor2: "#333333",
    bgColor3: "#2c2c2c",
    bgColor4: "#121212",
    color: "#f1f1f1",
    color2: "#dedede",
    green: "#97f4ad",
    shadowColor: "#000000",
    shadowColor2: "#444444",
    orange:"#ff9400",
    current: "dark",

    ...commonTheme
}


export const theme = {
    ligthTheme,
    darkTheme,
}

export default theme;