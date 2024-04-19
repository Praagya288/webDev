import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between bg-indigo-900 text-white py-2'>
      <div className="logo">
        <span className='font-bold text-ml mx-8 '>
          iTask
        </span>
      </div>
      <ul  className='flex gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all  '>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all  '>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar ;