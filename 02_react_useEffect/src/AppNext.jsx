import React, { useEffect, useState } from 'react';



function AppNext() {
  const [id ,setId] = useState(1)
  return (
    <>
    <button onClick={()=>{setId((prev)=> prev + 1)} }>update Id</button>
      <Todo id={id}/>
    </>
  );
}

function Todo({id}){
  const[todos , setTodos] = useState({})

  async function pollTodos(){
    const response = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
    const data = await response.json()
    setTodos(data.todo)
  } 

  useEffect(() => {
      pollTodos()
  }, [id])

  return(
    <div>
      <h2>{todos.title == undefined ? "loading...." : todos.title}</h2>
      <h4>{todos.description == undefined ? "wait...." : todos.description}</h4>
    </div>
  )
}

export default AppNext;
