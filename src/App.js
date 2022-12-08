import React, { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { UserContext } from "./context/user.context";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Details from "./pages/Details.";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import SharedLayout from "./pages/SharedLayout";
import SharedProductLayout from "./pages/SharedProductLayout";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
const App = () => {
  const param = useLocation().pathname.split("/")[2];

  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path={`products/${param}`} element={<SharedProductLayout />}>
          <Route index element={<Products />} />
          <Route path={`:id`} element={<Details />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
