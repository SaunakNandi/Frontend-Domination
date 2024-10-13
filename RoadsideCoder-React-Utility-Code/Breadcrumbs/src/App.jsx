
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import ProductListing from './pages/ProductListing'
import BreadCrumbs from './components/BreadCrumbs'

function App() {
  

  return (
    <>
      <div className="App">
        <BreadCrumbs/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<ProductListing/>}/>
          <Route path='/products/:id' element={<ProductDetails/>}/> 
        </Routes>
      </div>
    </>
  )
}

export default App
