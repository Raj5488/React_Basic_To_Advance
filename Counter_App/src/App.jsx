import { useState } from 'react'
import './App.css'

function App() {
  // Corrected the typo here
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    // Corrected the typo here
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if(counter==0){
      alert("Negative value not allowed")
    }
    // Corrected the typo here
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>This Project is a Counter App</h1>
      <h2>Count Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
