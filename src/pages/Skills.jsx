import React from "react";
import JavaLogo from "../images/JavaLogo.png";
import logo from "../logo.svg";
import HTML5Logo from "../images/HTML5Logo.png";
import CSSLogo from "../images/CSSLogo.png";
import PythonLogo from "../images/PythonLogo.png";
import JSLogo from "../images/JSLogo.png";

export default function Skills() {
  return (
    <body id="programmingSkills">
      <div>
        <h1>Programming related Skills</h1>
      </div>
      <div class="container">
        <div class="Java">
          <img src={JavaLogo} alt="java logo" /> <br></br> Java 65%
        </div>
        <div class="React">
          <img src={logo} alt="React logo" /> <br></br>React 50%
        </div>
        <div class="Html">
          <img src={HTML5Logo} alt="HTML5Logo" /> <br></br>Html 85%
        </div>
        <div class="CSS">
          <img src={CSSLogo} alt="CSSLogo" /> <br></br>CSS 70%
        </div>
        <div class="Python">
          <img src={PythonLogo} alt="PythonLogo" /> <br></br>Python 40%
        </div>
        <div class="Javascript">
          <img src={JSLogo} alt="Javascript" /> <br></br>Javascript 75%
        </div>
      </div>
    </body>
  );
}
