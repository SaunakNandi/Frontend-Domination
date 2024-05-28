import React from 'react'
import background_image from '../assets/background_image.webp'
const Landing = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[250vh]'>
        <div className="picture w-full h-full">
            <img className='w-full h-full object-center' src={background_image} alt="" />
        </div>
        <div className="w-full absolute top-0">
          <div className="text max-w-screen-2xl mx-auto px-5 sm:px-10 absolute top-0 h-full text-white">
            <div className="para mt-72 text-md sm:text-3xl sm:mt-[34rem]">
              <p>Global digital design studio partnering</p>
              <p>with brands and businesses that create</p>
              <p>exceptional experiences where people</p>
              <p>live, work, and unwind.</p>
            </div>
            <div className="headings text-6xl tracking-tighter leading-none mt-5 sm:mt-10 sm:text-[18rem] font-light">
              <h1>Digital</h1>
              <h1>Experience</h1>
              <h1>Design</h1>
            </div>
            <div className="para2 mt-10 sm:mt-20 sm:w-1/3">
            <p className='sm:text-xl'>We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgettable journeys start with a click.</p>
            <a href="" className="border-b-[1px] border-zinc-100 pb-1 mt-4 inline-block">The Studio</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Landing