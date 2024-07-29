import "./Aboutcontentstyles.css";
import { Link } from "react-router-dom";
import abt1 from "../assets/about2.jpg";
import abt2 from "../assets/about1.jpg";

import React from "react";

const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a python back-end developer. Icreates secure websites for my
          clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={abt1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={abt2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;
