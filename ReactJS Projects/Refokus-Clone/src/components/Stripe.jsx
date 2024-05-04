import React from 'react'

const Stripe = ({values}) => {
    const {url,number}=values
  return (
    <div className='w-[16.66%] px-10 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-700 flex justify-between items-center overflow-hidden'>
        <img src={url} alt="" className='h-[3vh]'/>
        <span className='font-semibold'>{number}</span>
    </div>
  )
}

export default Stripe