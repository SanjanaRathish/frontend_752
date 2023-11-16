import React, { useEffect, useState,useContext } from 'react'
import { useHistory, useParams } from 'react-router';
import "./cart.css";
import { Divider } from '@mui/material';
import {products} from "../home/productdata"
import { LoginContext } from '../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const Cart = () => {

const {id}=useParams("");
//console.log(id);

const history = useNavigate("")


const {account,setAccount} = useContext(LoginContext)

const [inddata,setInddata] = useState("");
console.log(inddata);

const getinddata = async()=>{
  const res = await fetch(`/getproduct/${id}`,{
    method: "GET",
    headers:{
      "Content-Type":"application-json"
    }
  })

  const data = await res.json();
  //console.log(data)

  if(res.status !== 201){
    console.log("no data available")
  }else{
    console.log("get data")
    setInddata(data)
  }
}

useEffect(()=>{
  setTimeout(getinddata,1000)
},[id])


//add cart function
const addtocart=async(id)=>{
  const checkers = await fetch(`/addcart/${id}`,{
    method:"POST",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      inddata
    }),
    credentials:"include"
  })

  const data1=await checkers.json()
  console.log(data1 + "frontend data")

  if(checkers.status === 401 || !data1){
    console.log("User invalid")
    alert("User invalid")
  }else{
    //alert("Product added in your cart")
    history("/buynow")
    setAccount(data1)
  }
}

  return (
    <div className='cart_section'>
      {inddata && Object.keys(inddata).length &&
      <div className='cart_container'>
        <div className='left_cart'>
          <img src={inddata.url} alt="product"/>
          <div className='cart_btn'>
            <button className='cart_btn1' onClick={()=>addtocart(inddata.id)}>Add to Cart</button>
            <button className='cart_btn2'>Buy Now</button>
          </div>
        </div>
        <div className='right_cart'>
        <h3>{inddata.title.shortTitle}</h3>
          <h5>{inddata.title.descrip}</h5>
           <Divider/>
           <p className='mrp'>M.R.P.:<span style={{textDecoration:"line-through"}}>{inddata.price}</span></p>
           <h5>Introductory Offer: <span style={{color:'red'}}>&#8377; 49.00</span></h5>
           <h5>Free Delivery by 15th Nov</h5>
        </div>
      </div>
}
    {
      !inddata ? <div className='circle'>
      <CircularProgress/>
      <h2>Loading...</h2>
    </div> : ""
    }
    </div>
  )
}

export default Cart