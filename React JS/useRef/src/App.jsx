import { useState,useEffect,useRef } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [myData,setMyData]=useState()

  const count=useRef(0) // return an object

//   useEffect(() => {
//     // setCount((prevState)=> prevState+1)
//     count.current=count.current+1
// })

const inputElem=useRef()
  const changeStyle=()=>{
      inputElem.current.style.borderWidth='5px'
      inputElem.current.style.height='50px'
       inputElem.current.style.borderColor='pink';
  }

  return (
    <>
      <input ref={inputElem}
       type="text" value={myData} onChange={(e)=>{setMyData(e.target.value)}}/>
      {/* <p>The Number of times render: {count.current}</p> */}
      <button style={{color:'red',marginRight:'5px'}} onClick={changeStyle}>Submit</button>
    </>
  )
}

export default App
