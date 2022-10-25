import React from 'react'
import CardComp from './CardComp';

import img1 from '../images/product/img1.png';
import nike from '../images/product/nike.png';
import earphone from '../images/product/earphone.png';
import energy from '../images/product/energy.png';
import drinkk from '../images/product/drinkk.png';
import wash from '../images/product/wash.png';
import drug from '../images/product/drug.png';
import cornflex from '../images/product/cornflex.png';

const NewProduct = (props) => {
    const {currentPosts} = props
  return (
    <div className=''>
        <div className="row">
            {currentPosts.map((row)=>(
                <div className="col-md-3 col-12  mb-2" key={row.id}>
                    <CardComp text={row.title} img={img1}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewProduct