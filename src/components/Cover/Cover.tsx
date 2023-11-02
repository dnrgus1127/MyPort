import React, { useCallback, useEffect, useState } from 'react'
import { useLocation,useNavigate } from "react-router-dom"
import CoverTemplate from './CoverTemplate';
import { CoverTarnslate } from 'constans/enum/CoverTranslate';


const title = "Daily Portfolio"

export default function Cover() {
  const navigate = useNavigate();
  const location = useLocation();
  const [coverState, setCoverState] = useState<CoverTarnslate>(CoverTarnslate.center);
   

  useEffect(() => {
    let currentLocation = location.pathname.substring(1);
    if (currentLocation === 'gitRepo') {
      setCoverState(CoverTarnslate.down);
    }
  }, [])
  

  const arrowButtonHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    let currentValue = e.currentTarget.value;
    if (coverState !== CoverTarnslate.center) {
      setCoverState(CoverTarnslate.center);
      return;
    }

    if (Number(currentValue) === CoverTarnslate.down) {
      setCoverState(CoverTarnslate.down);
      navigate("/gitRepo")
    }
    else if (Number(currentValue) === CoverTarnslate.up) {
      setCoverState(CoverTarnslate.up);
      navigate("/test")
  }
  } 
  
  return (
    <CoverTemplate title={title} arrowButtonHandler={arrowButtonHandler} location={coverState} />
  )
}