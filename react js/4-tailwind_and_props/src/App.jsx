import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 
  const [count, setCount] = useState(0)

  let myObj = {
    username : "htiesh" ,
    age : 21 
  }

  return (
    <>
      <h1 className= 'bg-slate-600 text-cyan-300 p-4 rounded-xl mb-4' >Tailwind css</h1>

      <Card username="chaiaurcode"  someObj={myObj} btnText = "visitme"/>
      <Card username = "hitesh" btnText = "clickme"/> 

    </>
  )
}

export default App
