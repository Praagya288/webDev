import React from 'react'
import Weather from './components/Weather'
import Navbar from './components/Navbar'
const App = () => {
  return (

    <div className='min-h-screen w-full bg-gray-400'> 
    <Navbar/>

    <div className='flex items-center justify-center'>
      <Weather/>
      
    </div>
    
    
    
    </div>  
    
  )
}

export default App