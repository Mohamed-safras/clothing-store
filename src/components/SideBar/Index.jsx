import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import React from "react";

import NavLinks from "../navbar/NavLinks";

import "./sidebar.styles.scss";
const SideBar = ({ isOpen, toggleTopBar }) => {
  return (
    <div className={`sidebar-container ${isOpen ? "active" : ""}`}>
      <IconButton
        sx={{ padding: "0 !important" }}
        className="menu"
        onClick={toggleTopBar}
      >
        <MenuIcon
          color="primary"
          sx={{ fontSize: 40, color: "#a1a0a5", padding: "0 !important" }}
        />
      </IconButton>
      <NavLinks />
    </div>
  );
};

export default SideBar;
