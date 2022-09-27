import { Link } from "react-router-dom";
import "../../styles/categories/categories.style.scss";
import CategoryItem from "./CategoryItem";

const Categories = ({ categories }) => {
  return (
    <div className="categories-contianer">
      {categories.map((category) => (
        <Link
          className="category-container"
          to={`/${category.title}/details/${category.id}`}
          key={category.id}
        >
          <CategoryItem {...category} />
        </Link>
      ))}
    </div>
  );
};

export default Categories;
