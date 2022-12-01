import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import "../../styles/navbar/navbar.styles.scss";
import NavLinks from "./NavLinks";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        <Crown />
      </Link>

      <NavLinks />

      <IconButton className="menu">
        <MenuIcon color="primary" sx={{ fontSize: 40 }} />
      </IconButton>
    </nav>
  );
};

export default Navbar;
