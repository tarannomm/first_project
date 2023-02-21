import React from 'react';
import Card from './shared/Card';
import s21 from "../images/s21.jpg";
import iphonex from "../images/iphonex.jfif";
import iphone12 from "../images/iphone12.jpg";
import iphone13 from "../images/iphone13.jfif";
import "../styles/css/Cards.css";

const Cards = () => {
    return (
        <div className='cardsContainer'>
            <Card image={s21} title="s21" price="800$"/>
            <Card image={iphonex} title="iphonex" price="600$"/>
            <Card image={iphone12} title="iphone12" price="900$"/>
            <Card image={iphone13} title="iphone13" price="1200$"/>
        </div>
    );
};

export default Cards;