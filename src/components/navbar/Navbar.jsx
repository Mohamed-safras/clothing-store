import MenuIcon from "@mui/icons-material/Menu";

import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

import React from "react";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import {
  Input,
  MenuIconBtn,
  NavBar,
  NavBarLinks,
  NavLink,
  SearchBar,
} from "./Navbar.styled";

import NavLinks from "./NavLinks";

const Navbar = ({ toggleTopBar }) => {
  return (
    <NavBar>
      <NavLink to="/" className="logo">
        <Crown />
      </NavLink>
      <SearchBar>
        <Input type="text" placeholder="Search" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </SearchBar>
      <NavBarLinks>
        <NavLinks />
      </NavBarLinks>

      <MenuIconBtn onClick={toggleTopBar}>
        <MenuIcon sx={{ fontSize: 40, color: "#a1a0a5" }} />
      </MenuIconBtn>
    </NavBar>
  );
};

export default Navbar;
