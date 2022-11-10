import React, { useContext, useEffect, useState } from "react";
import SingleService from "../../Components/SingleService/SingleService";
import { AuthContext } from "../../Context/Context";
import useTitle from "./../../Hooks/useTitle";

const Services = () => {
  useTitle("Services");
  const [allServices, setAllServices] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://server-side-service-review.vercel.app/services")
      .then((response) => response.json())
      .then((data) => {
        setAllServices(data);
        setLoader(false);
      });
  }, []);

  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-bold text-center mt-10 ">All Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 sm:mx-3 md:mx-5 lg:mx-10">
        {allServices.map((service) => (
          <SingleService service={service} key={service._id} />
        ))}
        {loader && <progress className="progress w-56 mx-auto"></progress>}
      </div>
    </div>
  );
};

export default Services;
