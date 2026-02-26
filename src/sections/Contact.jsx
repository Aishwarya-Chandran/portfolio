import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import {
 
  FaEnvelope,
  FaLinkedinIn,

  FaGithub
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const formRef = useRef(null);
 

  const sendEmail = (e) => {
    e.preventDefault();
   

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,  
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY  
      )
      .finally(
        () => {
          
          formRef.current.reset();
          
        
   } );
  };
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Let’s Work Together</h2>

      <div className="contact-grid">
        {/* LEFT — FORM */}
        <div className="contact-card form-card">
          <h3>Send me a message</h3>

          <form ref={formRef} onSubmit={sendEmail} autoComplete="off">
            <label>Name</label>
            <input type="text" placeholder="Your name" name="user_name"/>

            <label>Email</label>
            <input type="email" placeholder="your@email.com" name="user_email"/>

            <label>Message</label>
            <textarea placeholder="Write your message..."  name="message"/>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT — INFO */}
        <div className="right-column">
          <div className="contact-card info-card">
            <p>
              I'm always open to discussing new opportunities, creative
              projects, or partnerships. Whether you have a specific project
              in mind or just want to explore possibilities, I'd love to
              connect.
            </p>

            <ul>
              <li>• Web Development (React)</li>
              <li>• Machine Learning Model Development (Scikit-learn,predictive systems)</li>
              <li>• Data Analysis & Visualization</li>
              <li>• AI-powered Web Applications</li>
              <li>• Backend Development and Model deployment</li>
              <li>• Freelancing Projects</li>
              <li>• Remote Collaborations</li>
            </ul>
          </div>

          <div className="contact-card social-card">
            <h4>My Socials</h4>

            <div className="social-icons">
             {/*} <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> */}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aishwaryachandran4614@gmail.com"
               target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
              <a href="https://x.com/viobloom" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
              <a href="https://www.linkedin.com/in/aaishwaryachandran" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://github.com/Aishwarya-Chandran" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub/></a>
            {/*  <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
