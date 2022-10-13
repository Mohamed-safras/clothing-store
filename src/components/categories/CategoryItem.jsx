import React from "react";
import "../../styles/categories/categoryItem.styles.scss";
const CategoryItem = ({ title, imageUrl }) => {
  return (
    <React.Fragment>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-contianer">
        <h2>{title}</h2>

        <p>shop now</p>
      </div>
    </React.Fragment>
  );
};

export default CategoryItem;
