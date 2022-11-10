import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleService from "../SingleService/SingleService";

const MyService = () => {
  const [limitedService, setLimitedService] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://server-side-service-review.vercel.app/limitedServices")
      .then((res) => res.json())
      .then((data) => {
        setLimitedService(data);
        setLoader(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="my-16">
      <h2 className="text-3xl text-center font-extrabold mt-5">My Service</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 sm:mx-5  md:mx-10">
        {limitedService.map((service) => (
          <SingleService service={service} key={service._id} />
        ))}
        {loader && <progress className="progress w-56 mx-auto"></progress>}
      </div>
      <div className="text-center">
        {" "}
        <Link to="/services" className=" inline-block  mb-5 ">
          <button className="btn  banner-btn capitalize">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default MyService;
