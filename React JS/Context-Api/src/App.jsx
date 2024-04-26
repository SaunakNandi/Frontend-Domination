import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import User from './components/User'
import About from './components/About';
import UserDetails from './components/UserDetails';
function App() 
{

  //const [user, setUser] = useState();

  return (
    <>
      <div className='p-1 container w-1/2 m-auto mb-10'>
        <nav className='my-10  flex justify-center gap-10'>
          <Link to='/'>Home</Link>
          <Link to='/user'>User</Link>
          <Link to='/about'>About</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/user/:id' element={<UserDetails/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Home />
      </div>
    </>
  )
}

export default App
