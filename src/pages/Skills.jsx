import * as React from "react";
import JavaLogo from "../images/JavaLogo.png";
import logo from "../logo.svg";
import HTML5Logo from "../images/HTML5Logo.png";
import CSSLogo from "../images/CSSLogo.png";
import PythonLogo from "../images/PythonLogo.png";
import JSLogo from "../images/JSLogo.png";
import NodeJsLogo from "../images/nodeJs.png";
import MysqlLogo from "../images/Mysql.png";
import Rating from "@mui/material/Rating";

export default function Skills() {
  return (
    <body id="programmingSkills">
      <div>
        <h1>Programming related Skills</h1>
      </div>
      <div class="container">
        <div class="Java">
          <img src={JavaLogo} alt="java logo" /> <br></br>
          <Rating name="read-only" value={3.5} readOnly precision={0.5} />
        </div>
        <div class="React">
          <img src={logo} alt="React logo" /> <br></br>
          <Rating name="read-only" value={4.5} readOnly precision={0.5} />
        </div>
        <div class="Html">
          <img src={HTML5Logo} alt="HTML5Logo" /> <br></br>
          <Rating name="read-only" value={5} readOnly precision={0.5} />
        </div>
        <div class="CSS">
          <img src={CSSLogo} alt="CSSLogo" /> <br></br>
          <Rating name="read-only" value={3.5} readOnly precision={0.5} />
        </div>
        <div class="Python">
          <img src={PythonLogo} alt="PythonLogo" /> <br></br>
          <Rating name="read-only" value={2.5} readOnly precision={0.5} />
        </div>
        <div class="Javascript">
          <img src={JSLogo} alt="Javascript" /> <br></br>
          <Rating name="read-only" value={4} readOnly precision={0.5} />
        </div>
        <div class="NodeJs">
          <img src={NodeJsLogo} alt="NodeJs" /> <br></br>
          <Rating name="read-only" value={4.5} readOnly precision={0.5} />
        </div>
        <div class="Mysql">
          <img src={MysqlLogo} alt="Mysql" /> <br></br>
          <Rating name="read-only" value={3} readOnly precision={0.5} />
        </div>
      </div>
    </body>
  );
}
