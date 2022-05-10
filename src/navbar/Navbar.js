import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {

  const style = {
    color: 'white',
    textDecoration: 'none'
  }
  return (
    <div className="navbar">
        <div className='navbar-items'>
            <ul className='navbar-list'>
                <Link style={style} to="/"><li className='navbar-item'>etusivu</li></Link>
                <Link style={style} to="/stories"><li className='navbar-item'>meidän tarinat</li></Link>
                <Link style={style} to="/facts"><li className='navbar-item'>faktatietoa</li></Link>
            </ul>
        </div>
    </div>
  )
}
