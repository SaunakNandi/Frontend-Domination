import { useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full overflow-x-hidden'>
      <Navbar></Navbar>
      <Landing></Landing>
      <Work/>
    </div>
  )
}

export default App
