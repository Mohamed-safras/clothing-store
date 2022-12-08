import { Favorite, FavoriteBorder, Label } from "@mui/icons-material";
import { Button, Checkbox } from "@mui/material";
import React from "react";

import "./card.styles.scss";
const Card = () => {
  return (
    <div className="card-container">
      <IconCheckboxes />
      <div className="product-image">
        <img src="https://i.ibb.co/px2tCc3/jackets.png" alt="" />
      </div>
      <p className="product-title">Monstera DK Var</p>
      <div className="ratings"></div>
      <div className="card-bottom">
        <div className="price">
          <p>price</p>
          <span>$325</span>
        </div>
        <div className="btn">
          <Button
            style={{ background: "white", color: "black" }}
            variant="contained"
          >
            Add To Cart
          </Button>
        </div>
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
