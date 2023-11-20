import React, {  useEffect, useState } from 'react'
import { useLocation,useNavigate } from "react-router-dom"
import CoverTemplate from './CoverTemplate';
import { CoverTarnslate } from 'constans/enum/CoverTranslate';
import { useAppDispatch } from 'redux/hooks';
import { DirectionType, changePath } from 'redux/reducer/navigaterReducer';
import useCustomNavigate from 'hooks/useCustomNavigate';


const title = "FrontEnd Portfolio"

export default function Cover() {
  const [gotoPage] = useCustomNavigate();  

  const arrowButtonHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    let currentValue = e.currentTarget.value;
    
    if (Number(currentValue) === CoverTarnslate.down) {
      gotoPage("/project/main" , DirectionType.SOUTH);
    }
    else if (Number(currentValue) === CoverTarnslate.up) {
      gotoPage("/test" , DirectionType.NORTH);
  }
  } 
  
  return (
    <CoverTemplate title={title} arrowButtonHandler={arrowButtonHandler}  />
  )
}
