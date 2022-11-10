import React from "react";
import Banner from "../../Components/Banner/Banner";
import MyService from "../../Components/MyService/MyService";
import Subscribe from "../../Components/Subscribe/Subscribe";
import WorkingSection from "../../Components/WorkingSection/WorkingSection";
import useTitle from "../../Hooks/useTitle";
import "./Home.css";

const Home = () => {
  useTitle("Home");
  return (
    <div className="my-16">
      <Banner />
      <MyService />
      <WorkingSection />
      <Subscribe />
    </div>
  );
};

export default Home;
