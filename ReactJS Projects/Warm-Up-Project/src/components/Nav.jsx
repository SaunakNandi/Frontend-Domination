import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [products] = useContext(ProductContext)
  const categories= products && products.reduce((acc,cv)=> [...acc,cv.category],[])
  const distinct_category=[...new Set(categories)]
  // console.log(categories)

  const color=()=>{
    // ${(Math.random()*255).toFixed()} done this 4 times for r,g,b,a
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()})`  // to fixed will remove the decimal value
  }
  
  console.log(color())
  return (
    <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
          <a className='py-3 px-6 rounded border-blue-200 text-blue-600' href="/create">Add New Product</a>
          <hr className='w-[80%] my-3'/>
          <h1 className='text-2xl w-[80%] mb-3'>Category Filter</h1>
          <ul className=' w-[80%]'>
            {
              distinct_category.map((category,i)=>(
                <Link to={`/?category=${category}`} key={i} className='mb-3 flex items-center'>
                  <span style={{backgroundColor: color()}} className='mr-2 w-[15px] h-[15px] rounded-full border border-red-700' 
                  ></span>
                  <span className='uppercase'>{
                  category}</span>
                </Link>
              ))
            }
            
          </ul>
    </nav>
  )
}

export default Nav