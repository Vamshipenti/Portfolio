import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <p className="about-intro">
          Hi, I'm <strong>Penti Vamshi</strong>, a passionate Full Stack Developer with experience in building modern web and mobile applications using <strong>ReactJS, React Native, Spring Boot</strong>, and other technologies. I enjoy creating efficient, user-friendly products that make an impact.
        </p>

        <div className="section-block">
          <h3 className="block-title">Education</h3>
          <ul className="education-list">
            <li><strong>SSC (2015)</strong> – 8.7 CGPA</li>
            <li><strong>Intermediate (2017)</strong> – 94.4%</li>
            <li><strong>B.Tech in CSE (2017–2021)</strong> – Guru Nanak Institutions, Hyderabad – 7.04 CGPA</li>
           
          </ul>
        </div>

        <div className="section-block">
          <h3 className="block-title">Experience</h3>
          <p>
            I began my career at <strong>Kapil Technologies</strong> as an Associate Engineer where I worked on full-stack Java and Spring Boot applications. I contributed to backend development, API integration, and frontend features with a focus on clean code and real-world business logic.
          </p>
        </div>

        <div className="section-block">
          <h3 className="block-title">Certifications</h3>
          <ul className="certification-list">
            <li>✔️ Software Engineer Intern – HackerRank</li>
            <li>✔️ Problem Solving Skills – HackerRank</li>
          </ul>
        </div>

        <div className="section-block">
          <h3 className="block-title">Currently Working On</h3>
          <p>
            I'm actively working on exciting projects including an <strong>E-Commerce App</strong>, a <strong>Personal Finance Tracker</strong>, and a <strong>Emotional-Wellbeing-Tracker</strong>. You can check them out in the <a href="projects" className="bg-gray-100 py-16 px-6">Projects section</a>.
          </p>
        </div>

        <div className="skills-section">
          <h3 className="block-title">Tech Stack</h3>
          <div className="skills-tags">
            <span>React</span>
            <span>React Native</span>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>Node.js</span>
            <span>Git</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
