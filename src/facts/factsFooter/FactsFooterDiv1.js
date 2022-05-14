import React from 'react'
import "./factsFooter.css"
import { FaCheck } from "react-icons/fa";

export default function FactsFooterDiv1(props) {
  return (
        <div className='factsFooter-div1'>
               <div className="factsFooter-div1-flex">
                   <div className='factsFooter-div1-text'>
                       <p className='factsFooter-div1-text-bold'>{props.header}</p>
                       <p className='factsFooter-div1-text-light'>{props.text}</p>
                   </div>
               </div>
           </div>
  )
}
