import "./Heroimgstyles.css";

import React from "react";
import intoimg from "../assets/img2.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={intoimg} alt="intoimg" />
      </div>
      <div className="content">
        <p>Hi, I'M SHABEEB RAHMAN</p>
        <h1>Python Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
