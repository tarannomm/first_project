import React, { useState } from 'react';
import Card from './shared/Card';
import s21 from "../images/s21.jpg";
import iphonex from "../images/iphonex.jfif";
import iphone12 from "../images/iphone12.jpg";
import iphone13 from "../images/iphone13.jfif";
import "../styles/css/Cards.css";

const Cards = () => {
    const [datas,setDatas]=useState([
        {id:1,image:s21 , title:"s21" , price:"800"},
        {id:2,image:iphonex, title:"iphonex" , price:"600"},
        {id:3,image:iphone12, title:"iphone12" , price:"900"},
        {id:4,image:iphone13, title:"iphone13" , price:"1200"}
    ])
    return (
        <div className='cardsContainer'>
          {datas.map(product=><Card key={product.id} image={product.image} title={product.title} price={product.price}/>)}
        </div>
    );
};

export default Cards;