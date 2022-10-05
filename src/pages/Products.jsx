import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import CategoryItem from "../components/categories/CategoryItem";
import "../styles/categories/categories.style.scss";

const Products = () => {
  const [items, setItems] = useState([]);
  const param = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then((response) => {
        return response.json();
      })
      .then((product) => {
        const data = product[param];
        if (!data) return;
        setItems(data);
      });
  }, [param]);

  return (
    <Fragment>
      <div className="categories-contianer">
        {items.map((category) => (
          <Link
            className="category-container"
            to={`${category.id}`}
            key={category.id}
          >
            <CategoryItem
              param={param}
              title={category.name}
              imageUrl={category.image}
            />
          </Link>
        ))}
      </div>
      <button onClick={() => navigate(-1)}>back to products</button>
    </Fragment>
  );
};

export default Products;
