import React, {  useEffect, useState } from 'react'
import { useLocation,useNavigate } from "react-router-dom"
import CoverTemplate from './CoverTemplate';
import { CoverTarnslate } from 'constans/enum/CoverTranslate';


const title = "FrontEnd Portfolio"

export default function Cover() {
  const navigate = useNavigate();
  const location = useLocation();
  const [coverState, setCoverState] = useState<CoverTarnslate>(CoverTarnslate.center);
   

  useEffect(() => {
    
    if (location.pathname === "/") {
      setCoverState(CoverTarnslate.center);
    } 
    if (location.pathname.startsWith('/project')) {
      setCoverState(CoverTarnslate.down);
    }
    if (location.pathname.startsWith('/test')) {
      setCoverState(CoverTarnslate.up);
    }
  }, [location])
  

  const arrowButtonHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    let currentValue = e.currentTarget.value;
    if (coverState !== CoverTarnslate.center) {
      setCoverState(CoverTarnslate.center);
    
      return;
    }

    if (Number(currentValue) === CoverTarnslate.down) {
      setCoverState(CoverTarnslate.down);
      navigate("/project/main")
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
