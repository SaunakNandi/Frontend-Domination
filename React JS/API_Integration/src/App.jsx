import { useState } from 'react'
import Home from './components/Home'
import Show from './components/Show'
import Service from './components/Service'
import {Link,Route,Routes} from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className='pt-[5%] pl-[5%]'>
      <nav className='flex justify-center gap-10'>
        <Link to="/">Home</Link>
        <Link to="/service">Service</Link>
        <Link to="/show">Show</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/show" element={<Show/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
      </Routes>
    </div> */}
  </>
  )
}

export default App
