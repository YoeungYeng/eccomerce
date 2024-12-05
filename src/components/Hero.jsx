import React, { useEffect } from 'react'
import slider from "../assets/images/slider-bg.jpg";
// import Silder from './Silder';
import Silders from './Silders';
import Slider from './Slider';


const Hero = () => {
    
 
    
    
    
  return (
    <>
      <section className="slider_section">
        <div className="slider_bg_box">
          {/* <img src={slider} alt="Slider Background" /> */}
          <Slider />
        </div>
        <Silders />
      </section>
      
    </>
  )
}

export default Hero