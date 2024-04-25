import { useState } from 'react'
import Home from './Component/Home'
import Show from './Component/Show'
import Service from './Component/Service'
import { Link, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='pt-[5%] pl-[5%]'>
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
      </div>
    </>
  )
}

export default App
