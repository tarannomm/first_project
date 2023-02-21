import React from "react";
import "../../styles/css/Card.css";
const Card = (props) => {
  const { image, title, price } = props;
  return (
    <div className="cardContainer">
      <img src={image} alt="products" />
      <div className="contentContainer">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Card;
