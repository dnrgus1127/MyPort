import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

const SECTION_COUNTS = 6;

const initialState = {
    sectionStates: new Array<"animation-deactive" | "animation-active">(SECTION_COUNTS).fill("animation-deactive"),
}


export const animationSlice = createSlice({
    name: "sectionAnimation",
    initialState,
    reducers: {
        setAnimationState: (state, action: PayloadAction<{sectionIndex : number, isActive :boolean}>) => {
            state.sectionStates[action.payload.sectionIndex] = action.payload.isActive ? "animation-active" : "animation-deactive";
        }
    }
})

export const { setAnimationState } = animationSlice.actions;

export default animationSlice.reducer;