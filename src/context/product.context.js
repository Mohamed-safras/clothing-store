import { createContext, useEffect, useState } from "react";
import SHOPDATA from "../data/clothing.json";

export const ProductContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOPDATA.data);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
