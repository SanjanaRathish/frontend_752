import React from 'react'
import "./cart.css";
import { Divider } from '@mui/material';

const Cart = () => {
  return (
    <div className='cart_section'>
      <div className='cart_container'>
        <div className='left_cart'>
          <img src={require("./banokie.png")} alt="product"/>
          <div className='cart_btn'>
            <button className='cart_btn1'>Add to Cart</button>
            <button className='cart_btn2'>Buy Now</button>
          </div>
        </div>
        <div className='right_cart'>
          <h3>Banokie</h3>
          <h5>A healthy baked delight that takes your tea time to benew excitement. Crafted with a blend of nutrient rich millet, banana powder, and whole wheat. Banokie offers guilt-free indulgence without any maida or added sugar.</h5>
           <Divider/>
           <p className='mrp'>M.R.P.:<span style={{textDecoration:"line-through"}}> &#8377; 65.00</span></p>
           <h5>Introductory Offer: <span style={{color:'red'}}>&#8377; 49.00</span></h5>
           <h5>Free Delivery by 15th Nov</h5>
        </div>
      </div>
    </div>
  )
}

export default Cart