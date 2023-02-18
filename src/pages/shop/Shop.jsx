// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../components/product-card/Card";

import { getProducts } from "../../utils/firebase/createProduct";
import { Container, ShopContainer, SideBar } from "./stylesheet";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const param = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const categories = getProducts();
    categories
      .then((category) => {
        setProducts(category[param]);
      })
      .catch((error) => console.log(error));
  }, [param]);
  return (
    <Container>
      <SideBar>
        {[
          1, 2, 4, 5, 6, 1, 2, 4, 5, 6, 1, 2, 4, 5, 6, 1, 2, 4, 5, 6, 1, 2, 4,
          5, 6, 1, 2, 4, 5, 61, 2, 4, 5, 6,
        ].map((param) => {
          return <h1>{param}</h1>;
        })}
      </SideBar>
      <ShopContainer>
        {products.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </ShopContainer>
    </Container>
  );
};

export default Shop;
