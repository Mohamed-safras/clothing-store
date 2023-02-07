import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Badge, IconButton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { colors } from "../../styles/colors";
import { NavRight, SearchIconBtn } from "./Navbar.styled";

const NavLinks = ({ toggleSearchBar }) => {
  const { currentUser } = useContext(UserContext);
  const { numberOfCartItems } = useContext(CartContext);
  return (
    <NavRight>
      <SearchIconBtn onClick={toggleSearchBar}>
        <IconButton>
          <SearchIcon style={{ color: "#a1a0a5", fontSize: 26 }} />
        </IconButton>
      </SearchIconBtn>
      <Link to="favorites">
        <IconButton>
          <FavoriteBorderIcon sx={{ fontSize: 26, color: "#a1a0a5" }} />
        </IconButton>
      </Link>
      <Link to="cart">
        <IconButton>
          <Badge badgeContent={numberOfCartItems} max={99} color="primary">
            <LocalMallOutlinedIcon sx={{ fontSize: 26, color: "#a1a0a5" }} />
          </Badge>
        </IconButton>
      </Link>
      {currentUser ? (
        <Avatar
          src={currentUser.photoURL}
          sx={{ margin: "0 10px", width: "30px", height: "30px" }}
        />
      ) : (
        <Link to="/signin">
          <h4 style={{ color: colors.textColor, padding: "8px" }}>SIGNIN</h4>
        </Link>
      )}
    </NavRight>
  );
};

export default NavLinks;
