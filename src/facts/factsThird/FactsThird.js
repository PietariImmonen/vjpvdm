import React from 'react'
import FactsContainer from './FactsContainer'
import "./factsThird.css"

export default function FactsThird() {

  //used for storing content in facts site in the 3 boxes
  return (
    <div className='factsThird'>
        <div className='factsThird-h1'>Lapset kohtaavat päivittäin valtavan määrän – tuhansia erilaisia – viruksia.
         Rokotteet opettavat lapsesi immuunijärjestelmää puolustustautumaan sellaisilta viruksilta,
          joita ihminen ei vielä syntyessään tunnista. 
        </div>
        <div className='factsThird-h1'>
           Rokotteet eivät sisällä toimivaa virusta sellaisenaan,
           vaan immuunijärjestelmän aktivointi tapahtuu muilla tavoin. On useita inhimillisiä syitä hankkia rokote.
        </div>
        <div className='factsThird-flex'>
            <FactsContainer 
            bgColor = {false}
            number = "1"
            header = "Lapsesi tulevaisuus"
            paragraph = "Rokotus suojaa lastasi jopa hengenvaarallisilta taudeilta. Monet infektiotaudit ovat edelleen tappavia."
            />
            <FactsContainer 
            bgColor = {true}
            number = "2"
            header = "Läheistesi terveys"
            paragraph = "Kaikki eivät voi  rokottautua esimerkiksi allergian tai iän takia. Esimerkiksi pienet vauvat ovat usean kuukauden ajan alttiita hinkuyskälle. Rokotus suojaa myös muita."
            />
            <FactsContainer 
            bgColor = {false}
            number = "3"
            header = "Tulevat sukupolvet"
            paragraph = "Rokotukset parantavat väestön terveyttä pitkällä aikavälillä. Esimerkiksi isorokkorokotusta ei enää tarvita, koska aiempien sukupolvien rokotuskampanjat hävittivät taudin."
            />
        </div>
    </div>
    
  )
}
