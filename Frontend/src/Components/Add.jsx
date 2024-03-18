import React, { useState } from 'react'
import './Add.css'
import Navbar from './Navbar'
import leftImg from '../assets/formBG.jpg'
import axios from 'axios'
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom'

export default function Add() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [bizarreness, setBizarreness] = useState("")
    const [accessories, setAccessories] = useState("")
    const navigate = useNavigate()
    const [cookies, getCookie] = useCookies(['userName']);

    
    
    const submit = (e) =>{
      e.preventDefault()
      const username = cookies.userName;
      console.log(username)
      const obj={
        id: Math.random(100,10000000),
        hairstyle_name:name,
        description:description,
        bizarreness_level:bizarreness,
        category,
        is_colorful:true,
        accessories_involved:accessories,
        image,
        user:username
    }

    axios.post('http://localhost:3200/postcontent', obj)
    .then(result => {
      console.log(result)
      navigate('/explore')
    })
    .catch(err => console.log(err))
  } 

  return (
    <>
      <Navbar/>
      <div className='post-page'>
        <div className='left-div'>
          <img src={leftImg} alt="left Image" className='left-img'/>
          <h1 className='addpage-title'>Post Your Bizarre Hair Style</h1>
        </div>
        <div className='post-container'>
            <h2 className='post-title'>Post</h2>
            <input className='inputBox' value={image} type="text" placeholder='Enter Image URL' onChange={(e) => setImage(e.target.value)}/>
            <input className='inputBox' type="text" value={name} placeholder='Enter Name of the Hairstyle' onChange={(e) => setName(e.target.value)}/>
            <input className='inputBox' type="text" value={description} placeholder='Enter Description of the Hairstyle' onChange={(e) => setDescription(e.target.value)}/>
            <div className='category-bLevel'>
              <input className='small-inputBox' type="text" value={category} placeholder='Enter Category' onChange={(e) => setCategory(e.target.value)}/>
              <input className='small-inputBox' type="number" value={bizarreness} placeholder='Enter Bizarreness Level' onChange={(e) => setBizarreness(e.target.value)}/>
            </div>
            <input className='inputBox' type="text" value={accessories} placeholder='Enter Accessories' onChange={(e) => setAccessories(e.target.value)}/>
            <button className='post' onClick={submit}>Post</button>
        </div>
      </div>
    </>
  )
}