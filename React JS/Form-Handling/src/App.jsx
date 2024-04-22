import { useRef, useState } from 'react'

import './App.css'

function App() {
  
  const name=useRef(null)
  const age=useRef(null)

  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(name.currentValue)
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit} className='flex gap-3'>
        <input className='border-2' type="text" ref={name} placeholder="name" />
        <input className='border-2' type="age" ref={age} placeholder="age" />
        <input className='border-2' type="submit"/>
      </form>
    </>
  )
}

export default App
