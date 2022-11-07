import React from "react";
import { Link } from "react-router-dom";

const MyService = () => {
  return (
    <div>
      <h2 className="text-3xl text-center font-extrabold">My Service</h2>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl my-10">
          <figure className="px-10 pt-10">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <Link to="/services" className="text-center ">
          <button className="btn btn-primary inline-block ">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default MyService;
