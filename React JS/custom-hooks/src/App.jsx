import { useToggle } from './useToggle'
import './App.css'
// https://www.youtube.com/watch?v=aeMJfoGfWT4
function App() {
  const [isVisible, toggle] = useToggle()
  const [isVisible2,toggle2] =useToggle()
  return (
    <div className='App'>
      <button onClick={toggle}>
        {isVisible ? 'Hide':'Show'}
      </button>
      {isVisible2 && <h1>Hidden Text</h1>}
      <button onClick={toggle2}>
        {isVisible ? 'Hide':'Show'}
      </button>
      {isVisible && <h1>Hidden Text</h1>}
    </div>
  )
}

export default App
