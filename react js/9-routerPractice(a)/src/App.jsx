import "./index.css"
import {BrowserRouter , Routes , Route} from "react-router-dom" ;

// Import the different page  
import Home from "./components/Home" 
import About from "./components/About"
import Info from "./components/Info"
import Contact from "./components/Contact";

import AppBar from "./components/AppBar";


function App() {

  return (

    <BrowserRouter>

      <AppBar/>

      <Routes>
        <Route  path="/" element = { <Home/>} />
        <Route  path="/about" element = { <About/>} />
        <Route  path="/info" element = { <Info/>} />
        <Route  path="/contact" element = { <Contact/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
