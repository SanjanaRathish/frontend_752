import React,{useContext} from 'react'
import Avatar from "@mui/material/Avatar";
import { LoginContext } from '../context/ContextProvider';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import "./rightheader.css";


const Rightheader = ({logClose}) => {

    const { account, setAccount } = useContext(LoginContext);

  return (
    <>
    <div className='rightheader'>
        <div className='right_nav'>
        {
            account ? <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar>
            : <Avatar className="avtar"></Avatar>
          }

          {account ? <h3>Hello, {account.fname.toUpperCase()}</h3>:""}
        </div>
        <div className='nav_btn' onClick={()=>logClose()}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Shop</NavLink>

            <Divider style={{width:"100%",marginLeft:"-20px"}}/>

            <NavLink to="/">Gallery</NavLink>
            {
                account? <NavLink to="/buynow">Your Orders</NavLink>
                : <NavLink to="/login">Your Orders</NavLink>
            }
            
        </div>
    </div>
    
    </>
  )
}

export default Rightheader