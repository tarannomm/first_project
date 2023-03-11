import React, { useState } from "react";
import "../../styles/css/Card.css";
import up from "../../images/up.svg";
import down from "../../images/down.svg";
import { Link } from "react-router-dom";
const Card = (props) => {
  const { image, title, price,id } = props;
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
        <h3>
          <Link to={`/products/${id}`}>{title}</Link>
        </h3>
        <p>{`${price} $`}{count?` * ${count} = ${price*count} $`:''}</p>
      </div>
      <div className="counter">
       <img src={up} alt="up" onClick={()=>setCount(count+1)}/>
       <span className={count?'':'countSpan'}>{count}</span>
       <img  className={count?'':'countSpan'} src={down} alt="down" onClick={downCounter}/>
      </div>
    </div>
  );
};

export default Card;
