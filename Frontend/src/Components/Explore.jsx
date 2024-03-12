import {useState, useEffect} from 'react'
import './Explore.css'
import axios from 'axios'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'


export default function Explore() {

    const [data, setData] = useState([])
    useEffect(() => {
      axios
        .get('https://s56-bizarre-hairstyles.onrender.com/getdata')
        .then((res) => {
          console.log(res.data)
          setData(res.data)
        })
    }, [])

  return (
    <>
        <Navbar/>
        <h1 className='explore-title'>Explore</h1>
        {data && data.map((info) => {
					return (
            <div className='explore' key={info._id}>
              <img className='explore-img' src={info.image} alt="Explore Img" />
              <div className='details'>
                <h3 className='title'>Name: {info.hairstyle_name}</h3>
                <h4 className='description-img'>Description: {info.description}</h4>
                <h4 className='bizarreness'><strong>Bizarreness Level:</strong> {info.bizarreness_level}</h4>
                <h5 className='category'><strong>Category:</strong> {info.category}</h5>
                <h5 className='accessories'><strong>Accessories:</strong> {info.accessories_involved} </h5>
                <Link to={`/update/${info._id}`}><button className='Update-button'>Update</button></Link>
                <button className='Delete-button'>Delete</button>
              </div>        
            </div>
					)       
				})}
    </>
  )
}

// https://i.pinimg.com/474x/2a/4a/09/2a4a09b15f2e725d001c15ec555cacaa.jpg
// The Cyberpunk Circuitry

// Description: Shaved sections of hair with LED lights embedded underneath
// Bizarreness Level: High
// Category: Cybernetic Edge
// Accessories: LED hair clips, circuit board hairpins