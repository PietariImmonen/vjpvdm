import React from 'react'
import "./video.css"

export default function Video() {

  //video of the main page
  return (
    <div className='video'>  
        <iframe className='video-frame'
        src="https://www.youtube.com/embed/CCUN9hn1J5g" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
    </div>
  )
}
