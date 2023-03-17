import { createContext, useEffect, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    const existing = cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    return existing;
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItems.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeCartItemAtOnce = (cartItems, productToRemove) => {
  const newCartItem = cartItems
    .filter((item) => item.id !== productToRemove.id)
    .map((cartItem) => cartItem);
  return newCartItem;
};

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeToCartItem: () => {},
  numberOfCartItems: 0,
  removeToCartAtOnce: () => {},
  total: 0,
});

const INITIALSTATE = {
  cartItems: [],
  numberOfCartItems: 0,
  total: 0,
};

export const CART_ACTIONS = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`unhandle type of ${type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, numberOfCartItems, total }, dispatch] = useReducer(
    cartReducer,
    INITIALSTATE
  );

  const updateCartItems = (cartItems) => {
    const numberOfCartItems = cartItems.reduce((prev, current) => {
      return prev + current.quantity;
    }, 0);

    const total = cartItems.reduce((prev, current) => {
      const new_price = current.new_price;

      return prev + current.quantity * Number.parseFloat(new_price);
    }, 0);

    localStorage.setItem("cart", JSON.stringify(cartItems));

    dispatch({
      type: CART_ACTIONS.SET_CART_ITEMS,
      payload: {
        total,
        numberOfCartItems,
        cartItems,
      },
    });
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) ?? [];
    updateCartItems(cartItems);
  }, []);

  const addToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItems(newCartItems);
  };

  const removeToCartItem = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItems(newCartItems);
  };

  const removeToCartAtOnce = (productToRemove) => {
    const newCartItems = removeCartItemAtOnce(cartItems, productToRemove);
    updateCartItems(newCartItems);
  };

  const value = {
    addToCart,
    cartItems,
    numberOfCartItems,
    total,
    dispatch,
    removeToCartItem,
    removeToCartAtOnce,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
