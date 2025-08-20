import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { addToCart , removeFromCart } from './redux/Store/Slice/cartSlice'


function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={()=> dispatch(addToCart('hii'))} >Add items</button>
      <button onClick={()=>dispatch(removeFromCart('hii'))}>Remove item</button>
    </>
  )
}

export default App
