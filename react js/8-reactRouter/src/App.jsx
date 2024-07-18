import {BrowserRouter , Routes , Route , useNavigate} from 'react-router-dom' 
import { lazy } from 'react'
import DashBoard from "./components/Dashboard"
import Landing from './components/Landing'
// The below import method does this : ( suitable for big applications thats why skipping for now )
// instead of bringing all the data at once it imports the data only which is required
// for eg the Dashboard will be imported only when user clicks on the dashboard 
// const DashBoard = lazy( ()=>  import("./components/Dashboard"))
// const Landing = lazy( ()=> import("./components/Landing"))
import "./index.css"


function App() {

  return (

    // Parent wrapper
    <div>

    <BrowserRouter>

      <AppBar/>

      <Routes>
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/" element={<Landing/>} />
      </Routes>

    </BrowserRouter>

    </div>
  )
}



// another component in the same file or you can create a component in the components folder also. both does the same thing
function AppBar(){

  const navigate  = useNavigate() ;

  return <div>

       {/* Navigation Bar */}
    <div>

         {/* button 1 */}
      <button onClick={ ()=>{
   // window.location.href = "/" ;
   navigate("./") ;
 } }
      >Landing Page</button>  

         {/* button 2 */}
      <button
 onClick={ ()=>{
   // window.location.href = "/dashboard" ;
   navigate("./dashboard") ;

 }}
      >Dashboard Page</button>  

    </div>

  </div>

}



export default App
