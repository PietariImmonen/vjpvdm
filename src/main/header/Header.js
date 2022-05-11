import React, { useState } from 'react'
import "./header.css"
import { SliderData } from './SliderData'
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa';

export default function Header(props) {

  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  if(!Array.isArray(props.slides) || props.slides.length <= 0) {
    return null
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1)
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  return (
    <div className='header'>
      <div className='slider'>
        <FaCaretLeft size={"100px"} className='left-arrow' onClick={prevSlide}/>
        <FaCaretRight size={"100px"} className='right-arrow' onClick={nextSlide}/>
          {SliderData.map((img, index) => {
            return (
              <div className={index === current ? "slide active" : "slide"} key={index}>
                {index === current && (<img src={img.image} alt="slider" className='slider-image'/>)}
              </div>
              
            )
          })}
      </div>
    </div>
  )
}
