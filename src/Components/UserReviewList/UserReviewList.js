import React from "react";
import { Link } from "react-router-dom";

const UserReviewList = ({ review }) => {
  const {
    reviewerPhoto,
    name,
    email,
    serviceTitle,
    servicePrice,
    reviewInfo,
    rating,
    reviewId,
  } = review;
  // delete review
  const handleDeleteReview = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Delete Successfully");
        }
      })
      .catch((err) => console.log(err));
  };
  // update review

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={reviewerPhoto} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceTitle}
        <br />
        <span className="badge badge-ghost badge-sm">${servicePrice}</span>
      </td>
      <td>{rating}</td>
      <th>
        <button className="btn btn-ghost btn-xs">{reviewInfo}</button>
      </th>
      <th>
        <button
          className="btn mr-2"
          onClick={() => handleDeleteReview(reviewId)}
        >
          Delete Review
        </button>
        <Link to={`/update/${reviewId}`}>
          <button className="btn btn-primary">Edit Review</button>
        </Link>
      </th>
    </tr>
  );
};

export default UserReviewList;
