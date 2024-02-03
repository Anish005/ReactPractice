import {useEffect, useState} from "react"
// creating your own custom hook
// we can also use pre built in hooks in creating custom hooks
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    //when the hooks get called or load make an api call
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}
export default useCurrencyInfo;