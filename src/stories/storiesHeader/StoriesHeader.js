import React from 'react'
import "./storiesHeader.css"

export default function StoriesHeader() {
  return (
    <div className='storiesHeader'>
        <h1 className='storiesHeader-header'>Kolme tarinaa rokotteista</h1>
        <p className='storiesHeader-text'>Rokotteet herättävät meissä monia tunteita – suojaa ja turvaa, mutta joskus myös epävarmuutta. Tarinoita rokotteista löytyy laidasta laitaan. Kolme helsinkiläistä kertoi meillä omakohtaisen tarinansa rokotteista.</p>
        <p className='storiesHeader-text'>Tule sinäkin jakamaan tarinasi 14.6. Messukeskukseen.</p>
    </div>
  )
}
