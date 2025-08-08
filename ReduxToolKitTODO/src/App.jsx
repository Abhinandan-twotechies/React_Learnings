import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <div className='flex item-center justify-center w-full h-screen bg-blue-100'>
        <div className='flex  flex-col item-center justify-center'>
          <AddTodo />
          <Todos />
        </div>

      </div>
    </>
  )
}

export default App
