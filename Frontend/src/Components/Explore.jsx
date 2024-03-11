import {useState, useEffect} from 'react'
import './Explore.css'
import axios from 'axios'
import Navbar from './Navbar'

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
                <h4 className='bizarreness'>Bizarreness Level: {info.bizarreness_level}</h4>
                <h5 className='category'>Category: {info.category}</h5>
                <h5 className='accessories'>Accessories: {info.accessories_involved} </h5>
                <button className='explore-button'>Explore</button>
              </div>        
            </div>
					)
				})}
    </>
  )
}


