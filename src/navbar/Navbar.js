import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
        <div className='navbar-items'>
            <ul className='navbar-list'>
                <li className='navbar-item'>etusivu</li>
                <li className='navbar-item'>meidän tarinat</li>
                <li className='navbar-item'>faktatietoa</li>
                <li className='navbar-item'>chättibotti</li>
            </ul>
        </div>
    </div>
  )
}
