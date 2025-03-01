import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count-1)}>Decrement</button>
    </>
  )
}

export default Counter
