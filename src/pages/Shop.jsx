import React from "react";
import Card from "../components/card/Card";
import Filter from "../components/filter/Filter";
import FormInput from "../components/form-container/FormInput";
import "../styles/pages-style/shop.styles.scss";
const Shop = () => {
  return (
    <div className="shop-container">
      <Filter />

      <div className="products-container">
        <FormInput formInputs={{ type: "search" }} />
        <Card />
      </div>
      <div className="products-details">csd</div>
    </div>
  );
};

export default Shop;
