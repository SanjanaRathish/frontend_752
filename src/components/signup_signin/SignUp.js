import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  console.log(udata);

  const adddata = (e) => {
    const { name, value } = e.target;

    setUdata(() => {
      return {
        ...udata,
        [name]: value,
      };
    });
  };

  const senddata = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, password, cpassword } = udata;

    const res = await fetch("register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        email,
        mobile,
        password,
        cpassword,
      })
    });

    const data = await res.json();
    //console.log(data)

    if(res.status === 422 || !data){
      toast.warn("Invalid details!",{
        position:"top-center"
      })
    }else{
      //alert("data successfully added")

      toast.success("Data successfully added!",{
        position:"top-center"
      })
      setUdata({...udata,fname:"",email:"",mobile:"",password:"",cpassword:""})
    }
  };

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src={require("./logo.png")} alt="logo" />
          </div>
          <div className="sign_form">
            <form method="POST">
              <h1>Sign-Up</h1>
              <div className="form_data">
                <label htmlFor="fname">Your Name</label>
                <input
                  type="text"
                  onChange={adddata}
                  value={udata.fname}
                  name="fname"
                  id="fname"
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={adddata}
                  value={udata.email}
                  name="email"
                  id="email"
                />
              </div>
              <div className="form_data">
                <label htmlFor="number">Mobile</label>
                <input
                  type="text"
                  onChange={adddata}
                  value={udata.mobile}
                  name="mobile"
                  id="mobile"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={udata.password}
                  name="password"
                  id="password"
                  placeholder="Atleast 6 characters"
                />
              </div>
              <div className="form_data">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={udata.cpassword}
                  name="cpassword"
                  id="cpassword"
                />
              </div>
              <button className="signin_btn" onClick={senddata}>
                Continue
              </button>
              <p>
                Already have an account? <NavLink to="/login">Sign-In</NavLink>
              </p>
            </form>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default SignUp;
