import React from 'react'
import nike from '../images/product/nike.png';

const MostLikedComp = () => {
  return (
    <React.Fragment>
      {/* <div>MostLikedComp</div> */}

      <div className="card rounded-0 mb-1 py-3" style={{maxWidth:"490px", height: "160px"}}>
      <div className="row g-0">
        <div className="col-4">
          <img 
            src={nike} 
            className="img-fluid " alt="..."
            style={{ width: "190px", height: "106px", objectFit: "contain" }}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      </div>

      <div className="card rounded-0 mb-1 py-3" style={{maxWidth:"490px", height: "160px"}}>
      <div className="row g-0">
        <div className="col-4">
          <img 
            src={nike} 
            className="img-fluid " alt="..."
            style={{ width: "190px", height: "106px", objectFit: "contain" }}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      </div>

      <div className="card rounded-0 mb-1 py-3" style={{maxWidth:"490px", height: "160px"}}>
      <div className="row g-0">
        <div className="col-4">
          <img 
            src={nike} 
            className="img-fluid " alt="..."
            style={{ width: "190px", height: "106px", objectFit: "contain" }}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      </div>

    </React.Fragment>
    
  )
}

export default MostLikedComp