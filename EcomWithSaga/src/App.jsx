import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './redux/Store/Slice/cartSlice'
import catsSaga from './redux/Saga/catsSaga'  


function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const cats = useSelector((state) => state.cart.cats);
  const isLoading = useSelector((state) => state.cart.isLoading);
  
  console.log("Cats in App:", cats);
  console.log("Is Loading:", isLoading);  

  return (
    <>
      <button onClick={() => dispatch(addToCart('hii'))} >Add items</button>
      <button onClick={() => dispatch(removeFromCart('hii'))}>Remove item</button>
    </>
  )
}

export default App
