import React from 'react'
import "./Landing.css"
import small from "../assets/small-img.png"
import big from "../assets/big-img.jpg"

const Landing = () => {
  return (
    <>
      <nav> 
        <h2 className='logo' >Hair Spectacle</h2>
        <div className='nav-content'>
            <h4>Trending</h4>
            <h4>Explore</h4>
            <h4>About</h4>
            <h4>Log in</h4>
            <div className='login-logo'></div>
        </div>
      </nav>

      <div className='middle-content'>
        <h1>Hair Spectacle</h1>
        <img src={small} alt="" className='small-img'/>
        <img src={big} alt="" className='big-img'/>
        <div className='description'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a ex risus. Integer cu. Fusce a ex risus. Integer cu.</h5>
            <button>Explore</button>
        </div>
      </div>
    </>
  )
}

export default Landing
