import React from "react";
import "./WorkingSection.css";
import img1 from "../../Utilities/Images/1.png";
import img2 from "../../Utilities/Images/2.png";
import img3 from "../../Utilities/Images/3.png";
import img4 from "../../Utilities/Images/4.png";

const WorkingSection = () => {
  return (
    <div className="my-24 text-center text-3xl font-bold mx-10">
      <h2>Working With</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center my-10">
        <img src={img1} alt="" className=" rounded-lgs" />
        <img src={img4} alt="" />
        <img src={img3} alt="" />
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default WorkingSection;
