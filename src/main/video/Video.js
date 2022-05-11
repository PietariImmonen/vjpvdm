import React from 'react'
import "./video.css"

export default function Video() {
  return (
    <div className='video'>  
        <iframe width="1280px" 
        height="720px"
        src="https://www.youtube.com/embed/CCUN9hn1J5g" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    </div>
  )
}
