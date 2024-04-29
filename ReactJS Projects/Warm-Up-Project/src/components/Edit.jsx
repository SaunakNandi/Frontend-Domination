import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { useNavigate } from 'react-router-dom'
const Edit = () => {
    
    const [products,setProducts]=useContext(ProductContext)
    const navigate=useNavigate()
    const {id}=useParams()
    const [product,setProduct]=useState({
        title:"",
        description:"",
        image:"",
        price:"",
        category:"",
    })
    
    
    const [title,setTitle]=useState("")
    const [image,setImage]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("")
    const [description, setDescription]=useState("")
    
    const changeHandler=((e)=>{
        // console.log(e.target.name,e.target.value)
        
        setProduct({...product,[e.target.name]:e.target.value})
    })
    const resetFormFields = () => {
        setImage('');
        setTitle('');
        setCategory('');
        setPrice('');
        setDescription('');
    };

    useEffect(()=>{
        setProduct(products.filter((p)=>p.id==id)[0])
    },[id])

    const AddProductHandler=(e)=>{
        e.preventDefault()
        if(product.title.trim().length<2 || product.price.trim().length<1 || product.price.charAt(0)==='0' || product.image.trim().length<0 ||product.category.trim().length<3 || product.description.trim().length<10 )
        {
            alert("Input fields might be empty or price filed might be wrong")
            return
        }
        const pi= products.findIndex((p)=>p.id==id)
        const copyData=[...products]
        copyData[pi]={...products[pi],...product} // explained at 2:47:03
        // setProducts([...products,product])
        // resetFormFields()
        // localStorage.setItem("products",JSON.stringify([...products,product]))
        // navigate("/")
        // // toast.success("New Product Added")
        // console.log(products)
    }
  return (
    <div>
        <form onSubmit={AddProductHandler} className='p-[5%] w-screen h-screen flex flex-col items-center'>
        <h1 className="mb-5 w-1/2 text-3xl">Update Product</h1>
        <input type="url" placeholder='image link' className='text-3xl bg-zinc-300 rounded-md p-3 w-1/2 mb-3'
        name='image'
        onChange={changeHandler}
        value={product && product.image}/>
        <input type="text" placeholder='title' className='text-3xl bg-zinc-300 rounded-md p-3 w-1/2 mb-3'
        name='title'
        onChange={changeHandler}
        value={product && product.title}/>
        <div className="w-1/2 flex gap-4">
            <input type="text" placeholder='Category' className='text-2xl bg-zinc-300 rounded-md p-3 w-[45%] mb-3'
            onChange={changeHandler}
            name='category'
            value={product && product.category}/>
            <input type="text" placeholder='Price' className='text-2xl bg-zinc-300 rounded-md p-3 w-[45%] mb-3'
            name='price'
            onChange={changeHandler}
            value={product && product.price}/>
        </div>
        <textarea className='text-3xl bg-zinc-300 rounded-md p-3 w-1/2 mb-3'
         placeholder='Description' 
         name='description'
         onChange={e => changeHandler}
          value={product && product.description}></textarea>
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