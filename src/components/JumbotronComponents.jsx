import React from 'react'
import Gs1Bg from "../images/bgGs14.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/autoplay';

// import required modules
import { Autoplay } from "swiper";

const JumbotronComponents = () => {
  return (
    <React.Fragment>
        <>
        <Swiper
        autoplay={{ delay: 5000 }}
        modules={[ Autoplay]}
        >
          <SwiperSlide>
            <div className=' position-relative overflow-hidden gs1Box'>
              
              <div className="gs1ImgBox mx-lg-5">
                <img alt='' src={Gs1Bg} className="d-block"/>
              </div>
              <div className="gs1TextBox">
                <h1>Want your <br/> product to <br/> Appear here?</h1>
                <span className='fw-light'>We have an average of 3k view daily</span>
              </div>
              
            </div>   
          </SwiperSlide>
          <SwiperSlide>
            <div className=' position-relative overflow-hidden gs1Box'>
              
              <div className="gs1ImgBox mx-lg-5">
                <img alt='' src={Gs1Bg} className="d-block"/>
              </div>
              <div className="gs1TextBox">
                <h1>Want your <br/> product to <br/> Appear here?</h1>
                <span className='fw-light'>We have an average of 3k view daily</span>
              </div>
              
            </div> 
          </SwiperSlide>
          <SwiperSlide>
            <div className=' position-relative overflow-hidden gs1Box'>
              
              <div className="gs1ImgBox mx-lg-5">
                <img alt='' src={Gs1Bg} className="d-block"/>
              </div>
              <div className="gs1TextBox">
                <h1>Want your <br/> product to <br/> Appear here?</h1>
                <span className='fw-light'>We have an average of 3k view daily</span>
              </div>
              
            </div> 
          </SwiperSlide>
        </Swiper>
        </>

    </React.Fragment>
  )
}

export default JumbotronComponents
