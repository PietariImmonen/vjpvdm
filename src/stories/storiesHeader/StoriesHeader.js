import React from 'react'
import "./storiesHeader.css"

export default function StoriesHeader() {
  return (
    <div className='storiesHeader'>
        <h1 className='storiesHeader-header'>Kolme tarinaa rokotteista</h1>
        <p className='storiesHeader-text'>Jokaisella on oma tarina liittyen rokotteisiin. Tokotteet hetättävät pekoa turvaa jne.</p>
    </div>
  )
}
