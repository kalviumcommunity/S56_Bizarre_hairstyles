import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav> 
      <Link to={"/"}><h2 className='logo'>Hair Spectacle</h2></Link>
        <div className='nav-content'>
            <h4>Trending</h4>
            <Link to={"/explore"}><h4>Explore</h4></Link>
            <h4>About</h4>
            <Link to={"/add"}><h4>Add</h4></Link>
            <h4>Log in</h4>

            <div className='login-logo'></div>
        </div>
      </nav>
    </div>
  )
}
