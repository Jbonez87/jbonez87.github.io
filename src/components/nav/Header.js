import React from 'react';

import '../../styles/header.css';

// Component imports
import Nav from './Nav';

// Image imports
import Logo from '../../images/header/jcflnb.svg';

const Header = () => {
  return (
    <header id="container-header">
      <div id="header">
        <div id="logo">
          <img
            id="main-logo"
            alt="main logo"
            title="John Castrillon - Full Stack Developer"
            src={Logo}
          />
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
