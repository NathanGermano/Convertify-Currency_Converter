import { useState } from "react"

function convertNumber(number){
    if(!number) return 0
    number = number.trim()

    if(number.includes(',')){
        number = number.replace(/\./g, '').replace(/\,/g, '.')
        return parseFloat(number)
    }   
    
    number = number.replace(/\./g, '')

    return parseFloat(number)
}

export default function useConvertMoney({inputValue,firstSelectValue, secondSelectValue, rates}){
    const [result, setResult] = useState(0)

    const convertMoney = (ev) => {
        ev.preventDefault()
        const calc = convertNumber(inputValue) * (rates[secondSelectValue] / rates[firstSelectValue])
        const formatted  = calc.toLocaleString(secondSelectValue === 'BRL' ? 'pt-BR' : 'en-US', {
            style: 'currency',
            currency: secondSelectValue
        })
        setResult(formatted)
    }
    return {result, convertMoney}
}