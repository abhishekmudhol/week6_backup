import React, { useEffect, useState } from 'react';

function App() {
  const[todos , setTodos] = useState([])

  async function pollTodos(){
    const response = await fetch('https://sum-server.100xdevs.com/todos')
    const data = await response.json()
    setTodos(data.todos)
  } 


  useEffect(() => {
    let intervalId = setInterval(()=>{
      pollTodos()
    },2400)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      {
        todos.map((item)=> <Todo key={item.id} title={item.title} description={item.description}/>)
      }
    </div>
  );
}

function Todo({title , description}){
  return(
    <>
      <h2>{title}</h2>
      <h4>{description}</h4>
    </>
  )
}

export default App;
