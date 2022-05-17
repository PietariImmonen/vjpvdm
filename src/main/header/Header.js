import React, { useEffect, useState } from 'react'
import "./header.css"

export default function Header(props) {

  //used for the picture carousel in Main

  const [current, setCurrent] = useState(0);  //keeps track of the current picture
  const slideLength = props.slides.length //the length of the pictures

  const automatic = true; //sets process to automatic
  let slideInterval; //helping variable
  let intervalTime = 5000; //the time in milliseconds of the pictures changing

  const nextSlide = () => {
    setCurrent(current === slideLength - 1 ? 0 : current + 1);
    console.log("next");
  }; //setting the state of the next picture and rolling over of the list

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  } //setting the interval

  useEffect(() => {
    setCurrent(0);
  }, []); //using effect

  useEffect(() => {
    if (automatic) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [current]); //checks if the thing is automatic and plays with it

  //the contents of the carousel
  return (
    <div className='header'>
      <div className='texts'>
        <h1 className='header-text'>Jutellaan rokotteista</h1>
        <h4 className='header-text2'>Terveys on meidän kaikkien yhteinen asia. Suurista päätöksistä on hyvä keskustella – etenkin kun ne koskettavat rakkaimpiamme. Tule juttelemaan rokotteista 14.6.</h4>
      </div>
        <div className='slider'>
          {props.slides.map((img, index) => {
            return (
              <div className={index === current ? "slide active" : "slide"} key={index}>
                {index === current && (<img src={img.image} alt="slider" className='slider-image'/>) /*mapping through pictures*/}
              </div>
        
            )
          })}
        </div>
    </div>
  )
}
