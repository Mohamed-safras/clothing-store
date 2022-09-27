import React from "react";
import { BsBagDash } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import "../../styles/navbar/navbar.styles.scss";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="nav-bar">
        <Link to="/" className="logo">
          <Crown />
        </Link>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/shop">SHOP</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="nav-link">
            <Link to="/signin">SIGN IN</Link>
          </li>
          <li className="nav-link">
            <Link to="/cart">
              <BsBagDash />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;
