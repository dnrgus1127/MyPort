import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setAnimationState } from "redux/reducer/animationReducer";

export default function useSectionAnimation(sectionIndex : number) {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const animationState = useAppSelector(state => state.sectionAnimation.sectionStates[sectionIndex]);
    useEffect(() => {
        let timerId: NodeJS.Timer;
        if (sectionIndex === Number(location.hash.substring(1))) {
            timerId = setTimeout(() => {
                dispatch(setAnimationState({ sectionIndex, isActive: true }))
            },400)
        }
        else {
            timerId = setTimeout(() => {
                dispatch(setAnimationState({ sectionIndex, isActive: false }));
            },800)
        }

        return () => {
            clearTimeout(timerId);
        }


    },[location.hash])
    

    return animationState;
}
