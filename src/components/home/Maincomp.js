import React, { useEffect } from 'react'
import Banner from './Banner'
import "./home.css";
import Slide from './Slide';
import { getProducts } from '../redux/actions/action';
import {useDispatch,useSelector} from "react-redux";


const Maincomp = () => {

  const {products} = useSelector(state=> state.getproductsdata);
  console.log(products)

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  }, [dispatch]);


  return (
    <div className='home_section'>
        <div className='banner_part'>
<Banner/>
        </div>
        <Slide products={products}/>
    </div>
  )
}

export default Maincomp