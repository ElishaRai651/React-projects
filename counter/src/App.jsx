import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { preconnect } from 'react-dom'

function App() {
  const [count, setCount] = useState(15)
  const addValue=()=>{
   // setCount(count+1)
    //setCount(count+1)
    //setCount(count+1)
    setCount((prevCount)=>prevCount+1)
    setCount((prevCount)=>prevCount+1)
    setCount((prevCount)=>prevCount+1)

  }

  return (
    <>
      <div className="card">
        <button onClick={addValue}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
