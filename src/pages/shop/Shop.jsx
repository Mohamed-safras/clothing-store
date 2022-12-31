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
  return (
    <div
      style={{
        height: "100vh",
        background: theme === "dark" ? colors.colorBlack : colors.colorWhite,
      }}
    >
      <div class="col1">1</div>
      <div class="col2">
        2<div>scroll test</div>
      </div>
    </div>
  );
};

export default Shop;
