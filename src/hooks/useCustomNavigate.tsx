import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks'
import { DirectionType, changePath } from 'redux/reducer/navigaterReducer';

type CustomNavigateReturnType = [ (path: string, direction: DirectionType) => void,() => void,];


export default function useCustomNavigate() : CustomNavigateReturnType{
    const dispatch = useAppDispatch();
    
    const gotoPrevPage = useCallback(() => {
        dispatch(changePath({ path: "-1", direction: DirectionType.WEST }));
    }, [])
    const gotoPage = useCallback((path:string, direction : DirectionType) => {
        dispatch(changePath({path, direction}))
    },[])
    
    return [ gotoPage,gotoPrevPage];
}
