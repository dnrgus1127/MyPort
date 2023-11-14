import { Dispatch, SetStateAction, useState } from "react";



export default function useBoolean(initState : boolean)  :[boolean, ()=>void, Dispatch<SetStateAction<boolean>>]{
    const [isBool, setBool] = useState<boolean>(initState);

    const onToggle = () => {
        setBool(prev => !prev);
    }
    

    return [isBool,onToggle,setBool];
}
