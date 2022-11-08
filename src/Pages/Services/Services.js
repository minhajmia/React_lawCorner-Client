import React, { useEffect, useState } from "react";
import SingleService from "../../Components/SingleService/SingleService";

const Services = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div>
      <h2 className="text-5xl font-bold text-center">All Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allServices.map((service) => (
          <SingleService service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
