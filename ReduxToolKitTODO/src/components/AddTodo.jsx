import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/TODO/todoSlice'
function AddTodo() {

  const [input , setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e)=>{
     e.preventDefault();
     dispatch(addTodo(input));
     setInput('')
  }

  
  return (
    <div>
        <form action="" onSubmit={addTodoHandler} className='space-x-3 mt-12 text-black'>
            <input type="text"
              value={input}
              onChange={(e)=> setInput(e.target.value)}
              className=' rounded border border-gray-700 text-black'
              placeholder='Enter Todoss..'
             />
            <button type='submit' className='bg-gray-700 text-white border px-4 rounded cursor-pointer'>Submit</button>
        </form>
    </div>
  )
}

export default AddTodo