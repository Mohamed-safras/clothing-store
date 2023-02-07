import AddIcon from "@mui/icons-material/Add";

import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
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

const CartCard = (props) => {
  const { title, new_price, image, quantity } = props;

  const { addToCart, removeToCartItem, removeToCartAtOnce } =
    useContext(CartContext);
  const addToProductCart = () => addToCart(props);
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
        <span className="add" onClick={addToProductCart}>
          <AddIcon sx={{ fontSize: 18, color: `${colors.colorWhite}` }} />
        </span>
        <span className="count">{quantity}</span>
        <span className="remove" onClick={() => removeToCartItem(props)}>
          <RemoveIcon sx={{ fontSize: 18, color: `${colors.inputBlack}` }} />
        </span>
      </Quantity>

      <Price className="price">Rs.{new_price.slice(1)}</Price>
      <Remove className="remove" onClick={() => removeToCartAtOnce(props)}>
        <CloseIcon sx={{ fontSize: 18, color: `${colors.inputBlack}` }} />
      </Remove>
    </CartContainer>
  );
};

export default CartCard;
