import React from 'react';

import '../../styles/footer.css';

// Component imports
import ScrollButton from './ScrollButton';

const Footer = () => {
  return (
    <footer id="container-footer">
      <ScrollButton
        scrollStepInPx="50"
        delayInMs="17.58"
        data-button="scroller"
      />
      <div id="footer">
        <p
          id="copyright"
        >
          <span>
            &copy; 2016-{new Date().getFullYear()}  John Castrillon. All Rights Reserved.
          </span>
        </p>
      </div>
    </footer>
  );
};


export default Footer;
