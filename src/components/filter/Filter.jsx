import { Checkbox } from "@mui/material";
import React from "react";

import "../filter/filter.styles.scss";
const categories = [
  "hats",
  "jackets",
  "sneakers",
  "t-shirts",
  "shirts",
  "pants",
];

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="categories">
        <h3>Categories</h3>
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <Checkbox inputProps={{ "aria-label": "controlled" }} />
          </div>
        ))}
      </div>
      <div className="categories">
        <h3>Categories</h3>
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <Checkbox inputProps={{ "aria-label": "controlled" }} />
          </div>
        ))}
      </div>
      <div className="categories">
        <h3>Categories</h3>
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <Checkbox inputProps={{ "aria-label": "controlled" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
