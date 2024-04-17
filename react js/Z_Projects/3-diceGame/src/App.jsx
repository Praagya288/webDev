import StartGame from "./components/StartGame" ;
import Gameplay from "./components/Gameplay";
import "./App.css"
import { useState } from "react";
function App() {

    const [isGameStarted , setIsGameStarted] = useState(true);


    const toggleGamePlay = ()=> {
      setIsGameStarted((prev) => !prev) 
    };


  return (
    <>

    {
        isGameStarted ? <Gameplay/> : <StartGame toggle = {toggleGamePlay} />
    }

    </>
  )
}

export default App

 