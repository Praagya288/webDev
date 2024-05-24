import React from 'react'
import templateImg from "../assets/images/backTemplate.jpg"
import img1 from "../assets/images/img1.jpeg"
import img2 from "../assets/images/img2.jpeg"
import { LoginForm } from './LoginForm'
import { SignUpForm } from './SignUpForm'

const Template = ({title , desc1 , desc2 , image , formtype , setIsLoggedIn}) => {
  return (
    <div>   

        <div>

            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>

            </p>

            {formtype === "signup" ? 
            (<SignUpForm/>) : 
            (<LoginForm/>) } 


            <div>

            <div></div>
            <p>OR</p>
            <div></div>


            <button>Sign Up with Google</button>


            </div>



        </div>



            <div>
                <img
                src={templateImg}
                height={504}
                width={558}
                loading='laxy'
                ></img>

                <img
                src={image}
                height={490 }
                width={558}
                loading='laxy'
                ></img>




            </div>



    </div>
  )
}

export default Template ;