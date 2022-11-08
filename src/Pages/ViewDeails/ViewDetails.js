import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const service = useLoaderData();
  const { title, img, price } = service;
  return (
    <div>
      <h2>Service Details {price}</h2>
    </div>
  );
};

export default ViewDetails;
