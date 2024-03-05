import {useState, useEffect} from 'react'
import './Explore.css'
import axios from 'axios'


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
      
      {/* <h1 className='explore-title'>Explore</h1>
      <div className='explore'>
        <img className='explore-img' src={data.image} alt="Explore Img" />
        <div className='details'>
          <h3 className='title'>Name: {data.hairstyle_name}</h3>
          <h4 className='description-img'>Description: {data.description}</h4>
          <h4 className='bizarreness'>Bizarreness Level: {data.bizarreness_level}</h4>
          <h5 className='category'>Category: {data.category}</h5>
          <h5 className='accessories'>Accessories: {data.accessories_involved} </h5>
          <button className='explore-button'>Explore</button>
        </div>        
      </div> */}

      {/* id":7,"hairstyle_name":"Glitter Beard","description":"Beard covered in glitter","bizarreness_level":5,"category":"Hipster","is_colorful":true,"accessories_involved":"Glitter gel, stencil","image */}

      
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


