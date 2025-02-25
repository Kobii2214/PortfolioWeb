import React from 'react';
import Kobe from './../assets/Kobe.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Kobe Jamaal Elisan</h1>
        <p>
          I’m a Front-end developer<br />
          and UI/UX designer
        </p>
        <div className='Contacbtn'>
        <button className="checkwork">SEE MY PROJECTS</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={Kobe} alt="Kobe Jamaal Elisan" />
      </div>
    </div>
  );
};

export default Hero;
