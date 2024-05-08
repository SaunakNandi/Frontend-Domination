import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <>
      <div className="bg-[#1F1E24] w-full h-screen flex ">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
