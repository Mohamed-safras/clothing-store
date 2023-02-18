import { createContext, useEffect, useState } from "react";

import { getProducts } from "../utils/firebase/createProduct";
export const ProductContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    const categories = getProducts();
    categories
      .then((category) => {
        setCategories(Object.keys(category));
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <ProductContext.Provider value={{ categories }}>
      {children}
    </ProductContext.Provider>
  );
};
