
import {useEffect, useState} from 'react'





function UseCurrency(currency) {
    
   // by default we pass empty string if want to apply loop it does not give error
    const[data , setData]=useState({})
  useEffect(()=>{
  
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    console.log(data);
  },[currency])
//   if there is any change in array we can call

// hamne functionality design ki aur function hee return kar diya
return data
}

export default UseCurrency;