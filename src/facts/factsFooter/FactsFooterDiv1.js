import React from 'react'
import "./factsFooter.css"

export default function FactsFooterDiv1(props) {

    //used for the first box in FactsFooter
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
