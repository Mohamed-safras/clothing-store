import React, { useContext } from "react";
import { CardContext } from "../../context/cart.context";
import { data } from "../shop/data";
import CartCard from "./Cart.card";
import "./cart.styles.scss";
const Cart = () => {
  const { cardItems } = useContext(CardContext);
  return (
    <div className="cart-container">
      {data.map((item) => {
        if (cardItems[item.id] !== 0) {
          return (
            <React.Fragment key={item.id}>
              <CartCard {...item} />
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};

export default Cart;
