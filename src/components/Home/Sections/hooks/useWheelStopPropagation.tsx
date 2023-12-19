import React, { RefObject, useCallback, useRef } from "react";

export default function useWheelStopPropagation<T extends HTMLElement>(
  enable?: boolean
): { ref: RefObject<T>; onWheel: (e: React.WheelEvent | React.TouchEvent) => void } {
  const wheelElement = useRef<T>(null);

  const onWheel = useCallback((e: React.WheelEvent | React.TouchEvent) => {
    if (!wheelElement.current) return;
    if (wheelElement.current.scrollHeight > wheelElement.current.clientHeight) {
      // 스크롤 존재 여부 체크
      e.stopPropagation();
      e.nativeEvent.stopPropagation();
    }
  }, []);

  return { ref: wheelElement, onWheel };
}
