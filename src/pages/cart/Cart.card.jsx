import AddIcon from "@mui/icons-material/Add";

import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { CardContext } from "../../context/cart.context";
import { colors } from "../../styles/colors/theme";
import {
  CartContainer,
  Description,
  Image,
  Price,
  ProductTitle,
  Quantity,
  Remove,
  Size,
} from "./cart.style";
import "./cartcard.styles.scss";

const CartCard = ({ id, title, new_price, image }) => {
  const { cardItems, removeCardItems, addToCard, message } =
    useContext(CardContext);
  return (
    <CartContainer>
      <Description>
        <Image>
          <img src={image} alt={title} />
        </Image>
        <ProductTitle>
          <p className="title">
            {title.length > 30
              ? `${title.slice(0, 30).trim()}...`
              : title.trim()}
          </p>
          <p className="brand">dasd</p>
        </ProductTitle>
      </Description>
      <Size>L</Size>
      <Quantity>
        <span className="add" onClick={() => addToCard(id)}>
          <AddIcon sx={{ fontSize: 18, color: `${colors.colorWhite}` }} />
        </span>
        <span className="count">{cardItems[id]}</span>
        <span className="remove" onClick={() => removeCardItems(id)}>
          <RemoveIcon sx={{ fontSize: 18, color: `${colors.inputBlack}` }} />
        </span>
      </Quantity>
      <Remove className="remove" onClick={() => removeCardItems(id)}>
        <CloseIcon sx={{ fontSize: 18, color: `${colors.inputBlack}` }} />
      </Remove>
      <Price className="price">Rs.{new_price.slice(1)}</Price>
    </CartContainer>
  );
};

export default CartCard;
