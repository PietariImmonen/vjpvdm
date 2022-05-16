import React from 'react'
import Gradient from './gradient/Gradient'
import GradientBottom from './gradientBottom/GradientBottom'
import PersonLeft from './personLeft/PersonLeft'
import PersonRight from './personRight/PersonRight'
import StoriesHeader from './storiesHeader/StoriesHeader'

export default function Stories() {

  //All the components for Stories gathered and displayed!
  return (
    <div>
      <StoriesHeader />
      <Gradient />
      <PersonLeft 
      image="/eetu.png"
      name="Matti"
      nameText="kahden lapsen isä"
      paragraph="Matin elämä lapsiperheellisenä on hektistä. Uuden ihmisen kasvattamisessa on suuri vastuu. Vaara tuntuu vaanivan joka puolella, mutta onneksi vastuullisella asenteella oravanpyörästäkin selviää. Hän kertoo, kuinka sitä tekee aina kaikkensa, jotta lapset saisivat mahdollisimman hyvät lähtökohdat elämään. Matille oli alusta alkaen itsestään selvää, että jälkikasvu tulisi saamaan lasten perusrokotussarjan eli kaikki THL:n suosittelemat rokotukset."
      paragraph2="“Arjessa sitä halutaan vain omat lapset turvassa ja terveinä. Kädet pestään ennen ruokailua ja pyörää ajaessa pidetään kypärää päässä. Vaaratilanteita pyritään välttämään kaikin mahdollisin keinoin.”"
      />
      <PersonRight 
      image="/marika.png"
      name="Saara"
      nameText="neuvolan terveydenhoitaja"
      paragraph="Saara, 35-vuotias neuvolan terveydenhoitaja on nähnyt paljon erilaisia tarinoita neuvolassa. Valtaosa Saaran hoivaan saapuneista lapsista jäi sinne pidemmäksi aikaa, ja ero rokottamattomien ja rokotettujen välillä on valtava. Saara tietää, kuinka kuluttavaa jokainen tunti tehohoidossa on pienelle potilaalle. Monet vanhemmat muuttavat suhtautumistaan rokotteisiin, kun vakava sairaus osuu omalle kohdalle. Saara pyrkii työssään käymään mahdollisimman avointa keskustelua ja antamaan vanhemmille riittävästi tietoa."
      paragraph2="“Tosi monilla, erityisesti ensimmäistä kertaa vanhemmiksi tulevilla on huolia omien lastensa terveydestä ja erityisesti rokotteista. Vaikka rokotteilla onkin ollut iso vaikutus merkittävien lastentautien hävittämisessä, keskustelua pitää silti ylläpitää, ja se on tärkeä osa meidän työtä täällä neuvolassa. Kun vanhemmat saavat tietoa rokotteista, he pystyvät myös tekemään hyviä päätöksiä lastensa terveydestä.”"
      />
      <PersonLeft 
      image="/anna.png"
      name="Jessica"
      nameText="somevaikuttaja"
      paragraph="20-vuotiaan somevaikuttaja Jessican arkipäivät nykyään kuluvat pitkälti somesisältöjen tuottamisen parissa. Lapsena Jessica päätyi tehohoitoon rokottamattomana, ja se on jättänyt häneen vahvan muiston. Vaikka lapsien saaminen on Jessicalle vielä kaukainen ajatus, on kokemus jättänyt häneen vahvan mielipiteen siitä, että rokotteista tulee keskustella ja tutkia – vasta riittävän tiedon saatuaan voi tehdä hyviä päätöksiä."
      paragraph2="“Sairastin pienenä melko paljon. Alle viisivuotiaana vietin noin kymmenen päivää teho-osastolla – sairastuin siis rokottamattomana pneumokokkiin. Muistan, kuinka vanhempani olivat todella huolissaan minusta, sillä käytännössä taistelin elämästäni. Jälkikäteen olemme pysyneet kyllä melko terveinä. Rokotteet ovat tuoneet meille turvaa.”"
      />
      <GradientBottom />
    </div>
  )
}
