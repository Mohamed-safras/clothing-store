import React from "react";
import Categories from "../components/categories/Categories";
// import { UserContext } from "../context/user.context";
import stylesheet from "styled-components";
import Banners from "../components/banner/Banners";
const Home = () => {
  return (
    <HomeContainer>
      <Banners />
      <Categories />
    </HomeContainer>
  );
};

const HomeContainer = stylesheet.div`

  
`;

export default Home;
