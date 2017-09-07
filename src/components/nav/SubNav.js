import React, { Component } from 'react';

import '../../styles/sub-nav.css';

class SubNav extends Component {
  constructor() {
    super();
    this.state = {
      subItems: [
        {
          link: 'https://www.facebook.com/JCDevNYC/',
          data: 'facebook',
        },
        {
          link: 'https://www.linkedin.com/in/john-castrillon-a50141b8/',
          data: 'linkedin',
        },
        {
          link: 'https://github.com/Jbonez87',
          data: 'github',
        },
        {
          link: 'https://www.canva.com/jcastrillon087',
          data: 'canva',
        },
        {
          link: 'https://stackoverflow.com/users/story/7248866',
          data: 'stackoverflow',
        },
        {
          link: 'https://www.instagram.com/jbonez87/',
          data: 'instagram',
        },
      ],
    };
  }
  render() {
    const subLinks = this.state.subItems.map((subItem, idx) => {
      return (
        <li
          key={idx}
          data-link="container"
        >
          <a
            id={subItem.data}
            href={subItem.link}
            data-link="link"
            rel="noopener noreferrer"
            target="_blank"
          />
        </li>
      );
    });
    return (
      <ul className="sub">
        {subLinks}
      </ul>
    );
  }
}

export default SubNav;
