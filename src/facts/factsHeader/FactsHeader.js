import React from 'react'
import "./factsHeader.css"

export default function FactsHeader() {
  return (

    //used for writing the header for facts
    <div className='factsHeader'>
        <h1 className='factsHeader-header'>Totta vai tarua? </h1>
        <p className='factsHeader-text'>
        Lasten ja nuorten rokottamattomuus on Suomessa erittäin harvinaista.
         Ensimmäinen rokote – isorokkoa vastaan – otettiin 
         käyttöön jo vuonna 1802. Viimeisen kahdensadan vuoden ajan 
         rokotteet ovat kehittyneet tehokkaaksi ja turvalliseksi 
         tavaksi torjua kaikenlaisia infektiotauteja. 
        </p>
        <p className='factsHeader-text'>
         Rokotteet eivät 
         aina välttämättä anna täydellistä suojaa tartunnalta, mutta yleensä 
         hyvän ja pitkäaikaisen vastustuskyvyn jopa hengenvaarallisia tauteja vastaan.
        </p>
    </div>
  )
}
