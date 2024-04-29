import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { useNavigate } from 'react-router-dom'
const Edit = () => {
    const navigate=useNavigate()
    const [products,setProducts]=useContext(ProductContext)
    const [title,setTitle]=useState("")
    const [image,setImage]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("")
    const [description, setDescription]=useState("")

    const resetFormFields = () => {
        setImage('');
        setTitle('');
        setCategory('');
        setPrice('');
        setDescription('');
    };
    const AddProductHandler=(e)=>{
        e.preventDefault()
        if(title.trim().length<2 || price.trim().length<1 || price.charAt(0)==='0' || image.trim().length<0 ||category.trim().length<3 || description.trim().length<10 )
        {
            alert("Input fields might be empty or price filed might be wrong")
            return
        }
        const product={
            id:nanoid(),
            title,
            image,
            category,
            price,
            description,
        }
        setProducts([...products,product])
        resetFormFields()
        localStorage.setItem("products",JSON.stringify([...products,product]))
        navigate("/")
        // toast.success("New Product Added")
        console.log(products)
    }
  return (
    <div>
        <form onSubmit={AddProductHandler} className='p-[5%] w-screen h-screen flex flex-col items-center'>
        <h1 className="mb-5 w-1/2 text-3xl">Update Product</h1>
        <input type="url" placeholder='image link' className='text-3xl bg-zinc-300 rounded-md p-3 w-1/2 mb-3'
        onChange={(e)=> setImage(e.target.value)}
        value={image}/>
        <input type="text" placeholder='title' className='text-3xl bg-zinc-300 rounded-md p-3 w-1/2 mb-3'
        onChange={(e)=> setTitle(e.target.value)}
        value={title}/>
        <div className="w-1/2 flex gap-4">
            <input type="text" placeholder='Category' className='text-2xl bg-zinc-300 rounded-md p-3 w-[45%] mb-3'
            onChange={(e)=> setCategory(e.target.value)}
            value={category}/>
            <input type="text" placeholder='Price' className='text-2xl bg-zinc-300 rounded-md p-3 w-[45%] mb-3'
            onChange={(e)=> setPrice(e.target.value)}
            value={price}/>
        </div>
        <textarea className='text-3xl bg-zinc-300 rounded-md p-3 w-1/2 mb-3'
         placeholder='Description' onChange={e => setDescription(e.target.value)} value={description}></textarea>
         <div className="w-1/2">
            <button className="py-2 px-5 border rounded border-blue-200 text-blue-300">
                Add New Product
            </button>
         </div>

    </form>
    </div>
  )
}

export default Edit