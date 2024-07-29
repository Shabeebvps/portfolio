import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footerstyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Vallikkaparambil (H)</p>
              <p>Pandikkad, Malappuram
                Kerala India</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 8136838071
            </h4>
          </div>
          <div className="mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Shabeebrahmanvps@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h2>About Me</h2>
          <p>
          As a passionate web developer with a keen eye for design and a dedication to crafting seamless user experiences, I have honed my skills in React, CSS, and JavaScript. My recent projects showcase my ability to build responsive and dynamic web applications, demonstrating my commitment to clean code and innovative solutions.
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/profile.php?id=100008922248591"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://x.com/VpShabeeb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shabeeb-rahman-3b716719a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://www.instagram.com/shabeeb.vp_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://github.com/Shabeebvps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://wa.me/+918136838071"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
