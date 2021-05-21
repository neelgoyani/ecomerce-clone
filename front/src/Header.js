import React from "react";
import logo from "./logo/amazon-logo.png";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const signout = (e) => {
    e.preventDefault();

    if (user) {
      auth.signOut();
    }

    history.push("/login");
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header_logo" src={logo} />
        </Link>

        <div className="header_search">
          <input className="search_input" type="text" />
          <SearchIcon className="search_icon" />
        </div>
        <div className="header_nav">
          <div onClick={signout} className="header_option cursor">
            <span className="upper">Hello {user ? user.email.split('@')[0] : "Guest"}</span>
            <span className="lower">{user ? "Sign out" : "Sign In"}</span>
          </div>

          <Link to="/order">
            <div className="header_option">
              <span className="upper">returns</span>
              <span className="lower">&orders</span>
            </div>
          </Link>
          <div className="header_option">
            <span className="upper">Your</span>
            <span className="lower">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header_optionbasket">
              <ShoppingBasketIcon />
              <span className="basket_counter lower">{basket?.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
