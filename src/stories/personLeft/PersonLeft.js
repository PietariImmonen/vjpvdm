import React from 'react'
import "./personLeft.css"

export default function PersonLeft(props) {

  //Contents of the persons who has the picture in left side
  return (
    <div className='personLeft'>
        <img src={props.image} alt="imag" className='personLeft-image'/>
        <div className='personLeft-text-holder'>
            <div className='personLeft-text-header'>
                <div className='personLeft-h1'>{props.name}</div>
                <div className='personLeft-h3'>{props.nameText}</div>
            </div>
            <p className='personLeft-paragraph'>{props.paragraph}</p>
            <p className='personLeft-paragraph personLeft-quote'>{props.paragraph2}</p>
        </div>
    </div>
  )
}
