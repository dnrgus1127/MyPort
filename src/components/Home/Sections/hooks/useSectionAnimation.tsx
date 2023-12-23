import useCurrentSection from "components/Home/hooks/useCurrentSection";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setAnimationState } from "redux/reducer/animationReducer";

export default function useSectionAnimation(sectionIndex: number) {
  const dispatch = useAppDispatch();
  const animationState = useAppSelector((state) => state.sectionAnimation.sectionStates[sectionIndex]);
  const { index } = useCurrentSection();
  useEffect(() => {
    let timerId: NodeJS.Timer;
    if (sectionIndex === index) {
      timerId = setTimeout(() => {
        dispatch(setAnimationState({ sectionIndex, isActive: true }));
      }, 400);
    } else {
      timerId = setTimeout(() => {
        dispatch(setAnimationState({ sectionIndex, isActive: false }));
      }, 800);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [index]);

  return animationState;
}

export function useAnimationState(sectionIndex: number) {
  const animationState = useAppSelector((state) => state.sectionAnimation.sectionStates[sectionIndex]);

  return { isAnimation: animationState === "animation-active", animationState };
}
