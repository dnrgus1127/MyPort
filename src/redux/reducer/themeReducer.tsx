import { createSlice } from '@reduxjs/toolkit';
import React from 'react'
import { RootState } from 'redux/store';


interface themeState  {
    theme: "dark" | "light";
}

const initialState: themeState = {
    theme: "dark",
}


export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "dark" ? "light" : "dark";
        },
        
    }
})


export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;