import { Favorite, FavoriteBorder, Label } from "@mui/icons-material";
import { Button, Checkbox } from "@mui/material";
import React, { useContext } from "react";
import { CardContext } from "../../context/cart.context";
import "./card.styles.scss";
const Card = ({ id, name, price, image }) => {
  const { addToCard, cardItems } = useContext(CardContext);

  return (
    <div className="card-container">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="card-details">
        <p className="product-title">Monstera DK Var</p>
        <div className="ratings"></div>
        <div className="card-bottom">
          <div className="price">
            <p>price</p>
            <span>${price}</span>
          </div>
          <Button
            onClick={() => addToCard(id)}
            style={{
              background: "white",
              color: "black",
            }}
            variant="contained"
          >
            Add To Cart
            {cardItems[id] > 0 && (
              <React.Fragment>({cardItems[id]})</React.Fragment>
            )}
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
