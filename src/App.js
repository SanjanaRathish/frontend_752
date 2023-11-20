import './App.css';
import ReactDOM from 'react-dom';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_signin/Sign_in';
import SignUp from './components/signup_signin/SignUp';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import {Routes,Route} from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import About from './components/aboutUs/About';
import Blog from './components/blogs/Blog';
import Product from './components/prod/products_page';


function App() {

  const [data,setData] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
        setData(true)
    },2000)
  },[])


  return (
    <>
    {
      data ? (<>
      <Navbaar/>
    <Newnav />
    <Routes>
      <Route path="/" element={<Maincomp />} />
      <Route path="/login" element={<Sign_in />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/getproduct/:id" element={<Cart />} />
      <Route path="/buynow" element={<Buynow />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/productspage" element={<Product />} />

    </Routes>
    <Footer/>
      </>) :(
        <div className='circle'>
          <CircularProgress/>
          <h2>Loading...</h2>
        </div>
      )
     }
    {/* // <Navbaar/>
    // <Newnav />
    // <Routes>
    //   <Route path="/" element={<Maincomp />} />
    //   <Route path="/login" element={<Sign_in />} />
    //   <Route path="/register" element={<SignUp />} />
    //   <Route path="/getproduct/:id" element={<Cart />} />
    //   <Route path="/buynow" element={<Buynow />} />
    //   <Route path="/aboutus" element={<About />} />
    //   <Route path="/blogs" element={<Blog />} />
    // </Routes>
    // <Footer/> */}
    </>
  );
}

export default App;


//A>B>C>D 
//A->5 userdata props
//store 5 userdata