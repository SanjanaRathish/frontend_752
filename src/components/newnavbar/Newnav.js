import React from 'react'
import "./newnav.css";
import { NavLink } from 'react-router-dom';
import About from '../aboutUs/About';

const Newnav = () => {
  return (
    <div className='new_nav'>
<div className='nav_data'>
<NavLink to="/aboutus" style={{textDecoration:"none", color:"white"}}><p>About us</p></NavLink>
<p>Products | Shopping</p>
<p>Blogs</p>
<p>Gallery</p>
<p>Reviews</p>
</div>
    </div>
  )
}

export default Newnav