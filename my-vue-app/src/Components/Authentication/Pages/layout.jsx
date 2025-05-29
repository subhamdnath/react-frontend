import Navbar from "../Navbar";
import Home from "./home";
import Contact from "./contact";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <Navbar /> 
      {/* <Outlet /> */}
    </>
  );
};
export default Layout;
