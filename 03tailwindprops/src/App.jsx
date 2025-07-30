import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen h-screen bg-blue-200'>
        <h1 className='bg-green-300 text-red-500 text items-center '>Hello</h1>
      </div>

    </>
  )
}

export default App
