import { Favorite, FavoriteBorder, Label } from "@mui/icons-material";
import { Button, Checkbox } from "@mui/material";
import React, { useContext } from "react";
import { CardContext } from "../../context/cart.context";
import "./card.styles.scss";
const Card = ({ id, name, new_price, old_price, image, brand }) => {
  const { addToCard, cardItems } = useContext(CardContext);
  let new_display_price = new_price.slice(1);
  let old_display_price = old_price.slice(1);

  const off = (
    100 -
    (parseNumber(new_display_price) / parseNumber(old_display_price)) * 100
  ).toFixed(0);

  function parseNumber(value, locales = navigator.languages) {
    const example = Intl.NumberFormat(locales).format("1.1");
    const cleanPattern = new RegExp(`[^-+0-9${example.charAt(1)}]`, "g");
    const cleaned = value.replace(cleanPattern, "");
    const normalized = cleaned.replace(example.charAt(1), ".");
    return parseFloat(normalized);
  }

  return (
    <div className="card-container">
      <div className="product-image">
        <img src={image} alt={name} />
        {/*<div className="ratings"></div>*/}
      </div>
      <div className="card-details">
        <p className="product-title">
          {name.length > 20 ? `${name.slice(0, 20).trim()}...` : name}
        </p>
        <p className="product-brand">{brand}</p>
        <div className="card-bottom">
          <div className="price">
            <span className="new_price">Rs.{new_display_price}</span>
            <span className="old_price">Rs.{old_display_price}</span>
            <span className="off">({off}% OFF)</span>
          </div>
          {/*<Button
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
            </Button>*/}
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
