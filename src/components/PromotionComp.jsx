import React from 'react'
import CardComp from './CardComp'
import nike from '../images/product/nike.png';

const PromotionComp = (props) => {
  const {currentPosts} = props
  return (
    <React.Fragment>
      <div className="row">
        {currentPosts.map((row) => (
          <div className="col-md-3 col-12  mb-2" key={row.id}>
              <CardComp text={row.title} img={ nike} />
          </div>
        ))}
            
        </div>

    </React.Fragment>
  )
}

export default PromotionComp