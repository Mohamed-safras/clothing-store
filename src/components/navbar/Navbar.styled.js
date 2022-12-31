import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/colors/index";
export const NavBar = styled.nav`
  background: ${({ theme }) =>
    theme === "dark" ? colors.colorBlack : colors.colorWhite};
  padding: 15px 20px;

  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 100;
  overflow: hidden;
`;

export const NavBarLinks = styled.div`
  @media (max-width: 800px) {
    display: none !important;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.colorWhite};
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const SearchBar = styled.form`
  display: flex !important;
  background-color: #fff;
  flex: 0.5;
  width: 100%;
  border-radius: 20px;
  border: 2px solid black;

  @media (max-width: 800px) {
    flex: 0.7;
  }
`;

export const Input = styled.input`
  width: inherit;
  background: transparent;
  border: none;
  outline: none;
  padding: 10px;
`;
export const NavCenter = styled.div`
  display: flex !important;
  align-items: center;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;

  margin: 0 10px;
  @media (max-width: 800px) {
    margin: 10px !important;
  }
`;

export const P = styled.p`
  display: none !important;
  @media (max-width: 800px) {
    display: block !important;
  }
`;

export const MenuIconBtn = styled(IconButton)`
  padding: 0 !important;
  display: none !important;
  @media (max-width: 800px) {
    display: block !important;
  }
`;
