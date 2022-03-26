import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let name = '';
    for(const product of cart){
        name = product.name;
    }
    return (
        <div className='cart'>
            <h2>Selected Clothes</h2>
            <p>Name:{name}</p>
            <button className="btn">Choose 1 For Me</button><br></br><br></br>
            <button className="btn">Choose Again</button>
        </div>
    );
    
};

export default Cart;