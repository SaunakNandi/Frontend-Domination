import useWindowResize from './useWindowResize'
import './App.css'

function App() {
  const [width, height] = useWindowResize()

  return (
    <>
      <h1>Window Size</h1>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </>
  )
}

export default App
