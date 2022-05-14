
import React from 'react'
import "./factsThird.css"

export default function FactsContainer(props) {

    const bgColor = props.bgColor ? "#2C98A0" : "white" ;
    const textColor = props.bgColor ? "white" : "#000000";
    const headerColor = props.bgColor ? "#CCE1DD" : "#2C98A0";

  return (
    <div className='factsContainer' style={{
        backgroundColor: bgColor,
      }}>
        <div className='factsContainer-flex'>
            <h2 className='factsContainer-number' style={{
            color: headerColor,
            }}>{props.number}</h2>

            <div className='factsContainer-line' style={{
            backgroundColor: headerColor,
            }}></div>
            <h1 className='factsContainer-header' style={{
            color: headerColor,
            }}>{props.header}</h1>
            <p className='factsContainer-paragraph' style={{
            color: textColor,
            }}>
                {props.paragraph}
            </p>
        </div>
    </div>
  )
}
