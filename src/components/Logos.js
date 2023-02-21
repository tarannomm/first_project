import React from "react";
import "../styles/css/Logos.css";
import samsung from "../images/samsung.png";
import iphone from "../images/apple.jpg";
import mi from "../images/mi.png";
const Logos = () => {
  return (
    <div className="logoContainer">
      <h2>Who supports us?</h2>
      <div className="imageContainer">
        <img src={samsung} alt="samsung pic" />
        <img src={mi} alt="xiaomi pic" />
        <img src={iphone} alt="iphone pic" />
      </div>
    </div>
  );
};

export default Logos;
