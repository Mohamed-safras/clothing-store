import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useContext, useEffect } from "react";
import Filter from "../../components/filter/Filter";
import Card from "../../components/product-card/Card";
import { ProductContext } from "../../context/product.context";
import { ThemeContex } from "../../context/Theme.contex";
import { colors } from "../../styles/colors/theme";
import "../shop/shop.styles.scss";
import { ShopContainer } from "./stylesheet";
const Shop = () => {
  // const { theme } = useContext(ThemeContex);
  const { products } = useContext(ProductContext);

  return (
    <ShopContainer>
      {products.map(({ id, title, image, new_price, old_price, brand }) => (
        <Card
          key={id}
          id={id}
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
