import React from 'react';
import { useState,useEffect } from 'react';
import axios from '../utils/axios';
const Show = () => {
    const [products,setProducts] =useState([])
    const getProducts = () =>{
      axios.get("/products").then(products => {
        console.log(products)
        setProducts(products.data)
      }).catch(err=> console.log(err))
    }
    const addProducts = () =>{
        axios.post("/products",{
          title:"test product",
          price:13.5,
          description: "lorem ipsum",
          image:"https://i.pravatar.cc",
          category:"electronic"
        }).then(res => {
          console.log(res)
        }).catch(err=> console.log(err))
      }
    
    useEffect(() => { 
      getProducts() 
    }, []);
  return (
    <>
        {/* <button onClick={getProducts} className='px-2 py-5 bg-red-300 rounded-md'>Call Products</button>
        <br />
        <br /> */}
        <button onClick={addProducts} className='px-2 py-5 bg-red-300 rounded-md'>Save Item</button>
        <hr className='my-10'/>
        <ul className="pt-5">
          {products.length>0? products.map((x,index)=><li key={index} className='rounded w-1/4 p-5 mt-3 bg-red-100'>{x.title}</li>):'Loading...'}
        </ul>
    </>
  )
}

export default Show;
