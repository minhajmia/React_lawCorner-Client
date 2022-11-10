import React from "react";
import { Link } from "react-router-dom";
import banner from "../../Utilities/Images/banner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse mt-5 lg:mx-10">
        <img src={banner} className="lg:max-h-80" />
        <div className="text-center lg:text-left items-center">
          <h1 className="text-3xl font-bold">Law Service by LawCorner</h1>
          <p className="py-6">
            LawCorner is a individual law service provide platform . Those who
            are about to learn and to get solution the particular topic of law
            they are cordially invited to this platform.For Learning , better
            practicing and also getting information about law,you can explore my
            service.
          </p>
          <Link to="/services">
            <button className="btn banner-btn ">All Services</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
