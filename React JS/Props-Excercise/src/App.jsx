import { useState } from 'react'
import Card from './Component/Card'
import Navbar from './Component/Navbar'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const data=[
    {image:"https://images.pexels.com/photos/21430836/pexels-photo-21430836/free-photo-of-vintage-camera-praktica-mtl5-hanging-on-the-strap-of-the-case.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",name:"Challenger",artist:"Nandu",added:false},
    {image:"https://images.pexels.com/photos/18955726/pexels-photo-18955726/free-photo-of-man-riding-on-skateboard-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",name:"No ranger",artist:"Bandhu",added:false},
    {image:"https://images.pexels.com/photos/15774818/pexels-photo-15774818/free-photo-of-close-up-of-green-guitar-pedal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",name:"Zero",artist:"Jahndu",added:false},
  ]
  const [songData,setSongData]=useState(data)

  const handleClick=(ind)=>{
    setSongData((prev)=>{
      return prev.map((item,index)=>{
        if(ind===index)
          return {...item,added:!item.added}
        return item
      })
    })
  }
  return (
    <>
      <div className="w-full h-screen bg-zinc-300">
        <Navbar data={songData}/>
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {
            songData.map((item,index)=>{
              return <Card key={index} handleClick={handleClick} values={item} index={index} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
