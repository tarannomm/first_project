
import React, { useEffect, useState } from 'react';
import Card from './shared/Card';
import axios from 'axios';
import loading from "../images/loading.gif";
import '../styles/scss/Products.scss';
const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(() => {
         axios.get('https://fakestoreapi.com/products')
         .then(response=>setProducts(response.data))
      });
    return (
        <div className='productsContrainer'>
             {products.length? products.map((product)=><Card key={product.id} style={{width:40}} image={product.image} title={product.title} price={product.price}/>):<img style={{margin:100}} src={loading} alt='loading gif'/>}
            
        </div>
    );
};

export default Products;
  