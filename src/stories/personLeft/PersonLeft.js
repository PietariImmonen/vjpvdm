import React from 'react'
import "./personLeft.css"

export default function PersonLeft(props) {
  return (
    <div className='personLeft'>
        <img src={props.image} alt="imag" className='personLeft-image'/>
        <div className='personLeft-text-holder'>
            <div className='personLeft-text-header'>
                <div className='personLeft-h1'>{props.name}</div>
                <div className='personLeft-h3'>{props.nameText}</div>
            </div>
            <p className='personLeft-paragraph'>{props.paragraph}</p>
        </div>
    </div>
  )
}
