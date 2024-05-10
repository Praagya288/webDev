import { useState } from 'react'
import data from "./assets/data.js"
import Tours from './components/Tours'
function App() {

    const [tours , setTours] = useState(data)

    const removeTour = (id)=>{
    const newTours = tours.filter( tour => tour.id !== id)
    setTours(newTours)
    }


    if(tours.length === 0){
      return (
        <div className='refresh'>
          <h2>No tours left</h2>
          <button onClick={()=>{setTours(data)}}>Refresh</button>

        </div>
      )
        
    }

    




  return (
    <div>
      <Tours tours = {tours} removeTour = {removeTour} />
    </div>
  )
}

export default App
