import React,{useEffect, useState} from "react";
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
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Rightheader from "./Rightheader";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";

const Navbaar = () => {
    const navigate = useNavigate()
  const { account, setAccount } = useContext(LoginContext);
  //console.log(account);

const history = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

const [text,setText] = useState("")
console.log(text)

const [liopen,setLiopen] = useState(true)

const {products} = useSelector(state=> state.getproductsdata)

const [dropen,setDropen] =useState(false)


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

const handleopen=()=>{
  setDropen(true)
}

const handleclose = ()=>{
  setDropen(false)
}

const logoutuser = async()=>{
  const res2 = await fetch("/logout",{
    method:"GET",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },
    credentials:"include"
  })

  const data2 = await res2.json()
  console.log(data2)

  if(res2.status !== 201){
    console.log("error")
  } else{
    console.log("data valid")
    //alert("Logged out")
    toast.success("User logged out!",{
      position:"top-center"
    })
    history("/")
    setAccount(false)

  }
}


const getText = (item)=>{
  setText(item)
  setLiopen(false)
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
        <IconButton
            className="hamburger" onClick={handleopen}>
            <MenuIcon style={{color:"white"}} />
          </IconButton>


          <Drawer open={dropen} onClose={handleclose}>
            <Rightheader logClose={handleclose}/>
          </Drawer>


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
              placeholder="Search products"
              onChange={(e)=>getText(e.target.value)}
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

            {/* search filter */}
            {
              text && 
              <List className="extrasearch" hidden={liopen}>
                  {
                    products.filter(product => product.title.shortTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                      <ListItem>
                        <NavLink to={`/getproduct/${product.id}`} onClick={()=>setLiopen(true)}>
                        {product.title.shortTitle}
                        </NavLink>
                      </ListItem>
                    ))
                  }
              </List>
            }
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

              <ToastContainer/>
            <p>Cart</p>
          </div>
          {
            account ? <Avatar className="avtar2"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >{account.fname[0].toUpperCase()}</Avatar>
            : <Avatar className="avtar"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          ></Avatar>
          }
          
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        <MenuItem onClick={handleClose}>My account</MenuItem>
        {
          account ? <MenuItem onClick={handleClose} ><LogoutIcon style={{fontsize:16,marginRight:3}} onClick={logoutuser}/>Logout</MenuItem> :""
        }
        
      </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Navbaar;
