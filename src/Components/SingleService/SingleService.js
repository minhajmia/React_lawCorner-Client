import React from "react";
import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  const { title, _id, price, description, rating, img } = service;
  return (
    <div>
      <div>
        <div className="card bg-base-100 shadow-xl my-10">
          <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description.slice(0, 100)} ...</p>
            <div className="card-actions">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
