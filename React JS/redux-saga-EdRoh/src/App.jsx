import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCatsFetch } from './store/reducers/CatSlice'

function App() {
  const cats=useSelector(state=> state.cats.cats)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getCatsFetch())
  },[])
  console.log(cats)
  return (
    <>
      <div className="App">
        <h1>Cat species gallery</h1>
        <p>Images of different species of cats. Lots of cats for your viewwing pleasure.</p>
        <hr />
        <div className="Gallery">
          {cats.map(cat=>(
            <div className="row" key={cat.id}>
              <div className="column column-right">
                <h2>{cat.name}</h2>
                <h5>Temperament: {cat.temperament}</h5>
                <p>{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </>
  )
}

export default App
