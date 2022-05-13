import React from 'react'
import "./factsFooter.css"
import FactsFooterDiv1 from './FactsFooterDiv1';
import FactsFooterDiv2 from './FactsFooterDiv2';

export default function FactsFooter() {
  return (
    <div className='factsFooter'>
        <p className='factsFooter-paragraph'>Rokotteissa on vain ainesosio, jotka ovat tarpeellisia rokotteen
             toimivuuden kannalta. Rokotteista aiheuttavat välillä lieviä
            haittavaikutuksia, kuten pistokohtan kipeyttä tai kuumetta,
            mutta vakavat haittavaikutukset ovat harvinaisia.
        </p>
        <p className='factsFooter-paragraph'>Nykyiset
            rokotteet ovatkin äärimmäisen turvallisia. Niiden kehitys
            kestää yleensä lähes vuosikymmenen.
        </p>
        <p className='factsFooter-paragraph'>Erikoistapauksissa
            nopeammalla aikataululla kehitetyt pandemiarokotteet (kuten koronarokote)
            eivät jousta tästä äärimmäisen turvallisuusprosessista vaatimuksilta mitenkään,
            vaan useiden vuosien perättäiset testausvaiheet on suoritettu vain yhtä aikaa.
       </p>

       <div className='factsFooter-container'>
           <FactsFooterDiv1 
           header="Tieto rokotteiden turvallisuudesta ja toimivuudesta perustuu tieteeseen ja tutkimukseen"
           text="Väitteet esimerkiksi tehokkuudesta ja haittavaikutusten määrästä voidaan vahvistaa riippumattomasti."
           />
           <FactsFooterDiv2 
           header="Rokotteiden kehittäminen on kestää useita vuosia ja on huolellisen työn tulos"
           text="Muiden lääkkeiden tavoin rokotteet kehitetään turvallisuus edellä. Yleensä lääkkeeltä vie ideasta kaupan hyllylle lähes vuosikymmenen, mutta nopeampi kehittäminen on mahdollista, mikäli eri testausvaiheet suoritetaan yhtä aikaa."
           />
           <FactsFooterDiv1 
           header="Haittavaikutuksia seurataan suurella tarkkuudella"
           text="Kaikilla lääkkeilla on epäsuoria vaikutuksia, mutta niitä pystytään hallitsemaan tarkalla seurannalla. Suomessa tietoja tallennetaan muun muassa THL:n rokotusrekisteriin, josta dataa muihin tietokantoihin yhdistelemällä voidaan löytää syy-seuraussuhtteita."
           />
       </div>
    </div>
  )
}
