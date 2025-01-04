import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  // let counter = 5

  const addValue = () => {
    // counter = counter + 1
    if(counter > 19){
      changeCounter(20)
    }
    else{
      setCounter(counter + 1)
    }
  }

  const removeVal = () => {
    if(counter < 1){
      changeCounter(0)
    }
    else{
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>React using Vite</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick = {removeVal}
      >Subtract Value</button>
    </>
  )
}

export default App
// here hooks are the thing that will be used for such ui updation that says that this is what react 
// controls easily