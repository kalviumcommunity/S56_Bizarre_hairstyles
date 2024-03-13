import React, { useState } from 'react'
import './Add.css'
import Navbar from './Navbar'
import leftImg from '../assets/formBG.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Add() {
    const [name, useName] = useState("")
    const [image, useImage] = useState("")
    const [description, useDescription] = useState("")
    const [category, useCategory] = useState("")
    const [bizarreness, useBizarreness] = useState("")
    const [accessories, useAccessories] = useState("")
    const navigate = useNavigate()

    const submit = (e) =>{
      e.preventDefault()
      let obj={
        id: Math.random(100,10000000),
        hairstyle_name:name,
        description:description,
        bizarreness_level:bizarreness,
        category,
        is_colorful:true,
        accessories_involved:accessories,
        image
    }

    axios.post('https://s56-bizarre-hairstyles.onrender.com/postcontent', obj)
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
            <input className='inputBox' value={image} type="text" placeholder='Enter Image URL' onChange={(e) => useImage(e.target.value)}/>
            <input className='inputBox' type="text" value={name} placeholder='Enter Name of the Hairstyle' onChange={(e) => useName(e.target.value)}/>
            <input className='inputBox' type="text" value={description} placeholder='Enter Description of the Hairstyle' onChange={(e) => useDescription(e.target.value)}/>
            <div className='category-bLevel'>
              <input className='small-inputBox' type="text" value={category} placeholder='Enter Category' onChange={(e) => useCategory(e.target.value)}/>
              <input className='small-inputBox' type="number" value={bizarreness} placeholder='Enter Bizarreness Level' onChange={(e) => useBizarreness(e.target.value)}/>
            </div>
            <input className='inputBox' type="text" value={accessories} placeholder='Enter Accessories' onChange={(e) => useAccessories(e.target.value)}/>
            <button className='post' onClick={submit}>Post</button>
        </div>
      </div>
    </>
  )
}
