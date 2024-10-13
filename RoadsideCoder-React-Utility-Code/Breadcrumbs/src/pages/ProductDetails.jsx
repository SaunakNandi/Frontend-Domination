import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const {id}=useParams()
    const [prod,setProd]=useState(null)
    const [loading,setLoading]=useState(true)
    async function fetchData() {
        const response=await fetch(`https://dummyjson.com/products/${id}`)
        const data=await response.json()
        setProd(data)
        setLoading(false)
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        <h2>{prod?.title}</h2>
        {
            !loading && prod? (
                <div style={{display: 'flex'}}>
                    <img src={prod.thumbnail} alt={prod.title}/>
                    <h3>${prod.price}</h3>
                    <p>{prod.description}</p>
                </div>
            ):(
                <p>Loading...</p>
            )
        }
    </div>
  )
}
