import React from 'react'

const Buttons = ({text , handleContent}) => {
    
  return (
    <div className='text-white bg-blue-900 px-3 py-0.5 font-bold hover:bg-blue-500 hover:outline-double'>

        <button
        onClick={ ()=> handleContent(text) }
        >{text}</button>

    </div>
  )
}

export default Buttons