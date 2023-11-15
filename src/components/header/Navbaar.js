import React,{useEffect} from "react";
import "./navbaar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import { useContext } from "react";
import { getProducts } from "../redux/actions/action";
import {useNavigate}  from "react-router-dom";

const Navbaar = () => {
    const navigate = useNavigate()
  const { account, setAccount } = useContext(LoginContext);
  //console.log(account);

const getdetailvaliduser = async()=>{
  const res = await fetch("/validuser",{
    method:"GET",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },
    credentials:"include"
  })

  const data = await res.json()
  //console.log(data)

  if(res.status !== 201){
    console.log("error")
  } else{
    console.log("data valid")
    setAccount(data)
  }
}

  useEffect(()=>{
    getdetailvaliduser()
  },[])

    const send = ()=>{
        if(account){
            navigate("/")
        }
    }

  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <NavLink to="/">
              {" "}
              <img src={require("./logo.png")} alt="LOGO" />{" "}
            </NavLink>
          </div>

          <div className="nav_searchbaar">
            <input
              type="text"
              name=""
              id="box"
              style={{
                backgroundColor: "#c7b596",
                borderBottomWidth: "2px",
                borderBottomStyle: "solid",
                borderBottomColor: "#000000",
                maxWidth: "200px",
              }}
            />

            <div className="search_icon">
              <SearchOutlinedIcon id="search" />
            </div>
          </div>
        </div>

        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login">Sign-in</NavLink>
          </div>
          <div className="cart_btn">
            {account ? (
              <NavLink to="/buynow">
                <Badge
                  badgeContent={account.carts?.length || 0}
                  color="primary"
                >
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            )}

            <p>Cart</p>
          </div>
          {
            account ? <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar>
            : <Avatar className="avtar"></Avatar>
          }
          
        </div>
      </nav>
    </header>
  );
};

export default Navbaar;
