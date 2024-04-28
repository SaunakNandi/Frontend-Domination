import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Details from './components/Details'
import { Link, Route, Routes, useLocation } from 'react-router-dom'

function App() {
  const {search,pathname}=useLocation()
  // console.log(search,pathname)
  return (
    <>
      <div className='h-screen w-screen flex'>
        {(pathname!='/' || search.length>0)
        &&
        <Link className='text-red-300 text-4xl absolute left-[17%] top-[3%]' to='/'>Home</Link>
        }
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/details/:id' element={<Details />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
