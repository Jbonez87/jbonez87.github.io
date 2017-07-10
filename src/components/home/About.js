import React from 'react';

// SVG imports
import Mac from '../../images/about/jcbw.svg';
import NYC from '../../images/about/nyc-rain.svg';
import Code from '../../images/about/code.svg';

const About = () => {
  return (
    <div id="presentation">
      <div className="block">
        <img
          src={Mac}
          alt="John Castrillon"
          title="John Castrillon | Full Stack Developer | Software Engineer"
        />
        <h2 className="presentation-title">About Me</h2>
        <p>
          Hi there! I'm a <span className="title">Software Engineer</span> with a passion for <span className="title">Full Stack Web Development.</span> My journey began in 2015 when I started coding with <span className="title">JavaScript.</span> I worked on this every day for 6 months until I finally felt ready to attend a rigorous, 12 week <span className="title">Immersive Boot Camp at General Assembly</span> in New York City.
        </p>
      </div>
      <div className="block">
        <img
          src={NYC}
          alt="New York"
          title="New York"
        />
        <h2 className="presentation-title">Creativity in Design</h2>
        <p>
          Creativity is a huge part of my design philosophy. <span className="title">Web Development</span> is my creative outlet. I focus on providing clean <span className="title">User Interfaces</span> and great <span className="title">User Experiences</span> when I'm working on a project. Everything from the <span className="title">Functionality</span> of a project to its <span className="title">Style,</span> begins and ends with the user.
        </p>
      </div>
      <div className="block">
        <img
          src={Code}
          alt="React Code"
          title="React Code"
        />
        <h2 className="presentation-title">Always Learning</h2>
        <p>
          The main reason I decided to pursue a career in <span className="title">Tech</span> is that I never wanted to stop learning. <span className="title">Languages and Frameworks</span> change so quickly. There's always a newer, cleaner and more efficient way of writing <span className="title">Code.</span> My goal as a <span className="title">Developer</span> is to keep my skills fresh and my mind open. Thanks for reading!
        </p>
      </div>
    </div>
  );
}

export default About;
