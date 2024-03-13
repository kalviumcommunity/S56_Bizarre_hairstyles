import React, { useState } from 'react'
import Navbar from './Navbar'
import'./Update.css'
import leftImg from '../assets/formBG.jpg'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function Update() {

    const [name, useName] = useState("")
    const [image, useImage] = useState("")
    const [description, useDescription] = useState("")
    const [category, useCategory] = useState("")
    const [bizarreness, useBizarreness] = useState("")
    const [accessories, useAccessories] = useState("")
    const navigate = useNavigate()

    // const {id} = useParams()
    // const handleUpdade = (e) =>{
    //     e.preventDefault()
    //     let obj={
    //         id: id,
    //         hairstyle_name:name,
    //         description:description,
    //         bizarreness_level:bizarreness,
    //         category,
    //         is_colorful:true,
    //         accessories_involved:accessories,
    //         image
    //     }

    //     axios.put(`https://s56-bizarre-hairstyles.onrender.com/update/${id}`, obj)
    //     .then(result => {
    //     console.log(result)
    //     // console.log("hello")
    //     navigate('/explore')
    //     })
    //     .catch(err => console.log(err))
    // }

    const {_id} = useParams()
    const handleUpdade = async (e) =>{
        e.preventDefault()
        try {
            console.log("Updating with ID:", _id)

            let obj = {
                hairstyle_name: name,
                description: description,
                bizarreness_level: bizarreness,
                category: category,
                is_colorful: true,
                accessories_involved: accessories,
                image: image
            };
    
            await axios.put(`https://s56-bizarre-hairstyles.onrender.com/update/${_id}`, obj);
            //navigate('/explore');
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      <Navbar/>
      <div className='update-page'>
        <div className='left-div'>
          <img src={leftImg} alt="left Image" className='left-img'/>
          <h1 className='addpage-title'>Update Your Bizarre Hair Style</h1>
        </div>
        <div className='update-container'>
            <h2 className='update-title'>Update</h2>
            <input className='inputBox' value={image} type="text" placeholder='Enter Image URL' onChange={(e) => useImage(e.target.value)}/>
            <input className='inputBox' type="text" value={name} placeholder='Enter Name of the Hairstyle' onChange={(e) => useName(e.target.value)}/>
            <input className='inputBox' type="text" value={description} placeholder='Enter Description of the Hairstyle' onChange={(e) => useDescription(e.target.value)}/>
            <div className='category-bLevel'>
              <input className='small-inputBox' type="text" value={category} placeholder='Enter Category' onChange={(e) => useCategory(e.target.value)}/>
              <input className='small-inputBox' type="number" value={bizarreness} placeholder='Enter Bizarreness Level' onChange={(e) => useBizarreness(e.target.value)}/>
            </div>
            <input className='inputBox' type="text" value={accessories} placeholder='Enter Accessories' onChange={(e) => useAccessories(e.target.value)}/>
            <button className='update' onClick={handleUpdade}>Update</button>
        </div>
      </div>
    </div>
  )
}

