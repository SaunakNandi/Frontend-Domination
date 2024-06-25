import { lazy, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Suspense } from 'react'

const Home=lazy(()=> import("./components/Home"))
const Contact=lazy(()=> import("./components/Contact"))
const About=lazy(()=> import("./components/About"))


// We are splitting the code using lazy loading.
// If not using lazy loading -> When go to the inspect -> source  in the source go to the page. 
// Go to (top-> localhost->static-> bundle) Inside the bundle file you will find Contact, About and Home that get loaded no matter if you are in Home or Contact page or About page.

// If you implement lazy loading a separate file get created under static. This file will contain the component which get laoded now (i.e the route where you are currently now)
// So in total Our current jsx file has been splitted to use the current component and lazy load the other component

function App() {

  return (
      <BrowserRouter>
        <Suspense fallback={<div className="loader">Loading ...</div>}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
  )
}

export default App
