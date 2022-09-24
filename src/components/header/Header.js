import React from 'react'
import "./header.scss"
import {images} from "../../images"


const Header = () => {
  // for handburger menu
  // const [open,setOpen] = useState(false)

  return (
    <div>
      <header>
        <nav className ="navbar container">
          <div className="logo">
            <img src={images.logo} alt="" width="200px" height="70px"/>
            
          </div>
          {/* In this section we check how to open hamburger menu */}
          <div className='nav-text'>
            We are <span className='icon-color'>AMERICAN INTERNATIONAL GROUP</span>
          </div>
          
        </nav>
      </header>
    </div>
  )
}

export default Header