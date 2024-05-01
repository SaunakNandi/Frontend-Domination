import { useState } from 'react'
import './App.css'
import Users from './components/Users'
import Products from "./components/Products"
import Home from './components/Home'
import { Link, Routes, Route } from'react-router-dom'
function App() {
  
  return (
    <>
    <div className='w-screen h-screen'>
      <nav className='py-5 flex justify-center gap-10'>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
    </>
  )
}

export default App
