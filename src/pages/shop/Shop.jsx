import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useContext, useEffect } from "react";
import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import { ProductContext } from "../../context/product.context";
import { ThemeContex } from "../../context/Theme.contex";
import { colors } from "../../styles/colors/theme";
import "../shop/shop.styles.scss";
import { ShopContainer } from "./stylesheet";
const Shop = () => {
  // const { theme } = useContext(ThemeContex);
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <ShopContainer>
      {products.map(({ title, image, new_price, old_price, brand }, index) => (
        <Card
          key={index}
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
