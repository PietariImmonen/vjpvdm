import React, { useEffect, useState } from 'react'
import "./header.css"
import { SliderData } from './SliderData'

export default function Header(props) {

  const [current, setCurrent] = useState(0);
  const slideLength = SliderData.length

  const automatic = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrent(current === slideLength - 1 ? 0 : current + 1);
    console.log("next");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrent(0);
  }, []);

  useEffect(() => {
    if (automatic) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [current]);


  return (
    <div>
        <h1 className='header-text'>Jutellaan rokotteista</h1>
          {SliderData.map((img, index) => {
            return (
              <div className={index === current ? "slide active" : "slide"} key={index}>
                {index === current && (<img src={img.image} alt="slider" className='slider-image'/>)}
              </div>
              
            )
          })}
      
    </div>
  )
}
