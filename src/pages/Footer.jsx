import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section social">
          <h4>Connect with Me</h4>
          <div className="icons">
            <a href="https://github.com/vamshipenti" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vamshipenti/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:vamshipentiofficial@gmail.com">
              <FaEnvelope />
            </a>
            <a href="tel:+919392193132">
              <FaPhoneAlt />
            </a>
          </div>
        </div>

        <div className="footer-section location">
          <h4><FaMapMarkerAlt /> Location</h4>
          <p>Hyderabad, India</p>
        </div>

        <div className="footer-section timezone">
          <h4><FaClock /> Timezone</h4>
          <p>Indian Standard Time (IST)</p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Penti Vamshi. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
