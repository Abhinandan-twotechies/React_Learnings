import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
// const BackgroundImage = 

function App() {
  const [count, setCount] = useState(0)
  const [amount ,setAmoun] = useState(0);
  const [from , setFrom] = useState("usd");
  const [to , setTo] = useState("inr");
  const [cvtAmount , setCvtAmount] = useState(0);


  return (
    <>
      <h1>Currency</h1>
    </>
  )
}

export default App
