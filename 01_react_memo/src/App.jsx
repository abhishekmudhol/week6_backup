import React, { useState } from 'react'

import './App.css'

function App() {
  const [title, setTitle] = useState(0)

  return (
    <div>
      <button onClick={()=>{setTitle(Math.random())}}>click me to change title</button>
      <Title title={'abhishek'}/>
      <Title title={'abhishek'}/>
      <Title title={title}/>
      <Title title={'abhishek'}/>
      <Title title={'abhishek'}/>
      <Title title={title}/>
      <Title title={'abhishek'}/>
      <Title title={'abhishek'}/>
    </div>
  )
}

const Title = React.memo(function Title({title}){
  return(
    <>
      <div>my name is {title}</div>
    </>
  )
})

export default App
