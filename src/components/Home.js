import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Home.css';
import profileImage from "./profile.jpg";
import leetcodeLogo from "./leet-logo2.png";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-image">
        <img src={profileImage} alt="Ganesh Kore" />
      </div>
      <div className="home-content">
        <h1 id="p2">Hello, I'm <span className="highlight">Rohith Kadari</span></h1>
        <p id="p1">And I'm good at "Front-end Development"</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/rohith-kadari-ab10bb2a5/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/RohithKadari" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://leetcode.com/u/chanti_1/" target="_blank" rel="noopener noreferrer">
            <img src={leetcodeLogo} alt="LeetCode" style={{ width: '35px', height: '35px' }} />
          </a>
        </div>
        <a href="https://drive.google.com/file/d/1kMDMQ9S9J_ZvMT4jAbZT_pwBhP1xKHF8/view?usp=drive_link" download="Rohith_Kadari_Resume.pdf" className="btn btn-resume">Download Resume</a>
      </div>
    </section>
  );
}

export default Home;
