import React from 'react'
import "./talks.css"

export default function Talks() {
  return (
    <div className='talks'>
        <div className='talks-container1'>
            <h1 className='talks-header'>Keskustelua rokotteista 14.6. Messukeskuksessa</h1>
            <p className='talks-container1-text1'>Onko lapsillasi suositusten mukaiset rokotteet? Mietityttääkö rokotteiden vaikutukset?
                Kaipaatko lisätietoa aiheesta?
            </p>
            <p className='talks-container1-text2'>Tule juttelemaan kanssamme Messukeskukseen! Kesäkuussa on tarjolla turvallinen ympäristö,
             jossa asiantuntijat ovat vastaamassa juuri sinun kysymyksiisi.
              Tule mukaan keskustelevaan ilmapiiriin ja tuo esille myös omat kokemukset. 
            </p>
        </div>

        <div className='talks-container2'>
            <p className='talks-container2-text1'>Tapahtumassa on tarjolla 
                ohjelmaa lapsille, joten voit 
                ottaa mukaan myös perheen
                pienimmät!
            </p>
            <div className='talks-image-holder'>

            </div>
        </div>
    </div>
  )
}
