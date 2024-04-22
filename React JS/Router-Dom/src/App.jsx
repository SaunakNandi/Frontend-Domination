import { useState } from 'react'
import {Link, Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to='/home'>Home</Link>
        <Link to='/user'>User</Link>
        <Link to='/about'>About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
