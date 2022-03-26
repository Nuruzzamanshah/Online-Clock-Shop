import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, picture, company,price, eyeColor} = props.product;
    
    return (
        <div className="product">
            <img src={picture} alt="" />
            <div className="product-info">
                <p className="product-name">Name: {name}</p>
                <p>Price: ${price}</p>
                <p>Company: {company}</p>
                <p>Color: {eyeColor}</p>
            </div>
            <button onClick={ () =>props.handleClick(props.product)} className="btn-card">
                <p>Add To Card</p>
            </button>
        </div>
    );
};

export default Product;