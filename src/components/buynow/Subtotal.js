import React, { useEffect, useState } from 'react'


const Subtotal = ({item}) => {

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
  return <div>
    <h3>Subtotal ({item.length} items):<strong style={{fontWeight:700,color:"#111"}}>&#8377;{price}</strong></h3>
  </div>
};

export default Subtotal;