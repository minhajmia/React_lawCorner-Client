import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleService from "../SingleService/SingleService";

const MyService = () => {
  const [limitedService, setLimitedService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/limitedServices")
      .then((res) => res.json())
      .then((data) => setLimitedService(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl text-center font-extrabold mt-5">My Service</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 sm:mx-5  md:mx-10">
        {limitedService.map((service) => (
          <SingleService service={service} key={service._id} />
        ))}
      </div>
      <Link to="/services" className=" block text-center mb-5">
        <button className="btn  banner-btn">See All</button>
      </Link>
    </div>
  );
};

export default MyService;
