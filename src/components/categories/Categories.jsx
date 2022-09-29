import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/categories/categories.style.scss";
import CategoryItem from "./CategoryItem";

const Categories = () => {
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
    <div className="categories-contianer">
      {categories.map((category) => (
        <Link
          className="category-container"
          to={`products/${category.title}`}
          key={category.id}
        >
          <CategoryItem {...category} />
        </Link>
      ))}
    </div>
  );
};

export default Categories;
