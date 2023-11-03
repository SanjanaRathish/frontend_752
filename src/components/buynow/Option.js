import React from 'react'
import "./buynow.css";

const Options = () => {
  return <div className='item_details'>
    <select className='add_remove_select'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <div className='ops'style={{display:"inline-block",float:"left"}}>
    <p className='forremovemedia' style={{cursor:"pointer"}}>Delete</p><span style={{display:"inline"}}>|</span>
    <p className='forremovemedia'>Move to Wishlist</p><span>|</span>
    <p className='forremovemedia'>See more like this</p><span>|</span>
    </div>
  </div>;
};

export default Options