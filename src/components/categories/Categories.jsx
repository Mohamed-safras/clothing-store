import "../../styles/categories/categories.style.scss";
import CategoryItem from "./CategoryItem";

const Categories = ({ categories }) => {
  return (
    <div className="categories-contianer">
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Categories;
