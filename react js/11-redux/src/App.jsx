import { useState } from 'react'
import Count from './components/Count'
import { useDispatch } from 'react-redux'

function App() {

    const dispatch = useDispatch() ;

  return (
    <>

      <h1>Learn about redux</h1>

      <button
      onClick={(e)=>{
        dispatch({ type : 'INCREMENT'})
      }}
      >Increment</button>
      <Count/>
      <button
      onClick={(e)=>{
        dispatch({ type : 'DECREMENT'})
      }}
      >Decrement</button>


    </>
  )
}

export default App

