import React from 'react'
import wine from '../images/product/wine.png';

const IdentiferComp = () => {
  return (
    <React.Fragment>
        <div className="d-flex text-white" style={{backgroundColor: "#777A87"}}>
            <div className="flex-shrink-0 mx-md-3">
                <img src={wine} className="img-fluid rounded-start" style={{height:"255px"}} alt="..."/>
            </div>
            <div className="flex-grow-1 ms-3 mt-5 mx-3 fw-bolder fs-3 font-monospace">
                Get a barcode that uniquely identifies your brand
            </div>
        </div>
    </React.Fragment>
  )
}

export default IdentiferComp