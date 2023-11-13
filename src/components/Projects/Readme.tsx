import React from 'react'
import { useAppDispatch } from 'redux/hooks';
import { DirectionType, changePath } from 'redux/reducer/navigaterReducer';

export default function Readme() {
  const dispatch = useAppDispatch();
  return (
      <div>
      <button onClick={() => {  
          dispatch(changePath({path : "-1", direction :DirectionType.WEST}));
          }}>뒤로가기</button>
    </div>
  )
}
