import React,{useEffect, useState} from 'react'
import axios from '../utils/axios'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading'

const Details = () => {
  const [item,setItems]=useState()
  let {id}=useParams()
  id = String(Number(id) + 1);
  console.log(typeof(id)," ",id)
  const getSingleProduct=async()=>{
    try{
      const {data}=await axios.get(`/products/${id}`)
      console.log(data)
      setItems(data)
    }
    catch(err)
    {
      console.log(err)
    }
  }
  useEffect(()=>{
    getSingleProduct()
  },[])
  console.log(item)
  return (
    item?(
    <div className='w-[70%] h-full container m-auto p-[10%] flex items-center justify-start gap-[10%]'>

        <img className='h-[80%] w-[40%] object-contain'
         src={`${item.image}`} alt="" />
        <div className="content w-[50%] mb-[8%]">
            <h1 className='text-4xl'>
              {item.title}</h1>
            <h3 className="text-zinc-400 my-5">{item.category}</h3>
            <h2 className='text-zinc-500 mb-3'>$ {item.price}</h2>
            <h5 className='mb-[5%]'>{item.description}</h5>
            <Link className='py-2 px-5 border rounded border-blue-200 text-blue-300'>Edit</Link>
            <Link className='py-2 ml-3 px-5 border rounded border-red-300 text-red-300'>Delete</Link>
        </div>
    </div>):(<Loading/>)
  )
}

export default Details