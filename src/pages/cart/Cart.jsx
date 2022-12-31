import React, { useContext } from "react";
import { CardContext } from "../../context/cart.context";
import { data } from "../shop/data";
import CartCard from "./Cart.card";
import "./cart.styles.scss";
const Cart = () => {
  const { cardItems } = useContext(CardContext);
  return (
    <div className="cart-container">
      <div className="car-items">
        {data.map(
          (item) =>
            cardItems[item.id] !== 0 && (
              <React.Fragment key={item.id}>
                <CartCard {...item} />
              </React.Fragment>
            )
        )}
      </div>
    </div>
  );
};

export default Cart;
