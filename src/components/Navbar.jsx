import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <header>
        <p className="logo h1">
            <Link to="/" className='site-logo'>#VANLIFE</Link>
        </p>
        <nav>
            <Link to="/about">#About</Link>
            <Link to="Vans">#Vans</Link>  
        </nav>
    </header>
  )
}

export default Navbar