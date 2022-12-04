import { IconButton } from "@mui/material";
import React from "react";
import "./navlink.styles.scss";
const NavBarLink = ({ Icon, title }) => {
  return (
    <React.Fragment>
      <IconButton className="icon-btn">
        <Icon sx={{ fontSize: 25, color: "#a1a0a5" }} />
      </IconButton>
      <span>{title}</span>
    </React.Fragment>
  );
};

export default NavBarLink;
