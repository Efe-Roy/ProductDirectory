import React from 'react'
import watch from '../images/watch.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';

// import required modules
import { Autoplay } from "swiper";

const DiscountComp = () => {
  return (
    <React.Fragment>
        {/* <div>
            <div className="row text-center">
                <div className="col ">
                    <span className='' style={{fontWeight: "900", fontSize: "1.6rem"}}>Get <br/> UP to 30%  off</span>
                </div>
            </div>
            <div className="row ">
                <div className="col p-0 gs1Discount">
                    <img alt='...' className='mt-1 p-1' src={ watch } />
                </div>
            </div>
            <div className="row text-center ">
                <div className="col p-1">
                    <span>
                        Momo wrsit watch <br/> by DANT LTD <br/> <a href='#'>click here</a>
                    </span>
                </div>
            </div>
        </div> */}
        
        <Swiper
            autoplay={{ delay: 3000 }}
            modules={[ Autoplay]}
        >
            <SwiperSlide>
                <div>
                    <div className="row text-center">
                        <div className="col ">
                            <span className='' style={{fontWeight: "900", fontSize: "1.6rem"}}>Get <br/> UP to 30%  off</span>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col p-0 gs1Discount">
                            <img alt='...' className='mt-1 p-1' src={ watch } />
                        </div>
                    </div>
                    <div className="row text-center ">
                        <div className="col p-1">
                            <span>
                                Momo wrsit watch <br/> by DANT LTD <br/> <a href='#'>click here</a>
                            </span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <div className="row text-center">
                        <div className="col ">
                            <span className='' style={{fontWeight: "900", fontSize: "1.6rem"}}>Get <br/> UP to 30%  off</span>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col p-0 gs1Discount">
                            <img alt='...' className='mt-1 p-1' src={ watch } />
                        </div>
                    </div>
                    <div className="row text-center ">
                        <div className="col p-1">
                            <span>
                                Momo wrsit watch <br/> by DANT LTD <br/> <a href='#'>click here</a>
                            </span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <div className="row text-center">
                        <div className="col ">
                            <span className='' style={{fontWeight: "900", fontSize: "1.6rem"}}>Get <br/> UP to 30%  off</span>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col p-0 gs1Discount">
                            <img alt='...' className='mt-1 p-1' src={ watch } />
                        </div>
                    </div>
                    <div className="row text-center ">
                        <div className="col p-1">
                            <span>
                                Momo wrsit watch <br/> by DANT LTD <br/> <a href='#'>click here</a>
                            </span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </React.Fragment>

  )
}

export default DiscountComp