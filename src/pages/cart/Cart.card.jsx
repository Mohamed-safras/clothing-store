import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { CardContext } from "../../context/cart.context";
import "./cartcard.styles.scss";
const CartCard = ({ id, name, price, image }) => {
  const { cardItems, removeCardItems, addToCard, message } =
    useContext(CardContext);
  return (
    <div className="cart-card-container">
      <div className="item_image">
        <img src={image} alt={name} />
      </div>
      <div className="item_details">
        <p>{name}</p>
        <p>$ {price}</p>
      </div>
      <div className="quantity">
        {message}
        <IconButton onClick={() => addToCard(id)}>
          <AddIcon sx={{ fontSize: 20, color: "#a1a0a5" }} />
        </IconButton>
        <input type="number" value={cardItems[id]} onChange={() => {}} />
        <IconButton onClick={() => removeCardItems(id)}>
          <RemoveIcon sx={{ fontSize: 20, color: "#a1a0a5" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default CartCard;
