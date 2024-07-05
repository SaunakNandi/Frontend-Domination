import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Base from './Base'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Base/>
    </>
  )
}

export default App
