import React from 'react'
import { MdFastfood } from 'react-icons/md';
import { GiMedicinePills, GiLoincloth } from 'react-icons/gi';
import { BsLaptop } from 'react-icons/bs';
import { SiYoutubemusic } from 'react-icons/si';

const FeaturedComp = () => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mt-3">
          <div className="col">
            <div style={{color: "#0d2589"}}><MdFastfood className='fs-1'/> <p className='mt-1'>Food</p></div>
          </div>
          <div className="col">
            <div style={{color: "#0d2589"}}><GiMedicinePills className='fs-1'/><p className='mt-1'>Dreug</p></div>
          </div>
          <div className="col">
            <div style={{color: "#0d2589"}}><BsLaptop className='fs-1'/><p className='mt-1'>Electronic</p></div>
          </div>
          <div className="col">
            <div style={{ color: "#0d2589" }}><GiLoincloth  className='fs-1'/><p className='mt-1'>Cloth</p></div>
          </div>
          <div className="col">
            <div style={{ color: "#0d2589" }}><SiYoutubemusic  className='fs-1'/><p className='mt-1'>Entertainment</p></div>
          </div>

          <div className="col">
            <div style={{color: "#0d2589"}}><MdFastfood className='fs-1'/> <p className='mt-1'>Food</p></div>
          </div>
          <div className="col">
            <div style={{color: "#0d2589"}}><GiMedicinePills className='fs-1'/><p className='mt-1'>Dreug</p></div>
          </div>
          <div className="col">
            <div style={{color: "#0d2589"}}><BsLaptop className='fs-1'/><p className='mt-1'>Electronic</p></div>
          </div>
          <div className="col">
            <div style={{ color: "#0d2589" }}><GiLoincloth  className='fs-1'/><p className='mt-1'>Cloth</p></div>
          </div>
          <div className="col">
            <div style={{ color: "#0d2589" }}><SiYoutubemusic  className='fs-1'/><p className='mt-1'>Entertainment</p></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FeaturedComp