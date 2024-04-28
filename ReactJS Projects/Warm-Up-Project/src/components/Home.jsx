import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/axios'
const Home = () => {
  const [products]=useContext(ProductContext)
  console.log(products)

  const {search} = useLocation()
  const category = decodeURIComponent(search.split("=")[1])
  const [filteredProducts,setfilteredProducts]=useState(null)
  const get_product_category = async()=>{
    try{
      const {data}=await axios.get(`/products/category/${category}`)
      setfilteredProducts(data)
    }
    catch(error)
    {
      console.log(error)
    }
  }

  // useEffect is dependent on poducts also because the page is getting rendered before the products value is received. So even if the products value is received later at some time than update setfilteredProducts to re-render the page
  
  useEffect(()=>
  {
    // if(!filteredProducts || !search)  // if you use this then put search on useEffect dependency array
    //   setfilteredProducts(products)
    if(!filteredProducts || category==='undefined')
      setfilteredProducts(products)
    else if(category!= "undefined") 
      get_product_category()
  },[category,products])
  return (
    filteredProducts?
    (
    <>
        <Nav/>
        <div className="w-[85%] p-10 pt-[4%] flex flex-wrap">

          { filteredProducts.map((x)=>(
            <Link key={x.id} to={`/details/${String(Number(x.id) - 1)}`} className='mb-3 mr-3 card p-3 border shadow-orange-200 rounded-sm w-[18%] h-[35vh] flex justify-center flex-col'>
              <div className='hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3'
              style={{backgroundImage:`url(${x.image})`}}></div>
              <h1 className='hover:text-blue-300'>{x.title}</h1>
            </Link>
          ))}
          
        </div>
    </>
    ):(<Loading/>)
  )
}

export default Home