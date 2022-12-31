import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Avatar, Badge, IconButton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React, { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { logout } from "../../utils/firebase/AuthMethods";
import {
  NavCenter,
  NavLink,
  NavLinkContainer,
  NavRight,
  P,
} from "./Navbar.styled";

const NavLinks = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <NavLinkContainer>
      <NavCenter>
        <NavLink to="shop">Shop</NavLink>
      </NavCenter>

      <NavRight>
        <NavLink to="/favorites">
          <IconButton style={{ padding: "0 !important" }}>
            <FavoriteBorderIcon sx={{ fontSize: 28, color: "#a1a0a5" }} />
          </IconButton>
          <P>Favorites</P>
        </NavLink>
        <NavLink to="cart">
          <IconButton style={{ padding: "0 !important" }}>
            <Badge max={99} />
            <ShoppingCartOutlinedIcon sx={{ fontSize: 28, color: "#a1a0a5" }} />
          </IconButton>
          <P>Cart</P>
        </NavLink>
      </NavRight>
      {currentUser && (
        <Avatar
          src={currentUser.photoURL}
          sx={{ margin: "0 10px", width: "30px", height: "30px" }}
        />
      )}
      {currentUser ? (
        <span onClick={logout}>sign out</span>
      ) : (
        <NavLink to="/signin">Sign in</NavLink>
      )}
    </NavLinkContainer>
  );
};

export default NavLinks;
