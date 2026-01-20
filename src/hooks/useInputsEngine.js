import { useState } from "react"

export default function useInputEngine(){
    const [inputValue, setInputsValue] = useState('')
    
    function attValueInput(ev){
        const newValue = ev.target.value.replace(/[^0-9.,]/g, '')
        setInputsValue(newValue)
    }

    return {inputValue, attValueInput}
}