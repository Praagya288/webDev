import React from 'react'

export const Buttons = (props) => {
  return (
    <div className='flex items-center justify-center bg-black p-5'>
        <button className='h-18 w-fit text-3xl rounded-lg p-2 outline-none  text-slate-200'  
        onClick={props.onClick}
        style={{backgroundColor : props.text}}
        
        >{props.text}</button>
    </div>
  )
}
