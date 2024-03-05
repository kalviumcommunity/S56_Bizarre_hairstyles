import React from 'react'
import './Explore.css'
import explore from "../assets/exploreImg.jpg"

export default function Explore() {

    const [data, setData] = useState([])
    useEffect(() => {
      axios
        .get('')
        .then((res) => {
          console.log(res.data)
          setData(res.data)
        })
    }, [])

  return (
    <>
      
      <h1 className='explore-title'>Explore</h1>
      <div className='explore'>
        <img className='explore-img' src={explore} alt="Explore Img" />
        <div className='details'>
          <h3 className='title'>Glitter Beard</h3>
          <h4 className='description-img'>Beard covered in glitter</h4>
          <h4 className='bizarreness'>Bizarreness level: 5</h4>
          <h5 className='category'>Category: Hipster</h5>
          <h5 className='accessories'>Accessories: Glitter gel, stencil </h5>
          <button className='explore-button'>Explore</button>
        </div>        
      </div>

      

        {/* {data && data.map((info) => {
					return (
						<div className='explore'>
              <img className='explore-img' src={explore} alt="Explore Img" />
              <div className='details'>
                <h3 className='title'>Glitter Beard</h3>
                <h4 className='description-img'>Beard covered in glitter</h4>
                <h4 className='bizarreness'>Bizarreness level: 5</h4>
                <h5 className='category'>Category: Hipster</h5>
                <h5 className='accessories'>Accessories: Glitter gel, stencil </h5>
                <button className='explore-button'>Explore</button>
              </div>        
            </div>
					)
				})} */}
    </>
  )
}


