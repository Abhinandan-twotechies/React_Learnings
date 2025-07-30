import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgcolor] = useState(0);

  function changeBg(color){
     setBgcolor(color)
  }

  return (
    <>
      <div style={{backgroundColor:bgColor}} className='relative w-screen h-screen items-center'>
        <div className='absolute bottom-20 left-1/3 bg-amber-100 w-200 flex justify-between p-4 rounded-2xl'>
          <button onClick={()=>changeBg('red')} className='bg-red-500 text-white px-2 py-1 rounded-xl cursor-pointer'>Red</button>
          <button onClick={()=>changeBg('green')} className='bg-green-500 text-white px-2 py-1 rounded-xl cursor-pointer'>Green</button>
          <button onClick={()=>changeBg('yellow')} className='bg-yellow-300 text-white px-2 py-1 rounded-xl cursor-pointer'>Yellow</button>
          <button onClick={()=>changeBg('blue')} className='bg-blue-500 text-white px-2 py-1 rounded-xl cursor-pointer'>Blue</button>
          <button onClick={()=>changeBg('gray')} className='bg-gray-500 text-white px-2 py-1 rounded-xl cursor-pointer'>Gray</button>
          <button onClick={()=>changeBg('pink')} className='bg-pink-300 text-white px-2 py-1 rounded-xl cursor-pointer'>Pink</button>
          <button onClick={()=>changeBg('purple')} className='bg-purple-500 text-white px-2 py-1 rounded-xl cursor-pointer'>Purple</button>
          <button onClick={()=>changeBg('black')} className='bg-black text-white px-2 py-1 rounded-xl cursor-pointer'>Black</button>
        </div>
      </div>
    </>
  )
}

export default App
