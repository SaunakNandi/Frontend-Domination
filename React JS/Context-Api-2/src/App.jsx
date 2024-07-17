import { useEffect,useState } from 'react'
import { Routes, Route } from'react-router-dom'
import Home from './component/Home'
import User from './component/User'

function App() 
{

  return (
    <>
    
      <div className='mt-5 p-5 w-[80%] bg-green-100 mx-auto'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/users/:id' element={<User/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
