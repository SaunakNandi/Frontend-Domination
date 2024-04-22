import React from 'react'
import { useForm } from 'react-hook-form'
const Form = ({handleFormSubmitData}) => {
    const {register, handleSubmit, reset}=useForm()
    const handleFormSubmit=(data)=>{
      handleFormSubmitData(data)
      reset()
    }
  return (
    <div className='mt-10 flex justify-center'>
        <form action="" className='flex gap-10' onSubmit={handleSubmit(handleFormSubmit)}>
            <input {...register('name')} type="text" className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='name'/>
            <input {...register('email')} type="text" className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='email'/>
            <input {...register('image')} type="text" className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='image url'/>
            <input className="rounded-md bg-blue-500 px-5 py-1 text-white font-semibold" type="submit" value='Submit'/>
        </form>
    </div>
  )
}

export default Form