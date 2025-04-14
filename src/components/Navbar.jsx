import React from 'react';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="navbar-left">
  <img src="/vamshi.png" alt="Vamshi" className="navbar-avatar" />
  <span className="navbar-name">Penti Vamshi</span>
</div>
        <div className="nav-links">
          <a href="about" className="bg-white text-gray-800 py-16 px-6">About Me</a>
          <a href="projects" className="bg-gray-100 py-16 px-6">My Projects</a>
          <a href="contact" className="bg-white py-16 px-6">Contact Me</a>
          <a 
            href="/VAMSHI PENTI -  JAVA FULL STACK DEVELOPER.pdf" 
            download="VAMSHI PENTI -  JAVA FULL STACK DEVELOPER" 
            className="nav-resume-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
