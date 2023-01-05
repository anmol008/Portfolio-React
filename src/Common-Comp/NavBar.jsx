import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import './Common.css'
export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <img src='./images/logo2.png' alt="" className="menu-icon" />
      <ul className="nav-list">
        <li>
          <NavLink className="nav-link" to='/'>HOME</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to='/about'>ABOUT</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to='/certificate'>UPGRAD CERTIFICATE</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to='/contact'>CONTACT</NavLink>
        </li>
      </ul>
    </nav>
  )
}
