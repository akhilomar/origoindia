import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li ><a href="#home" style = {{color: '#ffd8ac'}}>Home</a></li>
          <li><a href="#about" style = {{color: '#ffd8ac'}}>About</a></li>
          <li><a href="#menu" style = {{color: '#ffd8ac'}}>Menu</a></li>
          <li><a href="#offer" style = {{color: '#ffd8ac'}}>Offer</a></li>
          <li><a href="#contact" style = {{color: '#ffd8ac'}}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
