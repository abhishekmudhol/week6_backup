import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const divRef = useRef()

  useEffect(()=>{
    setTimeout(()=>{
      console.log(divRef.current); 
      console.log(divRef.current.innerHTML);
      divRef.current.innerHTML = '10000'
    },4000)
  },[])

  let incomeTax = 20000
  
  return (
      <b>your income tax is <div ref={divRef}> tax {incomeTax}</div></b>
  )
}

export default App
