import React from 'react'

const Right = () => {
  return <div className='right_buy'>
            <div className='cost_right'>
                <p>Your order is eligible for FREE delivery.</p>
                <span style={{color:"#565959"}}>Select this option at checkout. Details</span>
                <h3>Subtotal (1 items):<span style={{fontWeight:700,color:"#111"}}>&#8377; 49.00</span></h3>
                <button className='rightbuy_btn'>Process to Buy</button>
            </div>
  </div>;
};

export default Right;