import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="max-w-screen-xl mx-auto py-10 flex gap-3">
            <div className="basis-1/2">
                <h1 className="font-semibold text-[6vw] leading-none tracking-tight">refokus.</h1>
            </div>
            <div className="basis-1/2 flex ">
                <div className="basis-1/3">
                    <h4 className='mb-10 text-zinc-600 capitalize'>socials</h4>
                    {["instagram","twitter (X)", "LinkedIn"].map((item, index)=>(
                        <a href="#" className="block mt-3 text-600">
                            {item}
                        </a>
                    ))}
                </div>
                <div className="basis-1/3">
                    <h4 className='mb-10 text-zinc-600 capitalize'>socials</h4>
                    {["instagram","twitter (X)", "LinkedIn"].map((item, index)=>(
                        <a href="#" className="block mt-3 text-600">
                            {item}
                        </a>
                    ))}
                </div>
                <div className="basis-1/2 flex flex-col items-end">
                    <p className='text-right'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                    <button className='min-w-30 bg-blue-500 text-white px-4 py-1 mt-10'>Enterprise Partner</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer