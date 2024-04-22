//import { useState } from 'react'
import { useState } from 'react'
import Props from './Component/Props'


function App() {
  //const [count, setCount] = useState(0)

  const data=[
    {name:"John", profession:"Developer",image:"https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600",friend:false},
    {name:"Rocky", profession:"Designer",image:"https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",friend:false},
    {name:"Alex", profession:"Product Manager",image:"https://images.pexels.com/photos/1277631/pexels-photo-1277631.jpeg?auto=compress&cs=tinysrgb&w=600",friend:false},
    {name:"Stark", profession:"Developer",image:"https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",friend:false}
  ]
  const [realData,setRealData]=useState(data)
  const hnadelFriendsButton=(ind)=> {
    setRealData((prevState)=>{
      return prevState.map((item,index)=>{
      if(index===ind){
        return {...item,friend:!item.friend}
      }
      return item
    })})
  }
  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
        {realData.map((item,index)=>(
          <Props values={item} index={index} handleClick={hnadelFriendsButton} key={index} />
        ))}
      </div>
    </>
  )
}

export default App
