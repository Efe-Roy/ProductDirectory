import React from 'react'

const CardComp = (props) => {
  return (
    <div className='text-center'>
      <div className="card shadow rounded-0 p-1" style={{height: "227px"}}>
        <div className=''>
          <img src={props.img}
            className="card-img-top img-fluid"
            alt="..."
            style={{ width: "190px", height: "106px", objectFit: "contain" }}
          />
        </div>
            <div className="card-body">
              <p className="card-text">{ props.text}</p>
            </div>
      </div>
    </div>
  )
}

export default CardComp