import  { useCallback, useEffect, useMemo, useState } from 'react'

/**
 * 
 * @param {boolean} state 
 * @returns {[boolean,()=>void]} [컴포넌트 상태, Animation(transition)End 핸들러]
 */
export default function useUnmount(state : boolean) : [boolean,()=>void] {
  const [isComplete, setComplete] = useState(true);

  const shouldRender = useMemo(() => {
    if (state) return true;
    if (isComplete) return false;
    else {
      return true;
    }
    
  }, [state, isComplete]);
  
  useEffect(() => {
    if (state) setComplete(false);
  },[state])
  
  const handleTransitionEnd = useCallback(() => {
    if (!state) setComplete(true);
  }, [state])

  return [shouldRender, handleTransitionEnd];
  
}


export interface UnMountProps {
  handleAnimationEnd: () => void;
}