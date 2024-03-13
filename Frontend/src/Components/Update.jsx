import React, { useState } from 'react'
import Navbar from './Navbar'
import'./Update.css'
import leftImg from '../assets/formBG.jpg'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function Update() {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [bizarreness, setBizarreness] = useState("")
    const [accessories, setAccessories] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await axios.get(`https://s56-bizarre-hairstyles.onrender.com/update/${_id}`)
            const existingData = response.data
            setName(existingData.hairstyle_name || '')
            setImage(existingData.image || '')
            setDescription(existingData.description || '')
            setCategory(existingData.category || '')
            setBizarreness(existingData.bizarreness_level || '')
            setAccessories(existingData.accessories_involved || '')
        } catch (error) {
              console.log(error)
          }
      }

      fetchData()
    }, [_id])

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
            }
    
            await axios.put(`https://s56-bizarre-hairstyles.onrender.com/update/${_id}`, obj);
            navigate('/explore');
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
            <input className='inputBox' value={image} type="text" placeholder='Enter Image URL' onChange={(e) => setImage(e.target.value)}/>
            <input className='inputBox' type="text" value={name} placeholder='Enter Name of the Hairstyle' onChange={(e) => setName(e.target.value)}/>
            <input className='inputBox' type="text" value={description} placeholder='Enter Description of the Hairstyle' onChange={(e) => setDescription(e.target.value)}/>
            <div className='category-bLevel'>
              <input className='small-inputBox' type="text" value={category} placeholder='Enter Category' onChange={(e) => setCategory(e.target.value)}/>
              <input className='small-inputBox' type="number" value={bizarreness} placeholder='Enter Bizarreness Level' onChange={(e) => setBizarreness(e.target.value)}/>
            </div>
            <input className='inputBox' type="text" value={accessories} placeholder='Enter Accessories' onChange={(e) => setAccessories(e.target.value)}/>
            <button className='update' onClick={handleUpdade}>Update</button>
        </div>
      </div>
    </div>
  )
}

