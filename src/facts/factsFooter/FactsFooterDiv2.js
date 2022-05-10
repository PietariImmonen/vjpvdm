import React from 'react'
import "./factsFooter.css"
import { FaCheck } from "react-icons/fa";

export default function FactsFooterDiv2(props) {
  return (
    <div className='factsFooter-div2'>
                <div className="factsFooter-div2-flex">
                   <FaCheck className="fa-check"/>
                   <div className='factsFooter-div2-text'>
                       <p className='factsFooter-div2-text-bold'>{props.header}</p>
                       <p className='factsFooter-div2-text-light'>{props.text}</p>
                   </div>
               </div>
           </div>
  )
}
