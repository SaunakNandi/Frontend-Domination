/* eslint-disable react/prop-types */

const Card = ({values,handleClick,index}) => {
    const {image,name,artist,added}=values
  return (
   <>
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-10 relative">
        <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div className="">
            <h3 className='text-xl leading-none font-semibold'>${name}</h3>
            <h6 className='text-sm'>${artist}</h6>
        </div>
        <button onClick={()=> handleClick(index
        )}
         className={`px-4 py-3 ${added? 'bg-teal-500':'bg-orange-600'} absolute text-white text-xs rounded-full bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] whitespace-nowrap`}>{added? "Added":"Add to Favourite"}</button>
    </div>
   </>
  )
}

export default Card