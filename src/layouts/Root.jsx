import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = ({ children }) => {
  return (
    <>
      <Header key={"header"}/>
      {children ?? <Outlet />}
      <Footer key={"footer"}/>
    </>
  );
};

export default Root;
