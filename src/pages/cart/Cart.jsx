import React, { useContext } from "react";
import AdditionalService from "../../components/cart/AdditionalService";
import Delivery from "../../components/cart/Delivery";
import Order from "../../components/cart/Order";
import OrderSummary from "../../components/cart/OrderSummary";
import { CartContext } from "../../context/cart.context";
import CartCard from "./Cart.card";

import { Container } from "./carts.style";
const Cart = () => {
  const { cartItems, numberOfCartItems, total } = useContext(CartContext);

  return (
    <Container>
      <Order />
      <AdditionalService />
      <Delivery />

      <OrderSummary />
    </Container>
  );
};

export default Cart;
