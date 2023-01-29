import React from "react";

// import { UserContext } from "../context/user.context";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Banners from "../components/banner/Banners";
import SliderComponent from "../components/sliders/Slider";

import Shop from "./shop/Shop";
const Home = () => {
  return (
    <HomeContainer>
      <Banners />
      <SliderComponent title={"Catagories of items"} />
      <SliderComponent />
      <SliderComponent />
    </HomeContainer>
  );
};

const HomeContainer = styled.div``;

export default Home;
