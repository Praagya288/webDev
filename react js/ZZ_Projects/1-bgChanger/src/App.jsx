import { Buttons } from "./components/Buttons"
import { useState } from "react";
import "./App.css"
function App() {

    const [ color , setColor] = useState("grey")  ;
    console.log(color)

  return (

      <main className="container bg-slate-500 h-screen  w-full  " 

      style={{backgroundColor : color}}
      
      >
        
          {/* top area  */}
          <div className="topText flex flex-col items-center justify-center gap-5  mx-auto bg-orange-50 rounded-lg w-fit p-2">


          <h1 className="text-3xl">Why this project ?</h1>
          <p className="text-2xl">This will make you understand the working of useState Hook</p>
          
          </div>


          {/* middle area  */}
          <div className="flex items-center justify-center mt-60 text-3xl  mx-auto p-2 bg-orange-50 w-fit rounded-lg ">
              <h2>Click any of the button to change the bg</h2>
          </div>



          {/* bottom area  */}
          <div className="flex items-center justify-center gap-32 mt-32 rounded-3xl bg-black">
              <Buttons onClick = {()=>{setColor("red")}} text = "red"   />
              <Buttons onClick = {()=>{setColor("green")}} text = "green"  />
              <Buttons onClick = {()=>{setColor("blue")}} text = "blue" />
              <Buttons onClick = {()=>{setColor("yellow")}} text = "yellow"  />
          </div>

      </main>
  )
}

export default App

