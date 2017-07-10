import React from 'react';

// Component imports
import About from './home/About';
import IntroBanner from './home/IntroBanner';

// SVG imports
import Banner from '../images/home/skill-banner.svg';

const Home = () => {
  return (
    <div>
      <IntroBanner />
      <About />
      <div id="skills">
        <img src={Banner} alt="skills banner"/>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default Home;
