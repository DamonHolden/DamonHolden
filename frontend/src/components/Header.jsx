import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <span className='title'>damonholden.com</span>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Projects'>Projects</NavLink>
      </nav>
    </header>
  );
}
