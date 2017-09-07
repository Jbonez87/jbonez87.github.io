import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/nav.css';

// Component imports
import NavSVG from './NavSVG';
import SubNav from './SubNav';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      navItems: [
        {
          data: 'home',
          path: '/',
          content: 'Home',
          width: '70',
          height: '60',
          svgId: 'home-svg',
        },
        {
          data: 'projects',
          path: '/projects',
          content: 'Projects',
          width: '76',
          height: '60',
          svgId: 'projects-svg',
        },
        {
          data: 'contact',
          path: '/contact',
          content: 'Contact',
          width: '75',
          height: '65',
          svgId: 'contact-svg'
        },
      ],
    };
  }
  render() {
    const links = this.state.navItems.map((navItem, idx) => {
      return (
        <li
          key={idx}
          data-link="container"
        >
          <Link
            id={navItem.data}
            to={navItem.path}
            data-link="link"
          >
            <NavSVG
              width={navItem.width}
              height={navItem.height}
              svgPath={navItem.data}
              idType={navItem.svgId}
            />
          </Link>
        </li>
      );
    });
    return (
      <nav id="menu">
        <ul>
          {links}
          <li
            data-link="container"
          >
            <a
              href={undefined}
              data-link="link"
              id="networks"
            >
              <NavSVG
                width="81"
                height="60"
                svgPath="networks"
                idType="networks-svg"
              />
            </a>
            <SubNav />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
