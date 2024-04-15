import { useState } from "react"

function App() {
    const[color , setColor] = useState("olive")
  
  return (
    <div className = "w-full h-screen duration-200"
    style = {{backgroundColor: color}}
    >


    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-10 bg-orange-400
    gap-10 py-2 rounded-full">
        <button 
        onClick={()=>{setColor("red")}}
        className = "outline-none px-4 py-1 rounded-lg text-white bg-red-900 hover:bg-red-800" >Red</button>
        <button 
          onClick={()=>{setColor("green")}}
        className = "outline-none px-4 py-1 rounded-lg text-white bg-green-900 hover:bg-green-800" >green</button>
        <button
        onClick={()=>{setColor("blue")}}
        className = "outline-none px-4 py-1 rounded-lg text-white bg-blue-900 hover:bg-blue-800" >blue</button>
    </div>

    </div>
  )
}

export default App
