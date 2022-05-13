import React from 'react'
import "./factBoxes.css"

export default function FactBoxes() {
  return (
    <div className='factBoxes'>
        <div className='factBoxes-first'>
            <div className='first-firstBox'>
                <p className='factBox-normal'>Suomessa lapsilla ja nuorilla 
                    on mahdollisuus saada rokotus
                </p>
                <p className='factBox-big'>13 tautia</p>
                <p className='factBox-normal'>vastaan.</p>
            </div>
            <div className='first-secondBox'>
                <p className='factBox-difBig'>99,3%</p>
                <p className='factBox-dif'>kouluikäisistä lapsista on saanut perusrokotussarjan.</p>
            </div>
        </div>
        <div className='factBoxes-second'>
            <div className='first-secondBox'>
                <p className='factBox-dif'>
                    Aiemmin vesirokko sairastettiin lähes poikkeuksetta lapsena.
                     Nykyään siitä vasten rokotetaan.
                </p>
                <p className='factBox-difBig'>
                Yli 83%
                </p>
                <p className='factBox-dif'>
                lapsista saa vesirokkorokotteen.
                </p>

            </div>
            <div className='first-firstBox'>
                <p className='factBox-big'>2020</p>
                <p className='factBox-normal'>otettiin käyttöön lasten perusrokotussarjan uusimman jäsenet
                 – HPV-rokote pojille sekä meningokokkirokote riskiryhmille.
                 </p>
            </div>
        </div>
        <div className='factBoxes-third'>
            <div className='third-firstBox'>
            <p className='factBox-normal'>Useat vakavat taudit on saatu hävittyä lähes 
            kokonaan rokotteiden ansiosta. Suomi on esimerkiksi ollut
                </p>
                <p className='factBox-big'>37 vuotta</p>
                <p className='factBox-normal'>täysin poliovapaa maa. Polio on vakavia halvausoireita aiheuttava tauti.</p>
            </div>
            <div className='third-secondBox'>
                <p className='factBox-difs'>Nykyiset rokotteet ovat äärimmäisen turvallisia.
                 Todennäköisyys saada vakava allerginen reaktio rokotteesta on noin</p>
                <p className='factBox-difBig'>0,0001%</p>
            </div>
        </div>
    </div>
  )
}
