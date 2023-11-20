import React from 'react'
import "./buynow.css";
import { LoginContext } from '../context/ContextProvider';
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Options = ({deletedata,get}) => {

  const { account, setAccount } = useContext(LoginContext)

const removedata = async(req,res)=>{
  try {
    const res = await fetch(`/remove/${deletedata}`,{
      method:"DELETE",
      headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
      },
      credentials:"include"
  })
    

  const data = await res.json()
  console.log(data)

  if(res.status === 400 || !data){
    console.log("error")
  }else{
    console.log("User delete")
    setAccount(data)
    toast.success("Item removed from cart!",{
      position:"top-center"
    })
    get()
  }

  } catch (error) {
    console.log("error")
  }
}

  return <div className='item_details'>
    <select className='add_remove_select'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <div className='ops'style={{display:"flex",float:"left"}}>
    <p className='forremovemedia' style={{cursor:"pointer"}} onClick={()=>removedata(deletedata)}>Delete</p><span style={{display:"inline"}}>|</span>
    <p className='forremovemedia'>Move to Wishlist</p><span>|</span>
    <p className='forremovemedia'>See more like this</p>
    <ToastContainer/>
    </div>
  </div>;
};

export default Options