import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Review from "../../Components/Review/Review";
import { AuthContext } from "../../Context/Context";

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, img, price, rating, _id, description } = service;

  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?id=${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setAllReviews(data);
      })
      .catch((err) => console.log(err));
  }, [_id]);
  console.log(allReviews);
  return (
    <>
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className=" rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-4">Price : {price}</p>
            <p>{description}</p>
            <p className="pb-4">Ratings : {rating}</p>
            {allReviews.length}
          </div>
        </div>
      </div>
      <div>
        {user?.uid ? (
          <>
            <Review service={service} />
          </>
        ) : (
          <>
            <Link to="/login">
              {" "}
              <button className="btn ">Please login to add a review</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default ViewDetails;
