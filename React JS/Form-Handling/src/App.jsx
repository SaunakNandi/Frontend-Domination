import { useState } from 'react'

import './App.css'

function App() {
  
  const [val,setVal]=useState({name:"",age:""})

  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(val)
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit} className='flex gap-3'>
        <input className='border-2' type="text" 
        onChange={(event)=>setVal({...val,name:event.target.value})}
        placeholder="name" />
        <input className='border-2' type="age" placeholder="age" 
        onChange={(event)=>setVal({...val,age:event.target.value})}/>
        <input className='border-2' type="submit"/>
      </form>
    </>
  )
}

export default App
