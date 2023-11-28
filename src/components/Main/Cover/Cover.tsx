import React from 'react'
import CoverTemplate from './CoverTemplate';
import { CoverTarnslate } from 'constans/enum/CoverTranslate';
import { DirectionType } from 'redux/reducer/navigaterReducer';
import useCustomNavigate from 'hooks/useCustomNavigate';
import CoverTitle from './CoverTitle';



export default function Cover() {
  const [gotoPage] = useCustomNavigate();  

  const arrowButtonHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    let currentValue = e.currentTarget.value;
    
    if (Number(currentValue) === CoverTarnslate.down) {
      gotoPage("/project/main" , DirectionType.SOUTH);
    }
    else if (Number(currentValue) === CoverTarnslate.up) {
      gotoPage("/test", DirectionType.NORTH);
      
    }
    else if (Number(currentValue) === CoverTarnslate.right) {
      gotoPage("/blog/main", DirectionType.EAST);
    }
  } 
  
  return (
    <CoverTemplate arrowButtonHandler={arrowButtonHandler}  >
      <CoverTitle/>
    </CoverTemplate>
  )
}
