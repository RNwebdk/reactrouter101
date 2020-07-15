import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='black'>
      <div className='nav-wrapper'>
        <NavLink to='/' className='brand-logo'>
          AirBnB
        </NavLink>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <NavLink exact to='/host'>
              Become a host
            </NavLink>
          </li>
          <li>
            <NavLink to='/help'>Help</NavLink>
          </li>
          <li>
            <NavLink to='/signup'>Sign up</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Log in</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
