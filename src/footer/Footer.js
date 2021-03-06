import React from 'react'
import "./footer.css"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {

  //used for the footer component and storing all the data in footer

  const style = {
    color: "#175054"
  }
  //color of the link

  return (
    <div className='footer'>
        <div className='footer-logo'>
          <img src="/helsinki.png" alt="imag" className='helsinki-png'/>
          <div className='hus'><img src="/hus.png" alt="imag" className='hus-png'/></div>
        </div>
        <div className='footer-contacts'>
            <h1>Ota yhteyttä</h1>
            
            <p><span>puhelinnumero </span>0400404004 <span>sähköposti </span>hus.rokote@hus.fi</p>
            <p><span>osoite </span><i>Haartmaninkatu 4, 00290 HELSINKI</i></p>
        </div>
        <div className='footer-social'>
            <div className='social-container'>
              <a target="_blank" href="https://www.instagram.com/hus_sairaala/" style={style} rel="noreferrer">
                <FaInstagram size="50px"/>
              </a>
              <a target="_blank" href="https://twitter.com/HUS_fi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" style={style} rel="noreferrer">
                <FaTwitter size="50px"/>
              </a>
              <a target="_blank" href="https://www.facebook.com/HUS.fi" style={style} rel="noreferrer">
                <FaFacebook size="50px"/>
              </a>
            </div>
            <p className='social-hus'>&copy; 2022 HUS</p>
        </div>
    </div>
  )
}
