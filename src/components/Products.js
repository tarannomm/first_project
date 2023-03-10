
import React, { Component } from 'react';
import axios from 'axios';
class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(response=>);
      
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Products;