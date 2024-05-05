import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full'>
        <div className="max-w-screen-xl mx-auto py-20 flex gap-[3px]">
            <Card width={"basis-1/3"} capsule={false} para={true}/>
            <Card width={"basis-2/3"} capsule={true} para={false} hover={"true"}/>
        </div>
    </div>
  )
}

export default Cards