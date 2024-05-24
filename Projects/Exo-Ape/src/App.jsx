import { useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full '>
      <Navbar></Navbar>
      <Landing></Landing>
    </div>
  )
}

export default App
