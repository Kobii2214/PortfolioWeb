import React, { Component } from 'react'
import Kobe from './../assets/Kobe.png';
import Img1 from './../assets/img1.png';
import Img2 from './../assets/img2.png';
import Img3 from './../assets/img3.png';

const about_me = () => {
    return (
      <div className="about-me-container">
        <h1>ABOUT ME</h1>
        <p>
        Hi! I'm <strong>Kobe Jamaal S. Elisan</strong>, a front-end developer and UI/UX designer
        passionate about crafting engaging and user-friendly experiences.
        I'm currently studying <strong>Bachelor of Science in Information Technology</strong> at <strong>
          Western Mindanao State University</strong>. My expertise includes front-end 
        development, UI/UX design and creating intuitive digital experiences.
        I specialize in <strong>JavaScript, React, HTML, CSS</strong>, focusing on 
        building clean, responsive and accessible web interfaces. I enjoy problem-solving and 
        continuously improving my skills to develop better and more efficient web applications.
        </p>
        <h2>
          Contact me:
        </h2>
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
    );
  };

export default about_me