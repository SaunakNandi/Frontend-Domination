/* eslint-disable react/prop-types */
//import React from 'react'

const Props = ({values,index,handleClick}) => {
  const {image,name,profession,friend}=values
  return (
    <div className="w-52 bg-white rounded-md overflow-hidden">
        <div className="w-full h-40 bg-sky-200 overflow-hidden">
          <img className="w-full h-full object-cover position" src={image} alt="" />
        </div>
        <div className="w-full p-3">
            <h3 className="text-xl font-semibold">{name}</h3>
            <h5 className="text-xs">{profession}</h5>
            <button onClick={()=>handleClick(index)}
            className="mt-4 px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md">
              {friend? 'Remove Friend': 'Add Friend'}
            </button>
        </div>
    </div>
  )
}

export default Props