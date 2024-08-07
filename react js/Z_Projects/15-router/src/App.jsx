import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Dashboard from "./components/Dashboard"
import Landing from './components/Landing'

function App() {


  return (
      <BrowserRouter>
          <Routes>
            <Route path='/Dashboard' element = {<Dashboard/>} />
            <Route path='/' element = {<Landing/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
