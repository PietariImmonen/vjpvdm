import React from 'react'
import "./footer.css"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
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
                <FaInstagram size="50px"/>
                <FaTwitter size="50px"/>
                <FaFacebook size="50px"/>
            </div>
            <p className='social-hus'>HUS 2022</p>
        </div>
    </div>
  )
}
