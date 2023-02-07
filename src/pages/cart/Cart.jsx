import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import { ProductContext } from "../../context/product.context";
import CartCard from "./Cart.card";

import { CartHeader, CartItems, CartsContainer } from "./carts.style";
const Cart = () => {
  const { cartItems, numberOfCartItems, total } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  return (
    <CartsContainer>
      <h1>My Shopping Cart</h1>

      {numberOfCartItems === 0 ? (
        <h1>Your Cart Looks Like Empty</h1>
      ) : (
        <CartItems>
          <CartHeader>
            <p className="description">Description</p>
            <p className="size">Size</p>
            <p className="quantity">Quantity</p>

            <p className="price">Price</p>
            <p className="remove">Remove</p>
          </CartHeader>
          {cartItems.map((item) => (
            <CartCard key={item.id} {...item} />
          ))}
          <p>Your to total is Rs.{total}</p>
        </CartItems>
      )}
    </CartsContainer>
  );
};

export default Cart;
