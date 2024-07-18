import { useContext, useState } from "react"
import { CountContext } from "./Context";

function App() {

  const[count , setCount] = useState(0) ;

  return (

    // 1st component or parent component
    <div>

    <CountContext.Provider  value= {{count , setCount}}   >
        <Count setCount={setCount} />
    </CountContext.Provider>

    </div>
  )
}


function Count({setCount}){
  return <div>
    <CountRenderer />
  <Buttons setCount={setCount}  />
  </div>
}

function CountRenderer(){
  const {count} = useContext(CountContext) ;
  return <div>
    {count}
  </div>
}



function Buttons(){
  const {count , setCount} = useContext(CountContext) ;
    return <div>
          <button 
          onClick={ ()=>{
            setCount(count+1)
          }}
          >
            Increase    
          </button>

          <button 
          onClick={ ()=>{
            setCount(count-1)
          }}
          >
            Decrease
          </button>
    </div>
}



export default App
