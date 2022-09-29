import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Details from "./pages/Details.";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import SharedLayout from "./pages/SharedLayout";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";
const App = () => {
  const param = useLocation().pathname.split("/")[2];
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path={`products/${param}`} element={<Products />} />
          <Route path={`products/${param}/:id`} element={<Details />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
