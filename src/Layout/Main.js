import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Parts/Footer/Footer";
import Header from "../Parts/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
