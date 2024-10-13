import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductListing() {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        async function fetchData() {
            const response=await fetch('https://dummyjson.com/products')
            const data=await response.json()
            setProducts(data.products)
        } 
        fetchData()
    },[])
  return (
    <div>
        <h2>Home</h2>
        <span>Trending Products</span>
        <div className="product-grid">
            {
                products.map((product)=>(
                        <div className="product-card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.thumbnail} alt={product.title}/>
                                <h3>{product.title}</h3>
                                <h3>${product.price}</h3>
                            </Link>
                        </div>
                    )
                )
            }
        </div> 
    </div>
  )
}
