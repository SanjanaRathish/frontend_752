import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Divider } from '@mui/material';
//import { products } from './productdata';
import "./slide.css";
import {NavLink} from "react-router-dom";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      
    }
  };

const Slide = ({title,products}) => {
  return (
    <div className='products_sections' style={{backgroundColor:"#EADDCA"}}>
        <div style={{display:"flex"}}>
          <h3 style={{marginLeft:"50px"}}>
            Our Products
          </h3>
          <button style={{float:"right", marginLeft:"1200px", backgroundColor:"transparent",border:"none"}}>
            View All
          </button>
        </div>
        <Divider className='divi' style={{marginBottom:"10px",marginTop:"10px"}}/>

        <Carousel className='slider_carousel'
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet","mobile"]}
        dotListClass='custom-dot-list-style'
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container">

        {
            products.map((e)=>{
                return(
                  <NavLink to={`/getproduct/${e.id}`}>
                    <div className='products_items'>
                        <div className='products_img'>
                            <img src={e.img} alt="productitem" height={'150px'} width={'200px'}/>
                        </div>
                        <p className='product_name'>{e.title.shortTitle}</p>
                        {/*<p className='product_desc'>{e.title.longTitle}</p>*/}
                        <p className='product_price'>&#8377;{e.price}</p>
                    </div>
                    </NavLink>
                )
            })
        }
        </Carousel>
    </div>
    

  )
}

export default Slide