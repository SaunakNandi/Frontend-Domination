import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShow from './components/TvShow'
import People from './components/People'
import MovieDetails from './components/MovieDetails'
import TvDetails from './components/TvDetails'
import PersonDetails from './components/PersonDetails'
function App() {


  // developer.themoviedb.org/reference/trending-all
  return (
    <>
      <div className="bg-[#1d1d20] w-full h-screen flex">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/trending" element={<Trending/>}></Route>
          <Route path="/popular" element={<Popular/>}></Route>
          <Route path="/movie" element={<Movies/>}></Route>
          <Route path='/movie/details/:id' element={<MovieDetails/>}></Route>
          <Route path="/tv" element={<TvShow/>}></Route>
          <Route path='/tv/details/:id' element={<TvDetails/>}></Route>
          <Route path="/person" element={<People/>}></Route>
          <Route path='/person/details/:id' element={<PersonDetails/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
