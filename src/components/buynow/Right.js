import React,{useState,useEffect} from 'react'

const Right = ({item}) => {

  const [price,setPrice] = useState(0)

  useEffect(()=>{
    totalAmount()
  },[item])
 
  const totalAmount =()=>{
    let price = 0;
    item.map((item)=>{
      price+=item.price 
    })
    setPrice(price)
  }

  return <div className='right_buy'>
            <div className='cost_right'>
                <p>Your order is eligible for FREE delivery.</p>
                <span style={{color:"#565959"}}>Select this option at checkout. Details</span>
                <h3>Subtotal ({item.length} items):<span style={{fontWeight:700,color:"#111"}}>&#8377; {price}</span></h3>
                <button className='rightbuy_btn'>Process to Buy</button>
            </div>
  </div>;
};

export default Right;