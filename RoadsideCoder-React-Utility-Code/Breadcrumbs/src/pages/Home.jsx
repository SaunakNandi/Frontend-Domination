import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        async function fetchData() {
        const response=await fetch('https://dummyjson.com/products')
        const data=await response.json()
        const sliceProducts=data.products.slice(0,6)
        setProducts(sliceProducts)
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
                            </Link>
                        </div>
                    )
                )
            }
            <Link to='/products'>
                <button style={{width:"100%",padding:10}}>View all products</button>
            </Link>
        </div>
    </div>
  )
}
