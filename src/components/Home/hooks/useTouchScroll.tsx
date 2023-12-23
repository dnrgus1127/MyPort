import React, { useEffect, useLayoutEffect, useRef } from "react";

const initialTransitionTime = 800;

const max = 5;
const min = 0;

const transition_timing_function = "ease-out";

interface useTouchScrollProps {
  index: number;
  setIndex: (index: number) => void;
}

export default function useTouchScroll({ index, setIndex }: useTouchScrollProps) {
  const scrollWrapper = useRef<HTMLDivElement>(null);
  const transitionTime = useRef<number>(0); // 트랜지션 시간 (드래그 정도에 따라 변화)

  useLayoutEffect(() => {
    if (!scrollWrapper.current) return;
    scrollWrapper.current.style.transition = `transform ${transitionTime.current}ms ${transition_timing_function}`;
    transitionTime.current = initialTransitionTime;
  }, [index]);

  useEffect(() => {
    if (!scrollWrapper.current) return;
    let startY = 0;
    let startScollTop = 0;
    const startSection = scrollWrapper.current.childNodes[index] as HTMLElement;
    const maxScrollTop = startSection.scrollHeight - startSection.clientHeight;

    const touchStartHandler = (e: TouchEvent) => {
      if (!scrollWrapper.current) return;
      startY = e.touches[0].pageY; // 터치를 시작한 y값 기록
      startScollTop = startSection.scrollTop;
      scrollWrapper.current.style.transition = ""; // 터치 드래그 중에 transition이 적용되지 않도록
    };
    const touchMoverHandler = (e: TouchEvent) => {
      if (!scrollWrapper.current) return;
      const currentTouchY = e.changedTouches[0].pageY; // 현재 터치 Y

      let dragDistance = 0; // 드래그 거리
      // 스크롤이 없는 경우
      if (maxScrollTop === 0) {
        dragDistance = currentTouchY - startY;
        if (Math.abs(dragDistance) > window.innerHeight * 0.05) {
          scrollWrapper.current.style.transform = `translateY(calc(${index * -100}% + ${dragDistance}px))`; // 드래그 한 만큼 Y좌표 이동
        }
      }
      // 스크롤이 있는 경우
      else {
        dragDistance = currentTouchY - startY;
        let restScroll = dragDistance < 0 ? maxScrollTop - startScollTop : startScollTop; // 남아있는 스크롤 양
        let overflowScroll = Math.abs(dragDistance) - restScroll; // 초과한 스크롤 양
        if (overflowScroll > 0 && overflowScroll > window.innerHeight * 0.05) {
          // 일정 부분( 가로 드래그를 위해서) 초과하면
          scrollWrapper.current.style.transform = `translateY(calc(${index * -100}% + ${
            overflowScroll * (dragDistance < 0 ? -1 : 1)
          }px))`; // 초과한 양 만큼 translateY
        }
      }
    };
    const touchEndHandler = (e: TouchEvent) => {
      if (!scrollWrapper.current) return;
      if (maxScrollTop === 0) {
        // 스크롤 없는 섹션에서
        const dragDistance = e.changedTouches[0].pageY - startY; // 드래그 거리
        const innerHeight = window.innerHeight; // 화면 길이

        if (Math.abs(dragDistance) > innerHeight * 0.1) {
          // 화면의 일정 부분 이상 드래그 시 다음 섹션으로 전환
          transitionTime.current = initialTransitionTime * (1 - Math.abs(dragDistance) / innerHeight); // 드래그 거리에 따라서 트랜지션 시간 조정
          let nextSection = index + (dragDistance > 0 ? -1 : 1);
          if (nextSection >= min && nextSection <= max) {
            setIndex(nextSection);
          }
        } else {
          // 화면의 일정 부분 이상 드래그 못했을 때 원래 translate 값으로 돌아가기 위함
          scrollWrapper.current.style.transition = `transform ${
            initialTransitionTime * (Math.abs(dragDistance) / innerHeight)
          } ${transition_timing_function}`;
          scrollWrapper.current.style.transform = `translateY(${index * -100}%)`;
        }
        startY = 0;
      }
      if (maxScrollTop > 0) {
        // 스크롤이 있는 섹션
        const dragDistance = e.changedTouches[0].pageY - startY;
        let restScroll = dragDistance < 0 ? maxScrollTop - startScollTop : startScollTop; // 남아있는 스크롤 양
        let overflowScroll = Math.abs(dragDistance) - restScroll; // 초과한 스크롤 양
        if (overflowScroll > 0 && overflowScroll > window.innerHeight * 0.1) {
          // 일정 부분( 가로 드래그를 위해서) 초과하면
          transitionTime.current = initialTransitionTime * (1 - Math.abs(dragDistance) / window.innerHeight); // 드래그 거리에 따라서 트랜지션 시간 조정
          let nextSection = index + (dragDistance > 0 ? -1 : 1);
          if (nextSection >= min && nextSection <= max) {
            setIndex(nextSection);
          }
        } else {
          // 화면의 일정 부분 이상 드래그 못했을 때 원래 translate 값으로 돌아가기 위함
          scrollWrapper.current.style.transition = `transform ${
            initialTransitionTime * (Math.abs(dragDistance) / window.innerHeight)
          } ${transition_timing_function}`;
        }
        startY = 0;
        scrollWrapper.current.style.transform = ``;
      }
    };

    window.addEventListener("touchstart", touchStartHandler);
    window.addEventListener("touchmove", touchMoverHandler);
    window.addEventListener("touchend", touchEndHandler);
    return () => {
      window.removeEventListener("touchstart", touchStartHandler);
      window.removeEventListener("touchmove", touchMoverHandler);
      window.removeEventListener("touchend", touchEndHandler);
    };
  }, [index]);

  const transitionEndHandler = (e: React.TransitionEvent) => {
    if (scrollWrapper.current === e.target) {
      scrollWrapper.current.style.transition = "";
    }
  };

  return { scrollWrapper, transitionEndHandler };
}
