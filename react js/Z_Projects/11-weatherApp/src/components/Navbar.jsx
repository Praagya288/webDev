import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-gray-600
    p-5 font-bold text-white'>
        <h1>Weather App</h1> 
        <p>Using open weather api</p>
    </div>
  )
}

export default Navbar