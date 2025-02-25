import React, { Component } from 'react'
import Kobe from './../assets/Kobe.png';
import Img1 from './../assets/img1.png';
import Img2 from './../assets/img2.png';
import Img3 from './../assets/img3.png';

const about_me = () => {
    return (
      <div className='container'>
        <div className="about-me-container">
          <h1>ABOUT ME</h1>
          <p>
          Hi! I'm <strong>Kobe Jamaal S. Elisan</strong>, a front-end developer and UI/UX designer
          who is passionate about creating engaging and user-friendly experiences.
          I'm currently pursuing a <strong>Bachelor of Science in Information Technology</strong> at <strong>
          Western Mindanao State University</strong>. My expertise includes front-end 
          development and UI/UX design, with a focus on crafting intuitive digital experiences.
          I specialize in <strong>JavaScript, React, HTML, and CSS</strong>, and I emphasize  
          building clean, responsive and accessible web interfaces. I enjoy problem-solving and I'm dedicated to
          continuously improving my skills to develop better and more efficient web applications.
          </p>  
            <div class="myskill">
              <h2>My Skill</h2>
                <div class="skill-box">
                    <span class="title">JavaScript</span>

                    <div class="skill-bar">
                        <span class="skill-per html">
                            <span class="tooltip">40%</span>
                        </span>
                    </div>
                </div>

                <div class="skill-box">
                    <span class="title">React</span>

                    <div class="skill-bar">
                        <span class="skill-per css">
                            <span class="tooltip">45%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">Html</span>

                    <div class="skill-bar">
                        <span class="skill-per javascript">
                            <span class="tooltip">80%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">Css</span>

                    <div class="skill-bar">
                        <span class="skill-per nodejs">
                            <span class="tooltip">75%</span>
                        </span>
                    </div>
                </div>
            </div>
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
      </div>
    );
  };

export default about_me