import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Firstpage from "./Firstpage";
import BasicInfo from "./BasicInfo";
import Skills from "./Skills";
import Contact from "./Contact";
import Form from "./Form";
import Navbar from "../components/Navbar";
import OverMezelf from "./OverMezelf";

export default function Mainpage() {
  //test
  return (
    <>
      <Parallax pages={6} style={{ top: "0", left: "0" }} className="pages">
        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "right",
            color: "white",
            backgroundColor: "#292d3e",
          }}
        >
          <Navbar />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.1}
          speed={0.2}
          style={{
            display: "flex",
            color: "white",
            backgroundColor: "#292d3e",
          }}
        >
          <Firstpage />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            backgroundColor: "#292d3e",
          }}
        >
          <OverMezelf />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            backgroundColor: "#292d3e",
          }}
        >
          <BasicInfo />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            backgroundColor: "#292d3e",
          }}
        >
          <Skills />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            backgroundColor: "#292d3e",
          }}
        >
          <Contact />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          speed={0.2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            backgroundColor: "#292d3e",
          }}
        >
          <Form />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
