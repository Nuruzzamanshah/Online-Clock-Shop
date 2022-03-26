import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product, handleClick}) => {
    // const {product, handleClick} = props;
    const {name, picture, company,price, eyeColor} =product;
    
    return (
        <div className="product">
            <img src={picture} alt="" />
            <div className="product-info">
                <p className="product-name">Name: {name}</p>
                <p>Price: ${price}</p>
                <p>Company: {company}</p>
                <p>Color: {eyeColor}</p>
            </div>
            <button onClick={ () =>handleClick(product)} className="btn-card">
                <p className='btn-text'>Add To Card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;