import React from 'react'
import "./talks.css"

export default function Talks() {

  //all the contents of Main page after the video section
  return (
    <div className='talks'>
        <div className='talks-container1'>
            <h1 className='talks-header'>Keskustelua rokotteista 14.6. Messukeskuksessa ja verkossa</h1>
            <p className='talks-container1-text1'>Onko lapsillasi suositusten mukaiset rokotteet? Mietityttävätkö rokotteiden haittavaikutukset?
                Kaipaatko lisätietoa rokotuspäätöksesi tueksi?
            </p>
            <p className='talks-container1-text2'>Tule juttelemaan aiheesta kanssamme kesäkuussa Messukeskukseen! Tarjoamme turvallisen ympäristön,
             jossa asiantuntijat ovat vastaamassa juuri sinua askarruttaviin kysymyksiin.
              Keskustelevassa ilmapiirissämme pääset kuulemaan muiden kokemuksia ja voit halutessasi kertoa oman tarinasi. 
            </p>
        </div>

        <div className='talks-container2'>
            <p className='talks-container2-text1'>Tapahtumassa on tarjolla 
                ohjelmaa lapsille, joten voit 
                ottaa mukaan myös perheen
                pienimmät! Keskustelu on kuitenkin käynnissä jo ennen tapahtumaa verkkosivumme keskustelupalstalla.
            </p>
            <img src="/Lastenpiirros.png" alt="slider" className='talks-img'/>
        </div>
    </div>
  )
}
