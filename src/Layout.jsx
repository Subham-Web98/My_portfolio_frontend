import { Outlet } from "react-router-dom";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
