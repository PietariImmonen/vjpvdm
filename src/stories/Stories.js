import React from 'react'
import Gradient from './gradient/Gradient'
import GradientBottom from './gradientBottom/GradientBottom'
import PersonLeft from './personLeft/PersonLeft'
import PersonRight from './personRight/PersonRight'
import StoriesHeader from './storiesHeader/StoriesHeader'

export default function Stories() {
  return (
    <div>
      <StoriesHeader />
      <Gradient />
      <PersonLeft 
      image="/eetu.png"
      name="Matti"
      nameText="kahden lapsen isä"
      paragraph="Arjessa sitä halutaan vain omat lapset turvassa ja terveinä.
      Kädet pestään ennen ruokailua ja pyörää ajaessa pidetään kypärää päässä.
       Vaaratilanteita pyritään välttämään kaikin mahdollisin keinoin."
      />
      <PersonRight 
      image="/marika.png"
      name="Saara"
      nameText="neuvolan terveydenhoitaja"
      paragraph="Tosi monilla, erityisesti ensimmäistä kertaa vanhemmiksi
       tulevilla on tosi paljon huolia omien lastensa terveydestä ja erityisesti
       rokotteista. Vaikka onkin tosi selvää et rokotteilla on ollut iso vaikutus
       merkittävien lastentautien hävittämisessä, mutta keskustelua pitää silti
       ylläpitää ehdottomasti ja se on tärkeä osa meidän työtä täällä neuvolassa
       myös. Kun vanhemmat saa tietoa rokotteista, niin he pystyvät myös tekemään
        hyviä päätöksiä lastensa terveydestä."
      />
      <PersonLeft 
      image="/anna.png"
      name="Jessica"
      nameText="somevaikuttaja"
      paragraph="Tosiaan mä pienenä sairastin melko paljon. Alle viisvuotiaana vietin
       noin kymmenen päivää teho-osastolla – sairastuin siis rokottamattomana pneumokokkiin.
       Ja mä muistan et mun vanhemmat oli tosi huolissaan musta, mikä on ihan ymmärrettävää,
       sillä käytännössä taistelin mun elämästä. Jälkikäteen mä oon puhunut äidin kanssa mun
       sairausjaksosta vain kerran – ei siitä sen enempää irronnut – niin huolissaan ne
       musta silloin oli. Mut näin jälkikäteen ollaan pysytty kyl melko terveenä. Rokotteet
       on tuonut meille turvaa."
      />
      <GradientBottom />
    </div>
  )
}
