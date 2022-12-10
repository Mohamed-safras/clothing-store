import { Favorite, FavoriteBorder, Label } from "@mui/icons-material";
import { Button, Checkbox } from "@mui/material";
import React from "react";

import "./card.styles.scss";
const Card = () => {
  return (
    <div className="card-container">
      <div className="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Men-Jacket-Roadster-BlackCoffee-102221-1.jpg?v=1635196923"
          alt=""
        />
      </div>
      <p className="product-title">Monstera DK Var</p>
      <div className="ratings"></div>
      <div className="card-bottom">
        <div className="price">
          <p>price</p>
          <span>$325</span>
        </div>
        <Button
          style={{
            background: "white",
            color: "black",
          }}
          variant="contained"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default Card;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function IconCheckboxes() {
  return (
    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
  );
}
