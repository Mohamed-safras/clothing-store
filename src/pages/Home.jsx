import React, { useEffect, useState } from "react";

import Categories from "../components/categories/Categories";

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <Categories categories={categories} />
    </React.Fragment>
  );
};

export default Home;
