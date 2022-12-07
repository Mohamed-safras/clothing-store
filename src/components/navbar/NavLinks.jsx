import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import "./navlinks.stles.scss";
const NavLinks = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <ul className="navbar-links">
      <li className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/shop"
        >
          Shop
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      {!currentUser ? (
        <li className="nav-link">
          <NavLink
            className={({ isActive }) => (isActive ? "link active" : "link")}
            to="/signin"
          >
            Sign In
          </NavLink>
        </li>
      ) : (
        <p>{currentUser.displayName}</p>
      )}

      <li className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/cart"
        >
          <IconButton>
            <ShoppingBagIcon color="primary" sx={{ fontSize: 25 }} />
          </IconButton>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
