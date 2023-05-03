import { Outlet } from "react-router-dom";
import Announcement from "./Announcement/Announcement";
import CartMenu from "../Cart/CartMenu";
import Nav from "./Nav/Nav";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";

const RootLayout = () => {
  const [toggle, setToggle] = useState(false); // MobileMenu toggle

  return (
    <>
      <Toaster />
      <Nav toggle={toggle} setToggle={setToggle} />
      <Announcement />
      <CartMenu />
      <MobileMenu toggle={toggle} setToggle={setToggle} />
      {<Outlet />}
    </>
  );
};

export default RootLayout;
