import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Details from "./pages/Details.";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";
const App = () => {
  const { pathname } = useLocation();
  const category = pathname.split("/")[1];
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path={`/${category}/details/:id`} element={<Details />} />
        </Route>

        <Route path="signin" element={<SignIn />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
