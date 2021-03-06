import React from 'react'
import "./personRight.css"

export default function PersonRight(props) {

  //Contents of the persons who has the picture in left side
  return (
    <div className='personRight'>
      <img src={props.image} alt="imag" className='personRight-image1'/>
        <div className='personRight-text-holder'>
            <div className='personRight-text-header'>
                <div className='personRight-h1'>{props.name}</div>
                <div className='personRight-h3'>{props.nameText}</div>
            </div>
            <p className='personRight-paragraph'>{props.paragraph}</p>
            <p className='personRight-paragraph personRight-quote'>{props.paragraph2}</p>
        </div>
        <img src={props.image} alt="imag" className='personRight-image'/>
    </div>
  )
}
