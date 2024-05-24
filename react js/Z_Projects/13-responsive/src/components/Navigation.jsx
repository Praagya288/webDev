import { useState } from "react";
import React  from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navigation = () => {

    const [nav , setNav] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
    }

  return (
    <div className=' flex justify-between text-whtie items-center h-24 max-w-[1240px] mx-auto p-4  text-white'>

    <h2 className=' w-full text-3xl font-bold text-[#d3eae3]'>REACT.</h2>
    <ul className=' text-white hidden md:flex font-semiboldk'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
    </ul>

    <div onClick={handleNav} className= "block md:hidden" > 
    {
        nav ? <IoCloseOutline size={20} /> :  <CiMenuBurger />
    }
    </div>

    <div  className={ nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[100%]'}>
    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 ' >REACT.</h1>    
    <ul className='uppercase p-4'>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4'>Contact</li>
    </ul>
    </div>



    </div>
  )
}

export default Navigation