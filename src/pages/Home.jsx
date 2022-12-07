import React, { useContext, useEffect } from "react";
import Categories from "../components/categories/Categories";
import { UserContext } from "../context/user.context";

const Home = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <React.Fragment>
      <Categories />
    </React.Fragment>
  );
};

export default Home;
