import { useMemo, useState } from "react";

export function Assignment1() {
    const [input, setInput] = useState(0);
    const [count , setCount] = useState(0)
    // Your solution starts here

    console.log('App');
    const expensiveValue = useMemo(()=>{
        console.log('usememo');
        let result = 1;
        for(let i = input ; i >= 1 ; i--){
            result = result*i
        }
        return result
    },[input]) 
    // 5 = 5*4*3*2*1

    let timeoutId;
    function inputHandler(e) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(()=>{
            setInput(Number(e.target.value))
        },2000)
    }

    return (
        <div>
            <input 
                type="number" 

                onChange={inputHandler} 
            />
            <p>Calculated Value: {expensiveValue}</p>
            <button onClick={()=>{setCount(prev=> prev + 1)}}> counter {count}</button>
        </div>
    );
}