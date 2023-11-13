import React, {  useEffect, useState } from 'react'
import { useLocation,useNavigate } from "react-router-dom"
import CoverTemplate from './CoverTemplate';
import { CoverTarnslate } from 'constans/enum/CoverTranslate';
import { useAppDispatch } from 'redux/hooks';
import { DirectionType, changePath } from 'redux/reducer/navigaterReducer';


const title = "FrontEnd Portfolio"

export default function Cover() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  

  const arrowButtonHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    let currentValue = e.currentTarget.value;
    
    if (Number(currentValue) === CoverTarnslate.down) {
      dispatch(changePath({path :"/project/main" , direction : DirectionType.SOUTH}));
    }
    else if (Number(currentValue) === CoverTarnslate.up) {
      dispatch(changePath({path :"/test" , direction : DirectionType.NORTH}));
  }
  } 
  
  return (
    <CoverTemplate title={title} arrowButtonHandler={arrowButtonHandler}  />
  )
}
