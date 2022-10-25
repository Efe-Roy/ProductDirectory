import React from 'react'
import gs1 from "../images/gs1.png";

const Navigation = () => {
  return (
    <div className=''>
      <div className="row p-3">
        <span>
          <img src={gs1} alt="" style={{height:"2rem"}}/>
        </span>
      </div>
      <div className="row topNav p-3" >
        <div className='inner bg-white'>
          <input type="text" className='form-control w-lg-100 border-0 shadow-none ' placeholder='enter a key word to search a product'/>
        </div>
      </div>
    </div>
  )
}

export default Navigation