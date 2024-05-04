import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Work } from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full bg-zinc-900 text-white font-["satoshi"]'>
        <Navbar />  
        <Work/>
        <Stripes/>
        <Products/>
        <Marquees/>
      </div>
    </>
  )
}

export default App
