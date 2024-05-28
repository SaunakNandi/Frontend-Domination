import React from 'react'
import Button from './Button'

const Product = ({values,index,mover}) => {
    const {title,description,live,case_study}=values
  return (
    <div className='w-full py-10 h-[23rem] text-white'>
        <div onMouseEnter={()=>{mover(index)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
            <h1 className='text-6xl capitalize font-medum'>{title}</h1>
            <div className="dets w-1/3">
                <p className='mb-10'>{description}</p>
                <div className="flex items-center gap-5">
                    {live && <Button/>}
                    {case_study && <Button title='Case Study'/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product