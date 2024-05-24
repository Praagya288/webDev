import "./index.css"
import { Route , Routes } from "react-router-dom"
import { Link , NavLink } from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Error from "./components/Error.jsx"
function App() { 

  return (
    <div className="App text-gray-500">


        <nav>
          <ul>
            <li>
              <NavLink to={"/Home"} >Home</NavLink>
            </li>
            <li>
              <NavLink to={"/About"} >About</NavLink>
            </li>
            <li>
            <NavLink to={"/Contact"} >Contact</NavLink>
            </li>
  
          </ul>
        </nav>


      <Routes>
          <Route path="/"  element = {<Home/>}/>
          <Route path="/About"  element = {<About/>}  />
          <Route path="/Contact"  element = {<Contact/>}  />
          <Route path="*"  element = {<Error/>}  />
      </Routes>

    </div>
    
  )
}

export default App
