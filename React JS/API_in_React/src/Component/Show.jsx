import React from 'react';
import { useState } from 'react';
import axios from 'axios';
const Show = () => {
    const [products,setProducts] =useState([])
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
        <button onClick={getProducts} className='px-2 py-5 bg-red-300 rounded-md'>Call Products</button>
        <br />
        <br />
        <button onClick={addProducts} className='px-2 py-5 bg-red-300 rounded-md'>Save Item</button>
        <hr className='my-10'/>
        <ul>
          {products.length>0? products.map((x,index)=><li key={index} className='rounded w-1/4 p-5 mt-3 bg-red-100'>${x.title}</li>):'Loading...'}
        </ul>
    </>
  )
}

export default Show;
