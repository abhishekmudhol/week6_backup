import React, { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const buttonClick = useCallback( function buttonClick(){
    console.log('inputFunction');
  },[])

  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button><br/>
        <Demo inputFunction={buttonClick}/>
    </>
  )
}

const Demo = React.memo(function Demo({inputFunction}){
  console.log('Demo');
  return(
    <button onClick={inputFunction}>click me</button>
  )
}) 

export default App
