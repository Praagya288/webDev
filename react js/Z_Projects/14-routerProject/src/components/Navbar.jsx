import React from 'react'
import { Link } from 'react-router-dom'


// nav bar logo image 
import sLogo from "../assets/images/sLogo.jpg"


import toast, { Toaster } from 'react-hot-toast';



const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn ;
  let setIsLoggedIn = props.setIsLoggedIn ;

  return (
    <div className='flex justify-evenly'>


      {/* nav bar logo  */}
      <Link>
      <img src={sLogo} alt="logo" height={32} width={160} loading= "lazy" />
      </Link>


    {/* navbar  */}
      <nav   >
        <ul className='flex gap-3 '>
         <li>
          <Link to="/" >Home</Link>
         </li>
         <li> 
          <Link to="/" >About</Link>
         </li>
         <li>
          <Link to="/" >Contact</Link>
         </li>
        </ul>
      </nav>


      {/* buttons for { login , signup , logout , dashboard}  */}
      <div className='flex mr-3 ml-3 gap-3' >

      { !isLoggedIn && 
        <Link to="/Login">
        <button
      
        >
          Login
        </button>
      </Link>
      }

      { !isLoggedIn &&
     <Link to="/Signup">
        <button>
          SignUp
        </button>
      </Link>
      }


 {    isLoggedIn &&
  <Link to="/">
        <button
        onClick={()=>{
          setIsLoggedIn(false);
          toast.success("Logged out")
        }}
        >
            Logout
        </button>
      </Link>
      }

 {   isLoggedIn && 
   <Link to="/Dashboard">
        <button>
          Dashboard
        </button>
      </Link>
      }

      </div>
      


    </div>
  )
}

export default Navbar