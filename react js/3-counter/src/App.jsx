import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(15) ;

  const addValue = ()=>{
      if(counter<20) {
        setCounter(counter + 1)
      }
  }

  const removeValue = ()=>{
    if(counter > 0) {
      setCounter(counter - 1 )
    }
  }

  return (
    <>
    <h2>Chai aur react</h2>
    <h2>Chai aur react {counter}</h2>

    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br></br>
    <button
    onClick={removeValue}>Remove value {counter}</button>
    <p>text is {counter}</p>
    </>
  )
}

export default App
