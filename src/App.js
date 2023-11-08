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

function App() {
  return (
    <>
    <Navbaar/>
    <Newnav />
    <Routes>
      <Route path="/" element={<Maincomp />} />
      <Route path="/login" element={<Sign_in />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/getproduct/:id" element={<Cart />} />
      <Route path="/buynow" element={<Buynow />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;


//A>B>C>D 
//A->5 userdata props
//store 5 userdata