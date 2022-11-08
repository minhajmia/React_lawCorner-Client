import React from "react";

const UserReviewList = ({ review }) => {
  const {
    reviewerPhoto,
    name,
    email,
    serviceTitle,
    servicePrice,
    reviewInfo,
    rating,
  } = review;
  console.log(review);
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
        <label>
          <button className="btn btn-error mr-2">Delete</button>
          <button className="btn btn-primary">Update</button>
        </label>
      </th>
    </tr>
  );
};

export default UserReviewList;
