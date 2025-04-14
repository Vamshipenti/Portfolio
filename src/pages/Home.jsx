import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profile from '../assets/vamshi.png';

const Home = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Hello, I'm</h2>
          <h1>Penti Vamshi</h1>
          <p>Full Stack Developer | Spring Boot | React Native | RESTful Services | MySQL | Microservices | Git | React JS |</p>
          <div className="hero-icons">
            <a href="mailto:vamshipentiofficial@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
            <a href="https://github.com/vamshipenti" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/vamshipenti" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={profile} alt="Penti Vamshi" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
