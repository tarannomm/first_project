import React from "react";
import load from "../images/react.jpg";
import "../styles/css/Loading.css";
const Loading = () => {
  return (
    <div className="loadContainer">
      <img src={load} alt="react Images" />
      <div className="textContainer">
        <h1>React</h1>
        <h3>We're learning react.js</h3>
      </div>
    </div>
  );
};

export default Loading;
