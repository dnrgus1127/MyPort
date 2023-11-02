import { useState } from "react";


export default function useBoolean(initState : boolean) {
    const [isBool, setBool] = useState<boolean>(initState);

    function onToggle() {
        setBool(prev => !prev);
    }

    return [isBool,onToggle,setBool]
}
