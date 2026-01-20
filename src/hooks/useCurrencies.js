import { useEffect, useState } from "react"

export default function useCurrencies(){
    const [currencies, setCurrencies] = useState({})
    const [rates, setRates] = useState()

    useEffect(()=>{
        fetch("https://api.frankfurter.app/currencies")
        .then(res => res.json())
        .then(data => {
        setCurrencies(data)
    })
        .catch(err => console.error({message:'Currencies not found!', err}))
    }, [])

    useEffect(()=> {
        fetch("https://api.frankfurter.app/latest")
        .then(res => res.json())
        .then(data => {
            setRates({EUR: 1, ...data.rates})
        })
    }, [])

    return {currencies, rates}
}