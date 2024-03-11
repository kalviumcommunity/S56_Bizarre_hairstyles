import React from 'react'
import "./Landing.css"
import small from "../assets/small-img.png"
import big from "../assets/big-img.jpg"
import Navbar from './Navbar.jsx'

const Landing = () => {
  return (
    <>
      <Navbar/>
      <div className='middle-content'>
        <h1>Hair Spectacle</h1>
        <img src={small} alt="small img" className='small-img'/>
        <img src={big} alt="big img" className='big-img'/>
        <div className='description'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a ex risus. Integer cu. Fusce a ex risus. Integer cu.</h5>
            <button className='main-explore'>Explore</button>
        </div>
      </div>
    </>
  )
}

export default Landing
