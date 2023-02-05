import { Label } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import { Button, Checkbox, IconButton } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useContext, useState } from "react";

import { CardContext } from "../../context/cart.context";
import { colors } from "../../styles/colors/theme";

import {
  Brand,
  CardBottom,
  CardContainer,
  CardDetails,
  CardHeader,
  Price,
  ProductImage,
  ProductTitle,
  Rating,
  Sizes,
  Wishlist,
} from "./products.style";

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

  const [isHover, setIsHover] = useState(false);

  return (
    <CardContainer
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <ProductImage>
        <img src={image} alt={name} />
        <Rating>
          <span>3.9</span>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
            alt=""
          />
        </Rating>
      </ProductImage>
      <CardDetails>
        <CardHeader>
          <ProductTitle>
            {name.length > 20 ? `${name.slice(0, 20).trim()}...` : name}
          </ProductTitle>

          {!isHover ? (
            <Brand>{brand}</Brand>
          ) : (
            <Sizes>
              <span>Sizes:</span>
              <ul className="size">
                <li>M</li>
                <li>L</li>
              </ul>
            </Sizes>
          )}
        </CardHeader>

        <CardBottom>
          <Price>
            <span className="new_price">Rs.{new_display_price}</span>
            <span className="old_price">Rs.{old_display_price}</span>
            <span className="off">({off}% OFF)</span>
          </Price>
        </CardBottom>
        <Wishlist>
          {false ? (
            <IconButton>
              <FavoriteIcon sx={{ color: pink[400] }} />
            </IconButton>
          ) : (
            <IconButton>
              <FavoriteBorderSharpIcon />
            </IconButton>
          )}
          <span>WISHLIST</span>
        </Wishlist>
      </CardDetails>
    </CardContainer>
  );
};

export default Card;
