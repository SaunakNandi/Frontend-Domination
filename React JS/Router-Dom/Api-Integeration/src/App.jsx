import { useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {

  cosnt [products,setProducts] =useState([])
  const getProducts = () =>{
    const api="https://fakestoreapi.com/products"
    axios.get(api).then(products => {
      console.log(products)
      setProducts(products.data)
    }).catch(err=> console.log(err))
  }
  const addProducts = () =>{
    const api="https://fakestoreapi.com/products"
    axios.post(api,{
      title:"test product",
      price:13.5,
      description: "lorem ipsum",
      image:"https://i.pravatar.cc",
      category:"electronic"
    }).then(res => {
      console.log(res)
    }).catch(err=> console.log(err))
  }
  return (
    <>
      <div className='pt-[5%] pl-[5%]'>
        <button onClick={getProducts} className='px-2 py-5 bg-red-300 rounded-md'>Call Products</button>
        <br />
        <br />
        <button onClick={addProducts} className='px-2 py-5 bg-red-300 rounded-md'>Save Item</button>
        <hr className='my-10'/>
        <ul>
          <li className='rounded w-1/4 p-5 bg-red-100'>Product Name</li>
          <li>Product Name</li>
        </ul>
      </div>
    </>
  )
}

export default App
