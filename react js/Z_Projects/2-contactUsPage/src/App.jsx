
import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from "./components/ContactHeader/contactHeader"
import ContactForm from './components/contactform/ContactForm'
function App() {
 

  return (
    <div>
      <Navigation/>
      <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
      </main>
    </div>
  )
}

export default App
