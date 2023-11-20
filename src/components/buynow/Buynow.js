import React, { useState,useEffect } from 'react'
import "./buynow.css";
import { Divider } from '@mui/material';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';
import {products} from "../home/productdata"

const Buynow = () => {

    const [cartdata,setCartdata] = useState("")
    console.log(cartdata)
    
    const getdatabuy = async()=>{
        const res = await fetch("/cartdetails",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        })
        const data = await res.json()

        if(res.status !== 201){
            console.log("error")
        }else{
            setCartdata(data.carts)
        }
    }

    useEffect(()=>{
        getdatabuy()
    },[])



  return (
    <>
    {
        cartdata.length ? 
        <div className='buynow_section'>
        <div className='buynow_container'>
            <div className='left_buy'>
                <h1>Shopping Cart</h1>
                <p>Select all items</p>
                <span className='leftbuyprice'>Price</span>
                <Divider/>
                {
                    cartdata.map((e,k)=>{
                        return(
                        <>
                        <div className='item_containert' key={e.id}>
                    <img src={e.url} alt='product'/>
                    <div className='item_details'>
                        <h3>{e.title.shortTitle}</h3>
                        <h3 className='diffrentprice'>{e.price.cost}</h3>
                        <p>Usually dispatched in 5 days</p>
                        <p>Eligible for free shipping</p>
                        <Option deletedata={e.id} get={getdatabuy}/>
                    </div>
                    <h3 className='item_price'>&#8377;{e.price.cost}</h3>
                </div>
                <Divider/>
                </>)
                    })
                }
                
                
                <Subtotal item={cartdata}/>
            </div>
            <Right item={cartdata}/>
        </div>
    </div>
    :""
    }
    
    </>
    
  )
}

export default Buynow