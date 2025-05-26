import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './useReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Counter></Counter>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> 
      </div> */}
      
    </>
  )
}

export default App
