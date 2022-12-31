import React from "react";
import Categories from "../components/categories/Categories";
// import { UserContext } from "../context/user.context";
import stylesheet from "styled-components";
const Home = () => {
  return (
    <HomeContainer>
      <Categories />
    </HomeContainer>
  );
};

const HomeContainer = stylesheet.div`

  
`;

export default Home;
