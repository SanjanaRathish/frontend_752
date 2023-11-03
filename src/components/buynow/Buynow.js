import React from 'react'
import "./buynow.css";
import { Divider } from '@mui/material';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';

const Buynow = () => {
  return (
    <div className='buynow_section'>
        <div className='buynow_container'>
            <div className='left_buy'>
                <h1>Shopping Cart</h1>
                <p>Select all items</p>
                <span className='leftbuyprice'>Price</span>
                <Divider/>

                <div className='item_containert'>
                    <img src={require('./banokie.png')} alt='product'/>
                    <div className='item_details'>
                        <h3>Banokie</h3>
                        <h3 className='diffrentprice'>&#8377; 49.00</h3>
                        <p>Usually dispatched in 5 days</p>
                        <p>Eligible for free shipping</p>
                        <Option/>
                    </div>
                    <h3 className='item_price'>&#8377; 59.00</h3>
                </div>
                <Divider/>
                <Subtotal/>
            </div>
            <Right/>
        </div>
    </div>
  )
}

export default Buynow