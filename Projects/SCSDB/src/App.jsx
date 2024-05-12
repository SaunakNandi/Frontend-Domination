import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShow from './components/TvShow'
function App() {


  // developer.themoviedb.org/reference/trending-all
  return (
    <>
      <div className="bg-[#1d1d20] w-full h-screen flex">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/trending" element={<Trending/>}></Route>
          <Route path="/popular" element={<Popular/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
          <Route path="/tv-shows" element={<TvShow/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
