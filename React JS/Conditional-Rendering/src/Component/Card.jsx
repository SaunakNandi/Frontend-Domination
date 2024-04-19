// import React from 'react'

export const Card = () => {
  const data=[
    {name:"Jandu",description:"Mothing"},
    {name:"Junoo",description:"Mothing"},
  ]
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col gap-10 items-center justify-center">
        {data.map((item,ind)=>{
          <div className="w-100 song px-3 py-2 bg-zinc-100 rounded-md" key={ind}>
            <h3 className="font-semibold text-xl">{item.name}</h3>
            <p className="text-xs mt-2">{item.description}</p>
            <button onClick={()=>alert(item.name)} className="px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3">Download Now</button>
          </div>
        })}
    </div>
  )
}
export default Card