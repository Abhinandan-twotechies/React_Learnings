import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen h-screen bg-black'>
        <h1 className='text-white'>Password Generator</h1>
        <div className='text-white bg-gray-600 w- h-32 items-center rounded-2xl p-2'>
          <div>
            <input type="text" />
            <button>Copy</button>
          </div>
          <div className='flex'>
            <input type="range" min="8" max="16" />
            <p>Length (16)</p>
            <input type="checkbox" />
            <p>Numbers</p>
            <input type="checkbox" />
            <p>Character</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
