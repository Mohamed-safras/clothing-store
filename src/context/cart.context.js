import { createContext, useContext, useState } from "react";

import { ProductContext } from "./product.context";
export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const { products } = useContext(ProductContext);

  const setDefaultCard = () => {
    const defaultCard = {};
    for (let item of products) {
      defaultCard[item.id] = 0;
    }
    return defaultCard;
  };

  const [cardItems, setCardItems] = useState(setDefaultCard());
  const [message, setMessage] = useState("");

  let numberOfItems = 0;

  for (const [, value] of Object.entries(cardItems)) {
    numberOfItems += value;
  }

  const addToCard = (itemId) => {
    const item = products.find((item) => item.id === itemId);
    if (cardItems[itemId] !== Number.parseInt(item.limit)) {
      setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      cardItems[itemId] + 1 === Number.parseInt(item.limit)
        ? setMessage("item limit exceeded")
        : setMessage(item.limit + "product is available");
    }
  };

  const removeCardItems = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  return (
    <CardContext.Provider
      value={{ cardItems, addToCard, removeCardItems, message, numberOfItems }}
    >
      {children}
    </CardContext.Provider>
  );
};
