import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCount from './useCount'

function App() {
  const {count,increment,decrement,restart}=useCount()
  return (
    <>
      <div className="App">
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
  	    <button onClick={decrement}>-</button>
  	    <button onClick={restart}>Restart</button>

      </div>
    </>
  )
}

export default App
