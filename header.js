import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../stateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img className="header_logo" src="" alt="" />
        <h1 className="header_link">E-Sales</h1>
      </Link>
      <div className="header_search">
        <input className="header_searchinput" type="text" />
        <SearchIcon className="header_searchicon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"} className="header_link">
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
      </div>

      <div className="header_nav">
        <Link to="/order" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
      </div>

      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout" className="header_link">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo  header_basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
