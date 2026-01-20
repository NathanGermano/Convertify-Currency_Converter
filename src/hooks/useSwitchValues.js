import { useState } from "react";

function getCurrencySymbol(code){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: code,
        currencyDisplay: 'narrowSymbol'
    })

    const parts = formatter.formatToParts(1);
    const symbol = parts.find(p => p.type === 'currency')?.value || code
    return symbol
}

export default function useSwitchValues(){
    const [firstSelectValue, setFirstSelectValue] = useState('USD')
    const [secondSelectValue, setSecondSelectValue] = useState('BRL')

    const [firstSelectSymbol, setFirstSelectSymbol] = useState('$')
    const [secondSelectSymbol, setSecondSelectSymbol] = useState('R$')

    const attFirstSelectValue = (ev) => {
        const newValue = ev.target.value
        setFirstSelectValue(newValue)
        setFirstSelectSymbol(getCurrencySymbol(newValue))
    }
    
    const attSecondSelectValue = (ev) =>{
        const newValue = ev.target.value
        setSecondSelectValue(newValue)
        setSecondSelectSymbol(getCurrencySymbol(newValue))
    }

    const switchButton = () => {
        const tempCurrency = firstSelectValue 
        setFirstSelectValue(secondSelectValue)
        setSecondSelectValue(tempCurrency)

        const tempSymbol = firstSelectSymbol
        setFirstSelectSymbol(secondSelectSymbol)
        setSecondSelectSymbol(tempSymbol)
    }

    return {
            firstSelectValue, 
            secondSelectValue, 
            firstSelectSymbol, 
            attFirstSelectValue, 
            attSecondSelectValue, 
            switchButton
        }
}