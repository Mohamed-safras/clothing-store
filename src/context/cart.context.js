import { createContext, useState } from "react";
import { data } from "../pages/shop/data";
export const CardContext = createContext();

const setDefaultCard = () => {
  const defaultCard = {};
  for (let item of data) {
    defaultCard[item.id] = 0;
  }
  return defaultCard;
};

export const CardProvider = ({ children }) => {
  const [cardItems, setCardItems] = useState(setDefaultCard());
  const [message, setMessage] = useState("");
  const addToCard = (itemId) => {
    const item = data.find((item) => item.id === itemId);
    if (cardItems[itemId] !== item.limit) {
      setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      cardItems[itemId] + 1 === item.limit
        ? setMessage("item limit exceeded")
        : setMessage(item.limit + "product is available");
    }
  };

  const removeCardItems = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  return (
    <CardContext.Provider
      value={{ cardItems, addToCard, removeCardItems, message }}
    >
      {children}
    </CardContext.Provider>
  );
};
