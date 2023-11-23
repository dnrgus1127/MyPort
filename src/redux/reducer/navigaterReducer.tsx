
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export enum DirectionType { NORTH, SOUTH, WEST, EAST };

interface NavigateState {
    path: string;
    direction: DirectionType;
    prevPath?: string;
}

const initialState: NavigateState = {
    path: "init",
    direction: DirectionType.NORTH,
    prevPath : "init",
 
}


export const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        changePath: (state, action: PayloadAction<NavigateState>) => {
            state.path = action.payload.path;
            state.direction = action.payload.direction;
        },
        clearPath: (state) => {
            state.prevPath = state.path;
            state.path = "init";
        }
    }
})


export const { changePath,clearPath } = navigationSlice.actions;

export const selectCount = (state: RootState) => state.navigation.path;

export default navigationSlice.reducer;