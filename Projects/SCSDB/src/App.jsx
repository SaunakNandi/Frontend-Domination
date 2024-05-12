import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet"/>
function App() {


  // developer.themoviedb.org/reference/trending-all
  return (
    <>
      <div className="bg-[#1d1d20] w-full h-screen flex">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/trending" element={<Trending/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
