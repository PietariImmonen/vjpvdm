import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './StyledComponents';
import "./navbar.css"

export default function Navbar(props) {
  return (
    <>
    <Nav>
      <NavLink to='/'>
        <div className='nav-header'>
        Jutellaan Rokotteista
        </div>
      </NavLink>
      <Bars onClick={props.helper}/>
      <NavMenu>
        <NavLink to='/' activeStyle>
          etusivu
        </NavLink>
        <NavLink to='/stories' activeStyle>
          meidän tarinat
        </NavLink>
        <NavLink to='/facts' activeStyle>
          tietoa
        </NavLink>
      </NavMenu>
    </Nav>
  </>
  )
}
