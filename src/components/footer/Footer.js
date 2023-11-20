import React from 'react'
import "./footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {

    const year= new Date().getFullYear();
    console.log(year);

  return (
    <footer>
        <div className='footer_container'>
            <div className='footer_details1'>
                <h3>Contact Us</h3>
                <p>70A/G2,3rd cross,3rd Main,
                    SVK Layout,Basveshwara Nagar,
                    Bengaluru</p>
                <div style={{display:'inline'}}><EmailIcon id='email' style={{marginTop:"30px"}}/><p>7fifty2edibles@gmail.com</p></div>
                <LocalPhoneIcon id='phone'/><p>9845822986</p>
            </div>

            <div className='footer_details2'>
                <h3>Connect with Us</h3>
                <span><InstagramIcon id='insta'/><p>@7fifty2edibles</p></span>
                <TwitterIcon id='tweet'/><p></p>
                <FacebookIcon id='fb'/><p></p>
            </div>
        </div>
        <div className='last_details'>
            <img src={require('./logo.png')} alt='logo' style={{width:"150px",height:"100px"}}/>
            <p style={{color:"#211c17"}}>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 2021-{year}, 7fifty2edibles.com, Inc. or its affiliates</p>
        </div>
    </footer>
  )
}

export default Footer