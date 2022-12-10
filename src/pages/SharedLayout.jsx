import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/SideBar/Index";
// import { UserContext } from "../context/user.context";

const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTopBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Fragment>
      <Navbar toggleTopBar={toggleTopBar} />
      <SideBar isOpen={isOpen} toggleTopBar={toggleTopBar} />
      <Outlet />
    </Fragment>
  );
};

export default SharedLayout;
