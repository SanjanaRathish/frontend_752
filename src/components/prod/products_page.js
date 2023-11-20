import React, { useState } from 'react';
import './products.css';
import { NavLink } from 'react-router-dom';
import Ratings from './ratings';
import {products} from "../home/productdata"

const prod = [
  
    {
    id:'product1',
    url:"https://static.wixstatic.com/media/3a5d5e_98a49e76c8af4e2493d0d7187b08eba3~mv2.jpg/v1/fill/w_625,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a5d5e_98a49e76c8af4e2493d0d7187b08eba3~mv2.jpg",
    title:
    {
        shortTitle:'Banana Juice',
        longTitle:'A delightful banana juice crafted with sugarcane jaggery,delivering the natural sweetness and goodness of banana in every sip.Savor the refreshingbeverage year-round,to quench your thirst with its irresistable flavour',

    },
    price: {
        mrp:30,
        cost:20,
        dicount:'12%',
    },
    ratings:4.5,
    description:'Yummy and Healthy',
    discount: 'Extra 10% off',
    tagline : 'Deal of the day'
},
{
    id:'product2',
    url:"https://static.wixstatic.com/media/3a5d5e_16d1c555540c448ead6c8eb955d0961e~mv2.jpg/v1/fill/w_625,h_469,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a5d5e_16d1c555540c448ead6c8eb955d0961e~mv2.jpg",
    title:
    {
        shortTitle:'Banoffee',
        longTitle:'A heavenly combinaiton of banana slice dipped in honey, crafted to perfection for the ultimate snacking experience',

    },
    price: {
        mrp:40,
        cost:30,
        dicount:'12%',
    },
    ratings:5,
    description:'A heavenly combinaiton of banana slice dipped in honey, crafted to perfection for the ultimate snacking experience',
    discount: 'Extra 10% off',
    tagline : 'Deal of the day'
},

{
    id:'product3',
    url:"https://static.wixstatic.com/media/3a5d5e_d8cf8d27b028419db29a67b3b7e06f7c~mv2.jpeg/v1/fill/w_625,h_469,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a5d5e_d8cf8d27b028419db29a67b3b7e06f7c~mv2.jpeg",
    title:
    {
        shortTitle:'NOJO MEN',
        longTitle:'NOJO MEN',

    },
    price: {
        mrp:70,
        cost:60,
        dicount:'12%',
    },
    ratings:4.5,
    description:'The yummy noodles made out of an incredible nutritious blend of banana and millets, completely devoid of media',
    discount: 'Extra 10% off',
    tagline : 'Deal of the day'
},

{
    id:'product4',
    url:"https://static.wixstatic.com/media/3a5d5e_f479d2b78b264f72a532e2b9825c2634~mv2.jpg/v1/fill/w_625,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a5d5e_f479d2b78b264f72a532e2b9825c2634~mv2.jpg",
    title:
    {
        shortTitle:'Banokie',
        longTitle:'Banokie',

    },
    price: {
        mrp:80,
        cost:60,
        dicount:'12%',
    },
    ratings:4,
    description:'A healthy baked delight that takes your tea time to benew excitement',
    discount: 'Extra 10% off',
    tagline : 'Deal of the day'
},

{
    id:'product5',
    url:"https://static.wixstatic.com/media/3a5d5e_e00c632c391f4966b45756d49155ff59~mv2.jpg/v1/fill/w_625,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a5d5e_e00c632c391f4966b45756d49155ff59~mv2.jpg",
    title:
    {
        shortTitle:'Plantane',
        longTitle:'Plantane',

    },
    price: {
        mrp:70,
        cost:50,
        dicount:'12%',
    },
    ratings:4.5,
    description:'potassium rich banana powder that adds a healthy and powerful twist to your culinary creations',
    discount: 'Extra 10% off',
    tagline : 'Deal of the day'
},

{
    id:'product6',
    url:"https://static.wixstatic.com/media/3a5d5e_427d5494742346cfbad03f307440ce75~mv2.jpeg/v1/fill/w_625,h_469,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a5d5e_427d5494742346cfbad03f307440ce75~mv2.jpeg",
    title:
    {
        shortTitle:'Trekker',
        longTitle:'Trekker',

    },
    price: {
        mrp:20,
        cost:15,
        dicount:'12%',
    },
    ratings:4,
    description:'one of a kind delicacy crafted from sun dried bananas transformed into delectable banana figs care fully coated with natural honey',
    discount: 'Extra 10% off',
    tagline : 'Deal of the day'
}


]

;

const Product = () => {

  return (
    <div className="product-container">
      {
      prod?.map((pro) => {
        return(
            
        <div key={pro.id} className="product-card">
          <NavLink to={`/getproduct/${pro.id}`}><img src={pro.url} alt={pro.title.shortTitle} /></NavLink>
          <h2>{pro.title.shortTitle}</h2>
          <p>Price:&#8377; {pro.price.cost}</p>
          <Ratings rating={pro.ratings} /> 
         
        </div>
      )})}
    </div>
  );
};

export default Product;