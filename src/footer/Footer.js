import React from 'react'
import "./footer.css"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {

  const style = {
    color: "black"
  }

  return (
    <div className='footer'>
        <div className='footer-logo'>
        <img src="/helsinki.png" alt="imag" className='helsinki-png'/>
        <img src="/hus.png" alt="imag" className='hus-png'/>
        </div>
        <div className='footer-contacts'>
            <p>Ota yhteyttä</p>
            <p>Puh. Nro. 0400404004</p>
            <p>Sähköposti: hus.rokote@hus.fi</p>
            <p>Osoite: Hämeentie 1</p>
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
            <p className='social-hus'>HUS 2022</p>
        </div>
    </div>
  )
}
