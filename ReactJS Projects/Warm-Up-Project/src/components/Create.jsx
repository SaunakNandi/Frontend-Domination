import React, { useState } from 'react'

const Create = () => {
    const [title,setTitle]=useState("")
    const [image,setImage]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState(0)
    const [description, setDescription]=useState("")

    const AddProductHandler=(e)=>{
        e.preventDefault()
        const product={
            title,image,category,price,description
        }
        console.log(product)
    }
  return (
    <form onSubmit={AddProductHandler} className='p-[5%] w-screen h-screen flex flex-col items-center'>
        <h1 className="mb-5 w-1/2 text-3xl">Add New Product</h1>
        <input type="url" placeholder='image link' className='text-3xl bg-zinc-300 rounded-md p-3 w-1/2 mb-3'
        onChange={(e)=> setImage(e.target.value)}
        value={image}/>
        <input type="text" placeholder='title' className='text-3xl bg-zinc-300 rounded-md p-3 w-1/2 mb-3'
        onChange={(e)=> setTitle(e.target.value)}
        value={title}/>
        <div className="w-1/2 flex gap-4">
            <input type="url" placeholder='Category' className='text-2xl bg-zinc-300 rounded-md p-3 w-[45%] mb-3'
            onChange={(e)=> setCategory(e.target.value)}
            value={category}/>
            <input type="number" placeholder='Price' className='text-2xl bg-zinc-300 rounded-md p-3 w-[45%] mb-3'
            onChange={(e)=> setPrice(e.target.value)}
            value={price}/>
        </div>
        <textarea className='text-3xl bg-zinc-300 rounded-md p-3 w-1/2 mb-3'
         placeholder='Description' onChange={e => setDescription()} value={description}></textarea>
         <div className="w-1/2">
            <button className="py-2 px-5 border rounded border-blue-200 text-blue-300">
                Add New Product
            </button>
         </div>

    </form>
  )
}

export default Create