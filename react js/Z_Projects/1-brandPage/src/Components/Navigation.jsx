
import nikeLogo from "../assets/images/nikeLogo.png"

function Navigation(){
    return(
        <nav >

        {/* left nikeLogo image  */}
        <div className="nikeLogo">
          <img src={nikeLogo} alt="Nike logo" />
        </div>

        {/* middle menu */}
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* right login button  */}
        <button>Login</button>
        
      </nav>
    )

}

export default Navigation ;