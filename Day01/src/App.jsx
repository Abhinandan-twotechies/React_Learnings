import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Welcome to React</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </>
  );
}

export default App;
