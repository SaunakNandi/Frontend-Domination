import React,{useEffect, useState} from 'react'
import axios from '../utils/axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'
import { useContext } from 'react'
import { ProductContext } from '../utils/Context'

const Details = () => 
{
  const navigate=useNavigate()
  const [products,setProducts]=useContext(ProductContext)
  const [item,setItems]=useState(null)
  let {id}=useParams()
  
  useEffect(()=>{
    // getSingleProduct()
    if(!item){
      setItems(products.filter(i=>i.id==id)[0])
    }
  },[])
  
  const ProductDeleteHandler=(id)=>{
    const FilterdProducts=products.filter((p)=>p.id!=id)
    setProducts(FilterdProducts)
    localStorage.setItem("products",JSON.stringify(FilterdProducts))
    navigate("/")
  }


  return (
    item?(
    <div className='w-[70%] h-full container m-auto p-[10%] flex items-center gap-[10%]'>

        <img className='h-[80%] w-[40%] object-contain'
         src={`${item.image}`} alt="" />
        <div className="content w-[50%] mb-[8%]">
            <h1 className='text-4xl'>
              {item.title}</h1>
            <h3 className="text-zinc-400 my-5">{item.category}</h3>
            <h2 className='text-zinc-500 mb-3'>$ {item.price}</h2>
            <h5 className='mb-[5%]'>{item.description}</h5>
            <Link to={`/edit/${item.id}`} className='py-2 px-5 border rounded border-blue-200 text-blue-300'>Edit</Link>
            <button onClick={()=>ProductDeleteHandler(item.id)} className='py-2 ml-3 px-5 border rounded border-red-300 text-red-300'>Delete</button>
        </div>
    </div>):(<Loading/>)
  )
}

export default Details