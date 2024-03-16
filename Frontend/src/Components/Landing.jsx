import React from 'react'
import "./Landing.css"
import small from "../assets/small-img.png"
import big from "../assets/big-img.jpg"
import Navbar from './Navbar.jsx'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    <>
      <Navbar />
      <div className='middle-content'>
        <h1>Hair Spectacle</h1>
        <img src={small} alt="small img" className='small-img'/>
        <img src={big} alt="big img" className='big-img'/>
        <div className='description'>
            <h3>Strand by Strand, We Redefine Normalcy, Hair That Leaves an Impression.</h3>
            <h5>A Celebration of the Weird and Wonderful World of Hair, Where Quirkiness Meets Style in the Most Unexpected Ways!</h5>
            <Link to={"/explore"}><button className='main-explore'>Explore</button></Link>
        </div>
      </div>
    </>
  )
}

export default Landing
