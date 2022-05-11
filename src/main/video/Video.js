import React from 'react'
import "./video.css"

export default function Video() {
  return (
    <div className='video'>  
        <iframe width="1000px" 
        height="600px"
        src="https://www.youtube.com/embed/i6XNgcMC2Zc" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    </div>
  )
}
