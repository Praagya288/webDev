import { Routes , Route } from "react-router-dom"
import { useState } from "react"

// react toast 
import toast, { Toaster } from 'react-hot-toast';

// Component 
import Navbar from "./components/Navbar.jsx"

// Pages 
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Dashboard from "./pages/Dashboard.jsx"

function App() {

  const[isLoggedIn , setIsLoggedIn] = useState(false);

  return (
    <div>

      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />

      <Routes>

          <Route path="/"  element = {<Home/>} />
          <Route path="/login"  element = {<Login/>} />
          <Route path="/signup"  element = {<Signup/>} />
          <Route path="/dashboard"  element = {<Dashboard/>} />

      </Routes>

      <Toaster />
    </div>
  )
}

export default App
