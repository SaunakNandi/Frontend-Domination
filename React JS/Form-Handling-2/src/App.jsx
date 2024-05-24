import { useForm } from 'react-hook-form'

import './App.css'

function App() {
  const {register,handleSubmit}=useForm()
  // console.log()
  return (
    <>
      <div>
       <form onSubmit={handleSubmit(data=>console.log(data))}>
       <input {...register('name')} type="text" placeholder='name' />
        <input {...register('email')} type="email" placeholder='email' />
        <input type="submit" />
       </form>
      </div>
    </>
  )
}

export default App
