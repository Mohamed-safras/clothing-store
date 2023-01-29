import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import CardProvider from "./context/cart.context";

import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/Contact";
import Details from "./pages/Details.";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import SharedLayout from "./pages/SharedLayout";
import SharedProductLayout from "./pages/SharedProductLayout";
import Shop from "./pages/shop/Shop";

const App = () => {
  const param = useLocation().pathname.split("/")[2];

  // const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path={`shop/${param}`} element={<Shop />} />
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
