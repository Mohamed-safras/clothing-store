import React from "react";
import "./categoryItem.styles.scss";
const CategoryItem = ({ title, imageUrl }) => {
  return (
    <div className="category-card">
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
    </div>
  );
};

export default CategoryItem;
