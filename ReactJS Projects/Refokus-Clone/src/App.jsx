import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Work } from './components/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-zinc-900 text-white font-["satoshi"]'>
        <Navbar />  
        <Work/>
      </div>
    </>
  )
}

export default App
