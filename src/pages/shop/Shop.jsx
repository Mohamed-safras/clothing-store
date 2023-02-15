// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useContext } from "react";
import Card from "../../components/product-card/Card";
import { ProductContext } from "../../context/product.context";
// import { ThemeContex } from "../../context/Theme.contex";
// import { colors } from "../../styles/colors/theme";

import { ShopContainer } from "./stylesheet";
const Shop = () => {
  // const { theme } = useContext(ThemeContex);
  const { products } = useContext(ProductContext);

  return (
    <ShopContainer>
      {products.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </ShopContainer>
  );
};

export default Shop;
