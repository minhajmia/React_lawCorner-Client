import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";

const UserReviewList = ({ review, handleDeleteReview }) => {
  const { user } = useContext(AuthContext);
  const { _id, email, reviewInfo, rating, reviewId, name } = review;
  const [serviceReview, setServiceReview] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${reviewId}`)
      .then((response) => response.json())
      .then((data) => {
        setServiceReview(data);
      });
  }, [reviewId]);

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar items-center">
            <div className="mask mask-circle w-12 h-12 ">
              <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
            <span className="ml-2"> {name}</span>
          </div>
        </div>
      </td>
      <td>
        {serviceReview?.title ? (
          <>
            <p>{serviceReview.title}</p>
          </>
        ) : (
          <>
            <p>{"null"}</p>
          </>
        )}
        <br />
        <span className="badge badge-ghost badge-sm">
          $ {serviceReview?.price}
        </span>
      </td>
      <td>{rating}</td>
      <th>
        <button className="btn btn-ghost btn-xs">{reviewInfo}</button>
      </th>
      <th>
        <button
          className="btn mr-2 btn-error"
          onClick={() => handleDeleteReview(_id)}
        >
          Delete Review
        </button>
        <Link to={`/update/${_id}`}>
          <button className="btn banner-btn">Edit Review</button>
        </Link>
      </th>
    </tr>
  );
};

export default UserReviewList;
