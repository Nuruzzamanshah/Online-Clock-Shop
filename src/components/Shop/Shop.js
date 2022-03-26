import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch ('products.json')
        .then (res => res.json())
        .then (data => setProducts(data))
    }, []);
    const handleClick = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product =><Product
                         key={product.id}
                         product={product}
                         handleClick={handleClick}
                         ></Product>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
                
            </div>
            <footer>
                <div>
                    <h1>How React Works?</h1>
                    <p>Answer: reacr js একটি জাভাস্ক্রিপ্টের জনপ্রিয় ফ্রেমওয়ার্ক | রিঅ্যাক্ট একটা সেইম টু সেইম এই ব্রাউজারের ডমের মতো করে আরেকটা ডম তৈরী করে যেটাকে ভার্চুয়াল ডম বলা হয়। এখন এই ডম দেখতে পুরো সেই আসল ডমের মতোই, কিন্তু এই ভার্চুয়াল ডমটা আসলে একটা জাভাস্ক্রিপ্ট অবজেক্ট। React এর অন্যতম গুন হচ্ছে এর Simplicity. এটা কোর জাভাস্ক্রিপ্ট এর পাশাপাশি JSX নামের একটা স্পেশাল সিনটেক্স ব্যাবহার করে যা আমাদেরকে জাভাস্ক্রিপ্ট এর ভিতর শতভাগ HTML লিখার সুবিধা দেয়।</p>
                </div>
                <div>
                <h1>How useState Works?</h1>
                <p>Answer: useState React কে সঠিকভাবে Hooks গুলোর স্টেট সংরক্ষণ করতে সাহায্য করে। useState এক জোড়া ২টি value রিটার্ন করে এবং এই জোড়া value টি একটি array টাইপে রিটার্ন হয়ে আসে যেটার ভিতরে ২টি এলেমেন্ট থাকে।</p>
                </div>
            </footer>
        </div>
        
    );
};

export default Shop;