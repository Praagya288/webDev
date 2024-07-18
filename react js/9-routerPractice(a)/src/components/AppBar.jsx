import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const AppBar = () => {

    const navigate = useNavigate() ; 

  return (
    <div>

        {/* Navigation Bar  */}
        <div>
            <ul 
            style={ { userSelect : "none" , cursor : "pointer"  }}
            >
                {/* This is default ie Home */}
                {/* <li>Home</li>*/}
                <li
                onClick={()=>{
                    navigate('/About')
                }}
                >About</li>
                <li
                onClick={()=>{
                    navigate('/Info')
                }}
                >Info</li>
                <li
                onClick={()=>{
                    navigate('/Contact')
                }}
                >Contact</li>
            </ul>
        </div>


    </div>
  )
}

export default AppBar