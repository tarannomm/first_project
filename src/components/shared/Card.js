import React, { useState } from "react";
import "../../styles/css/Card.css";
import up from "../../images/up.svg";
import down from "../../images/down.svg";
const Card = (props) => {
  const { image, title, price } = props;
  const [count,setCount]=useState(0);
  const downCounter=()=>{
    if(count>0){
    setCount(count-1)
    }

  }
  return (
    <div className="cardContainer">
      <img src={image} alt="products" />
      <div className="contentContainer">
        <h3>{title}</h3>
        <p>{`${price} $`}{count?` * ${count} = ${price*count} $`:''}</p>
      </div>
      <div className="counter">
       <img src={up} alt="up" onClick={()=>setCount(count+1)}/>
       <span className={count?'':'countSpan'}>{count}</span>
       <img src={down} alt="down" onClick={downCounter}/>
      </div>
    </div>
  );
};

export default Card;
