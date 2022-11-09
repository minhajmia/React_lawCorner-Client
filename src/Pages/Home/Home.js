import React from "react";
import Banner from "../../Components/Banner/Banner";
import MyService from "../../Components/MyService/MyService";
import useTitle from "../../Hooks/useTitle";
import "./Home.css";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <MyService />
    </div>
  );
};

export default Home;
