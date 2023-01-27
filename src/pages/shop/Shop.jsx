import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useContext } from "react";
import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import { ThemeContex } from "../../context/Theme.contex";
import { colors } from "../../styles/colors/theme";
import "../shop/shop.styles.scss";
import { data } from "./data";
const Shop = () => {
  const { theme } = useContext(ThemeContex);
  return <div>shop</div>;
};

export default Shop;
