import { useMemo, useState } from 'react'
import './App.css'

function App() {
  console.log('1');
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(1)
  console.log('2');

  // let intervalId ;
  // function inputHandler(e){
  //   clearInterval(intervalId)
  //   intervalId = setInterval(()=>{    //useSetTimeout 
  //     setInput(e.target.value)
  //   },2000)
  // } 
  
  function inputHandler(e){
      setInput(e.target.value)
  } 

  console.log('3');
  
  let finalSum = useMemo(()=>{
    let sum = 0;
    console.log('useMemo');
    for(let i = 1 ; i <= input ; i++){
      console.log('4');
      sum = sum + i
    }
    return sum
  },[input])
  
  console.log('5');
  return (
    <div>
      <input onChange={inputHandler} type='number' placeholder='n'/><br/>
      Sum from 1 to is {finalSum} <br/>
      <button onClick={()=> setCount((prev)=>prev + 1)}> Counter {count}</button>
    </div>
  )
}

export default App
