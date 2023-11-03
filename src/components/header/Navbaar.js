import React from 'react'
import "./navbaar.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import {NavLink} from "react-router-dom";

const Navbaar = () => {
  return (
    <header>
        <nav>
            <div className="left">

                <div className="navlogo">
               <NavLink to="/"> <img src={require('./logo.png')} alt="LOGO" /> </NavLink>
                </div>

                <div className='nav_searchbaar'>

                    <input type='text' name='' id='box' style={{backgroundColor:"#c7b596",
                    borderBottomWidth:"2px",
                    borderBottomStyle:"solid",
                    borderBottomColor:"#000000",
                    maxWidth:"200px"}}/>

                    <div className='search_icon'>
                        <SearchOutlinedIcon id='search'/>
                    </div>

                </div>
                
            </div>

            <div className="right">
                
                <div className='nav_btn'>
<NavLink to='/login'>Sign-in</NavLink>
                </div>
                <div className='cart_btn'>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon id="icon" />
    </Badge>
    <p>Cart</p>
                </div>
                <Avatar className='avtar'/>
            </div>
        </nav>
    </header>
  )
}

export default Navbaar