import React from "react";
import "../Style/Navbar.css";
import img from "../Assist/logo-Navbar.jpg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {

  const object=useSelector((state)=>{
    return state.cart.cartCount
  })
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navbarStyle = isHome ? { position: "fixed" } : { position: "static" };
  return (
    <div className="navbar ">
      <div className="firstFase">
        <img src={img} className="logo" />
      </div>
      <div className="secondFase">
        <span class="input-group-text btn btn btn" id="basic-addon3">
          <Link to="/">Home</Link>
        </span>
        <span class="input-group-text btn  btn btn" id="basic-addon3">
          <Link to="/product">Product</Link>
        </span>

        <span class="input-group-text btn  btn btn" id="basic-addon3">
          <Link to="/Register">Register</Link>
        </span>

        <span class="input-group-text btn  btn btn" id="basic-addon3">
          <Link to="/login">Login</Link>
        </span>

        <span class="input-group-text btn  btn btn " id="basic-addon3">
          <Link to="/contact"> Conatct-us</Link>
        </span>
        <span class="input-group-text btn  btn btn  " id="basic-addon3">
          <Link to="/mycart"> Cart({object})</Link>
        </span>

        <span class="input-group-text btn  btn btn  " id="basic-addon3">
          <Link to="/FavoritePage">favoriteItem</Link>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
