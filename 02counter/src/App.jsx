import { useState } from 'react'
import './App.css'

function App() {

  //type [Variable, Function/Method] = useState(Initial State);
  const [counter, setCounter] = useState(12);
  // let counter = 10;

  const addValue = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1); // Batching
    // setCounter(counter + 1); // Batching
    // setCounter(counter + 1); // Batching
    // setCounter(counter + 1); // Batching -> Multiple Line, value change once only

    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    
  };
  const removeValue = () => {
    // setCounter(counter - 1);
    // Will watch previous value and operate
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
  }

  return (
    <>
      <h1>React course with P</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>{" "}
      <button
      onClick={removeValue}>Remove value</button>
      <p>footer: </p>
    </>
  )
}

export default App
