import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Review from "../../Components/Review/Review";
import SingleReviewer from "../../Components/SingleReviewer/SingleReviewer";
import { AuthContext } from "../../Context/Context";
import useTitle from "../../Hooks/useTitle";
import MyReviews from "./../MyReviews/MyReviews";

const ViewDetails = () => {
  useTitle("ViewDetails");
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, img, price, rating, _id, description } = service;

  const [productReview, setProductReview] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(`https://server-side-service-review.vercel.app/userReviews?id=${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductReview(data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, [_id]);
  return (
    <div className="mx-auto">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className=" rounded-lg shadow-2xl mt-10" />
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-4">Price : $ {price}</p>
            <p className="pb-4">Ratings : {rating}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full ">
        <div className="grid  card bg-base-100 rounded-box place-items-center mt-10">
          <div>
            <h2 className="text-center text-1xl mt-5 font-semibold">
              Service Description
            </h2>
            <p className="p-5">{description}</p>
          </div>
          <div>
            <h3 className="text-center text-1xl mt-5 font-semibold">Reviews</h3>
            {loader && (
              <p className="text-orange-500 text-3xl mt-10">Loading....</p>
            )}
            <div className=" items-center text-center justify-center grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
              {productReview.map((singleRev) => (
                <SingleReviewer singleRev={singleRev} key={singleRev._id} />
              ))}
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="grid  card bg-base-100 rounded-box place-items-center mb-10">
          <div>
            {user?.uid ? (
              <>
                <Review service={service} />
              </>
            ) : (
              <>
                <Link to="/login">
                  {" "}
                  <button className="btn banner-btn capitalize">
                    Please login to add a review
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
