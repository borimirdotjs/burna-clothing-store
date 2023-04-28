import { Outlet } from "react-router-dom";
import Announcement from "./Announcement/Announcement";
import CartMenu from "../Cart/CartMenu";
import Nav from "./Nav/Nav";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <>
      <Toaster />
      <Nav />
      <Announcement />
      <CartMenu />
      {<Outlet />}
    </>
  );
};

export default RootLayout;
