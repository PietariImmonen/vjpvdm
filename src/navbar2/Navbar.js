import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './StyledComponents';
import "./navbar.css"

export default function Navbar(props) {

  //all the contents of Navbar, used styled components
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
        <NavLink to='/'>
          etusivu
        </NavLink>
        <NavLink to='/stories'>
          meidän tarinat
        </NavLink>
        <NavLink to='/facts'>
          tietoa
        </NavLink>
        <NavLink to='/comments'>
          kommentoi
        </NavLink>
      </NavMenu>
    </Nav>
  </>
  )
}
