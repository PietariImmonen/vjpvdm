import React from 'react'
import "./storiesHeader.css"

export default function StoriesHeader() {

  //Header of the Stories Section
  return (
    <div className='storiesHeader'>
        <h1 className='storiesHeader-header'>Kolme tarinaa rokotteista</h1>
        <p className='storiesHeader-text'>Rokotteet herättävät meissä monia tunteita, kuten suojaa ja turvaa, mutta joskus myös epävarmuutta. Rokotekokemukset löytyy monenlaisia. Kolme helsinkiläistä kertoi meillä omakohtaisen tarinansa rokotteista.</p>
        <p className='storiesHeader-text'>Tule sinäkin jakamaan tarinasi 14.6. Messukeskukseen tai jo sitä ennen sivustomme keskustelupalstalla.</p>
    </div>
  )
}
