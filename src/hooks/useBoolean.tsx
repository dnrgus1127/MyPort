import { Dispatch, SetStateAction, useCallback, useState } from "react";



export default function useBoolean(initState : boolean)  :[boolean, ()=>void, Dispatch<SetStateAction<boolean>>]{
    const [isBool, setBool] = useState<boolean>(initState);

    const onToggle = useCallback(() => {
        setBool(prev => !prev);
    },[])
    

    return [isBool,onToggle,setBool];
}
