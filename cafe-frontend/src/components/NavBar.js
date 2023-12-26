import React from 'react';
import justadalogo from '../images/justadalogo.jpeg';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><img src={justadalogo} alt="Logo" className="logo"/></li>
        <li><a href='#locateus'>Locate Us</a></li>
        <li><a href='#orderonline'>Order Online</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
