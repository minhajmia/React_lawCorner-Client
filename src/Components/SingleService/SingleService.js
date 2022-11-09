import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "./SingleService.css";

const SingleService = ({ service }) => {
  const { title, _id, price, description, rating, img } = service;
  return (
    <div>
      <div>
        <div className="card bg-base-100 shadow-xl my-10 ">
          <figure className="">
            <PhotoProvider>
              <PhotoView src={img}>
                <img src={img} alt="" />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description.slice(0, 100)} ...</p>
            <div className="card-actions ">
              <Link to={`/service/${_id}`}>
                <button
                  className="btn banner-btn 
                "
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
