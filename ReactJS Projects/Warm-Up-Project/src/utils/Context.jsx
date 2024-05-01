import React, { useEffect, useState,createContext } from 'react'
import axios from './axios'
export const ProductContext=createContext()

const Context = (props) => {
    
    const [products,setProducts]=useState(
        JSON.parse(localStorage.getItem("products") || null)
    )
    const getProducts=async()=>{
        try{
            if(!localStorage.getItem("products"))
            {
                console.log("called")
                const {data}=await axios("/products")
                localStorage.setItem("products",data)
                setProducts(data)
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <ProductContext.Provider value={[products,setProducts]}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default Context