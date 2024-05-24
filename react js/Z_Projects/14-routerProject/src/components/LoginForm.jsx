import React, { useState } from 'react'

export const LoginForm = () => {


    const[formData , setFormData] = useState({
        email :  "",
        password : ""
    })

    const [showPassword , setShowPassword] = useState(false)



    const changeHandler = (event)=>{
        
        setFormData((prevData)=>({
            ...prevData ,
            [event.target.value] : event.target.value 
        
        }))
    
    }



  return (
    <div>


        <form>
            <label>
                <p>Email address</p><sup>*</sup>
                <input 
                required
                type="text"
                value = {formData.email}
                placeholder = "Enter email id"
                onChange={changeHandler}
                 />
                
            </label>
            <label>
                <p>Password</p><sup>*</sup>
                <input 
                required
                type={showPassword ? ("text") : ("password")}
                value = {formData.password}
                placeholder = "Enter Password"
                onChange={changeHandler}
                 />
                
            </label>
        </form>


    </div>
  )
}
