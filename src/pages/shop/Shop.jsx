import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useContext, useEffect } from "react";
import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import { ThemeContex } from "../../context/Theme.contex";
import SHOP_DATA from "../../data/clothing.json";
import { colors } from "../../styles/colors/theme";
import "../shop/shop.styles.scss";
import { ShopContainer } from "./stylesheet";
const Shop = () => {
  const { theme } = useContext(ThemeContex);
  return (
    <ShopContainer>
      {SHOP_DATA.data.map(({ title, image, new_price, old_price, brand }) => (
        <Card
          name={title}
          image={image}
          new_price={new_price}
          old_price={old_price}
          brand={brand}
        />
      ))}
    </ShopContainer>
  );
};

export default Shop;
