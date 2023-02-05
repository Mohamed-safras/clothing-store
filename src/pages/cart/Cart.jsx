import React, { useContext } from "react";
import { CardContext } from "../../context/cart.context";
import { ProductContext } from "../../context/product.context";
import CartCard from "./Cart.card";

import { CartHeader, CartItems, CartsContainer } from "./carts.style";
const Cart = () => {
  const { cardItems, numberOfItems } = useContext(CardContext);
  const { products } = useContext(ProductContext);
  console.log(numberOfItems);
  return (
    <CartsContainer>
      {numberOfItems > 0 ? (
        <React.Fragment>
          <h1>My Shopping Cart</h1>

          <CartItems>
            <CartHeader>
              <p className="description">Description</p>
              <p className="size">Size</p>
              <p className="quantity">Quantity</p>
              <p className="remove">Remove</p>
              <p className="price">Price</p>
            </CartHeader>
            {products.map(
              (item) =>
                cardItems[item.id] !== 0 && (
                  <React.Fragment key={item.id}>
                    <CartCard {...item} />
                  </React.Fragment>
                )
            )}
          </CartItems>
        </React.Fragment>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </CartsContainer>
  );
};

export default Cart;
