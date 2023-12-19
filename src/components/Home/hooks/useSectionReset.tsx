import { useEffect } from "react";
import { useLocation } from "react-router-dom";



export default function useSectionReset(resetFunc : () => void) {
    const location = useLocation();
    useEffect(() => {
        resetFunc();
    },[location.hash])
}
