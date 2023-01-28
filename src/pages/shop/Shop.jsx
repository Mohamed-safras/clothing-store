import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useContext, useEffect } from "react";
import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import { ThemeContex } from "../../context/Theme.contex";
import SHOP_DATA from "../../data/clothing.json";
import { colors } from "../../styles/colors/theme";
import "../shop/shop.styles.scss";
const Shop = () => {
  useEffect(() => console.log(SHOP_DATA.data), []);

  const { theme } = useContext(ThemeContex);
  return <div>shop</div>;
};

export default Shop;
