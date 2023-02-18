import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import CategoryItem from "../categories/CategoryItem";

import { useContext } from "react";
import { ProductContext } from "../../context/product.context";

const SliderComponent = ({ title }) => {
  const { categories } = useContext(ProductContext);
  const settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slide>
      <h3>{title}</h3>
      <Slider {...settings}>
        {categories.map((item, index) => (
          <CategoryItem key={index} title={item} />
        ))}
      </Slider>
    </Slide>
  );
};

export default SliderComponent;

const Slide = styled.div`
  width: 100%;
  padding: 0 15px;
  position: relative;

  h3 {
    margin: 10px 0;
  }
`;
