import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link,useHistory } from "react-router-dom";
import {  useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [isAuthenticated,setIsAuthenticated]=useState(false)
  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated')
  };
  const history=useHistory()
  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated"))
  },[setIsAuthenticated,isAuthenticated,history]);
  return (
    <>
      <header className="header">
        <Link to="/" className="shoplogo">
          FR3 Shop
        </Link>
        {isAuthenticated ? (
          <Link to="/" onClick={handleSignOut} className="loginsss">
            Log Out
          </Link>
        ) : (
          <div className="logregsss">
            <Link to="/login" className="loginsss">
              Login
            </Link>
            <Link to="/register" className="regsss">
              Register
            </Link>
          </div>
        )}

        <Link to="/cart">
          <FaShoppingCart className="cart" />

          {cartItems.length > 0 && (
            <span className="carttotal">{cartItems.length}</span>
          )}
        </Link>
      </header>
    </>
  );
};

export default Header;
