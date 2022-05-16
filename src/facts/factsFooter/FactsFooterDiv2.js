import React from 'react'
import "./factsFooter.css"

export default function FactsFooterDiv2(props) {

  //used for the second box in FactsFooter
  return (
    <div className='factsFooter-div2'>
                <div className="factsFooter-div2-flex">
                   <div className='factsFooter-div2-text'>
                       <p className='factsFooter-div2-text-bold'>{props.header}</p>
                       <p className='factsFooter-div2-text-light'>{props.text}</p>
                   </div>
               </div>
           </div>
  )
}
