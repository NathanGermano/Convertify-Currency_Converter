import { useEffect, useState } from "react"

export default function useSwitchTheme(){
    const [isLightTheme, setIsLightTheme ] = useState(false)
    
    function toggleTheme(){
        setIsLightTheme(prev => !prev)
    }
    
    useEffect(()=>{
        if(isLightTheme){
            document.body.classList.add('light-theme')
        }else{
            document.body.classList.remove('light-theme')
        }
    }, [isLightTheme])

    return {toggleTheme, isLightTheme, setIsLightTheme}
}