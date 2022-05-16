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
        Jutellaan rokotteista.
        </div>
      </NavLink>
      <Bars onClick={props.helper}/>
      <NavMenu>
        <NavLink to='/'>
          etusivu
        </NavLink>
        <NavLink to='/stories'>
          meidän tarinamme
        </NavLink>
        <NavLink to='/facts'>
          tietoa
        </NavLink>
        <NavLink to='/comments'>
          keskustelupalsta
        </NavLink>
      </NavMenu>
    </Nav>
  </>
  )
}
