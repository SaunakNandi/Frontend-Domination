import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [products, setProducts] = useState(0)
  const [page,setPage]=useState(1)

  const fetchProducts= async()=>{
    const res= await fetch("https://dummyjson.com/products")
    const data=await res.json()

    if(data && data.products)
      setProducts(data.products)
  }

  useEffect(()=>{
    fetchProducts()
  },[])
  
  const selectPageHandler=(selectedPage)=>{
    if(selectedPage>=1 && selectedPage<=products.length/10)
      setPage(selectedPage)
  }

  return (
    <>
        {products && 
            <div className="products">
              {
                products.slice(page*10 -10,page*10).map((item,ind)=>(
                  <span className='products__single' key={ind}>
                    <img src={item.thumbnail} alt={item.title} />
                    <span>{item.title}</span>
                  </span>
                ))
              }
            </div>
          }
          {
            products && 
            <div className="pagination">
              <span onClick={()=>selectPageHandler(page-1)}
              className={page>1 ?"":"pagination_disable"}>👈</span>
              {
                [...Array(products.length/10)].map((_,i)=>(
                  <span onClick={()=>selectPageHandler(i+1)} key={i}
                  className={page===i+1?"pagination_selected":""}>{i+1}</span>
                ))
              }
              <span onClick={()=>selectPageHandler(page+1)}
              className={page<products.length/10 ?"":"pagination_disable"}>👉</span>
            </div>
          }
    </>
  )
}

export default App
