import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Let’s Connect</h2>
        <p className="contact-subtitle">
          Feel free to reach out to me through the following platforms:
        </p>
        <div className="contact-info">
          <p>✉️ <strong>Email:</strong> <a href="mailto:vamshipentiofficial@gmail.com">vamshipentiofficial@gmail.com</a></p>
          <p>📞 <strong>Phone:</strong> <a href="tel:+919392193132">+91 93921 93132</a></p>
          <p>🔗 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vamshipenti/" target="_blank" rel="noopener noreferrer">linkedin.com/in/vamshipenti</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
