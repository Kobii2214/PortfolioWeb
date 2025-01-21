import React from 'react';
import Kobe from './../assets/Kobe.png';
import Img1 from './../assets/img1.png';
import Img2 from './../assets/img2.png';
import Img3 from './../assets/img3.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Kobe Jamaal Elisan</h1>
        <p>
          I’m a Front-end developer<br />
          and UI/UX designer
        </p>
        <div className="clickable-images">
          <a href="#img1">
            <img src={Img1} alt="Image 1" className="clickable-img" />
          </a>
          <a href="#img2">
            <img src={Img2} alt="Image 2" className="clickable-img" />
          </a>
          <a href="#img3">
            <img src={Img3} alt="Image 3" className="clickable-img" />
          </a>
        </div>
      </div>
  
      <div className="hero-image">
        <img src={Kobe} alt="Kobe Jamaal Elisan" />
      </div>
    </div>
  );
};

export default Hero;
